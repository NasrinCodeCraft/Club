export function initPacmanGame(onDataUpdate) {
    // Main Canvas
    let mainCanvas = document.getElementById('mainCanvas');
    let mainCtx = mainCanvas.getContext('2d');

// Game states
    let STATE = {
        LOADING: 0,
        MENU: 1,
        PLAYING: 2,
        PAUSED: 3,
        GAME_OVER: 4,
        WIN: 5
    };

    let gameStarted = false;
    let currentState = STATE.LOADING;

// Game variables
    let TILE_SIZE = 20;
    let GHOST_RELEASE_DELAY = 300;
    let POWER_PELLET_DURATION = 500;
    let ORIGINAL_MAP = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,4,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,4,1],
        [1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1],
        [1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1],
        [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
        [1,2,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,2,1],
        [1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1],
        [1,1,1,1,2,1,1,1,0,1,0,1,1,1,2,1,1,1,1],
        [1,1,1,1,2,1,0,0,0,0,0,0,0,1,2,1,1,1,1],
        [1,1,1,1,2,1,0,1,1,3,1,1,0,1,2,1,1,1,1],
        [0,2,2,2,2,0,0,1,3,3,3,1,0,0,2,2,2,2,0],
        [1,1,1,1,2,1,0,1,1,1,1,1,0,1,2,1,1,1,1],
        [1,1,1,1,2,1,0,0,0,0,0,0,0,1,2,1,1,1,1],
        [1,1,1,1,2,1,0,1,1,1,1,1,0,1,2,1,1,1,1],
        [1,4,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,4,1],
        [1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1],
        [1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1],
        [1,1,2,1,2,1,2,1,1,1,1,1,2,1,2,1,2,1,1],
        [1,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1],
        [1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1],
        [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    let MAP = JSON.parse(JSON.stringify(ORIGINAL_MAP));

    mainCanvas.width = ORIGINAL_MAP[0].length * TILE_SIZE + 40;
    mainCanvas.height = ORIGINAL_MAP.length * TILE_SIZE + 200;

    // mainCanvas.style.border= "6px solid white";

// Game canvas
    let gameCanvas, ctx;

// Game variables
    let score = 0;
    let lives = 3;
    let totalPellets = 0;
    let frame = 0;
    let powerMode = false;
    let powerModeTimer = 0;
    let isResetting = false;
    let gameInterval;
    let energyEl = document.querySelectorAll('.energy-fill');

// Audio
    let audio_fail = new Audio('/games/pacMan/fail.mp3');
    let audio_eating_pac = new Audio('/games/pacMan/eating-pac.mp3');
    let muted = false;
    let gamePaused = false;
    let audio_fail_currentTime = 1.25;
    let audio_eating_pac_currentTime = 0;

// UI elements
    let uiElements = {
        speaker: { x: 0, y: 0, width: 40, height: 40 },
        pause: { x: 40, y: 0, width: 40, height: 40 }
    };

// Pac-Man
    let pacman = {
        x: 0, y: 0,
        radius: 0,
        speed: 2,
        dx: 0, dy: 0,
        direction: 'right'
    };

// Ghosts
    let ghosts = [];
    let initialGhosts = [];
    let ghostColors = ['red', 'pink', 'cyan', 'orange'];

// Power pellet image
    let powerPelletImg = new Image();
    powerPelletImg.src = '/games/pacMan/wiki.svg';

// Input
    let pressedKeys = [];
    let validKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

// Loader variables
    let loaderFrame = 0;
    let loaderDots = [];
    let assetsLoaded = 0;
    let totalAssets = 3; // fail.mp3, eating-pac.mp3, and power pellet image

// Initialize loader dots
    function initLoaderDots() {
        loaderDots.length = 0;
        let centerX = mainCanvas.width / 2;
        let centerY = mainCanvas.height / 2;

        for (let i = 0; i < 4; i++) {
            loaderDots.push({
                x: centerX + 60 + i * 40,
                y: centerY,
                radius: 15,
                delay: i * 5,
                originalY: centerY
            });
        }
    }

// Draw loader like freepacman.org
    function drawLoader() {
        // Black background
        mainCtx.fillStyle = 'black';
        mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

        let centerX = mainCanvas.width / 2;
        let centerY = mainCanvas.height / 2;

        // Draw Pac-Man
        let pacmanRadius = 40;
        let mouthAngle = 0.3 + 0.3 * Math.sin(loaderFrame * 0.15);

        mainCtx.save();
        mainCtx.translate(centerX - 100, centerY);

        // Draw Pac-Man body
        mainCtx.beginPath();
        mainCtx.arc(0, 0, pacmanRadius, mouthAngle * Math.PI, (2 - mouthAngle) * Math.PI);
        mainCtx.lineTo(0, 0);
        mainCtx.fillStyle = '#FF0';
        mainCtx.fill();
        mainCtx.closePath();

        mainCtx.restore();

        // Draw dots with bounce animation
        loaderDots.forEach(dot => {
            let bounce = Math.max(0, Math.sin((loaderFrame - dot.delay) * 0.1)) * 20;
            let yPos = dot.originalY - bounce;
            let alpha = 0.4 + (bounce / 20) * 0.6;

            mainCtx.beginPath();
            mainCtx.arc(dot.x, yPos, dot.radius, 0, Math.PI * 2);
            mainCtx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            mainCtx.fill();
            mainCtx.closePath();

            // Move dots slowly to the left
            dot.x -= 0.5;
            if (dot.x < centerX - 60) {
                dot.x = centerX + 60 + 3 * 40;
            }
        });

        // Draw LOADING text
        mainCtx.fillStyle = '#FF0';
        mainCtx.font = 'bold 36px "Courier New", monospace';
        mainCtx.textAlign = 'center';
        mainCtx.textBaseline = 'middle';

        // Animated LOADING text
        let loadingText = "LOADING";
        let charSpacing = 30;
        let startX = centerX - (loadingText.length * charSpacing) / 2 + charSpacing / 2;

        for (let i = 0; i < loadingText.length; i++) {
            let char = loadingText[i];
            let pulse = Math.sin(loaderFrame * 0.1 + i * 0.5) * 0.3 + 0.7;
            let yOffset = Math.sin(loaderFrame * 0.1 + i * 0.8) * 5;

            mainCtx.fillStyle = `rgba(255, 255, 0, ${pulse})`;
            mainCtx.fillText(char, startX + i * charSpacing, centerY + 100 + yOffset);
        }

        loaderFrame++;
    }

// Initialize game
    function initGame() {
        // Create game canvas
        gameCanvas = document.createElement('canvas');
        ctx = gameCanvas.getContext('2d');

        // TILE_SIZE = Math.min(20, Math.floor(Math.min(window.innerWidth, window.innerHeight * 1.5) / MAP[0].length));

        gameCanvas.width = MAP[0].length * TILE_SIZE;
        gameCanvas.height = MAP.length * TILE_SIZE;

        // gameCanvas.style.border="2px solid white";

        // Initialize game variables
        totalPellets = MAP.flat().filter(tile => tile === 2 || tile === 4).length;

        pacman = {
            x: TILE_SIZE * 9 + TILE_SIZE / 2,
            y: TILE_SIZE * 17 + TILE_SIZE / 2,
            radius: TILE_SIZE / 2 - 2,
            speed: 2,
            dx: 0,
            dy: 0,
            direction: 'right'
        };

        // Initialize ghosts
        let ghostSpawns = [];
        for (let y = 0; y < ORIGINAL_MAP.length; y++) {
            for (let x = 0; x < ORIGINAL_MAP[y].length; x++) {
                if (ORIGINAL_MAP[y][x] === 3) {
                    ghostSpawns.push({x, y});
                }
            }
        }

        initialGhosts = ghostSpawns.map((spawn, i) => ({
            x: TILE_SIZE * spawn.x + TILE_SIZE / 2,
            y: TILE_SIZE * spawn.y + TILE_SIZE / 2,
            radius: TILE_SIZE / 2 - 2,
            speed: 2,
            dx: 0,
            dy: 0,
            color: ghostColors[i],
            active: i === 0,
            isShaking: false,
            isVulnerable: false,
            isEaten: false,
            spawn: spawn
        }));

        ghosts = JSON.parse(JSON.stringify(initialGhosts));

        // Position UI elements
        uiElements.speaker.x = 20;
        uiElements.speaker.y = 50;
        uiElements.pause.x = uiElements.speaker.x + 50;
        uiElements.pause.y = uiElements.speaker.y;
    }

// Draw functions
    function drawWall(x, y) {
        ctx.fillStyle = '#0000AA';

        ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);

        // Add some texture to walls
        ctx.strokeStyle = '#0000FF';
        ctx.lineWidth = 1;
        ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    function drawPellet(x, y) {
        ctx.beginPath();
        ctx.arc(x * TILE_SIZE + TILE_SIZE / 2, y * TILE_SIZE + TILE_SIZE / 2, 3, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    function drawPowerPellet(x, y) {
        let scaleX = Math.cos(frame * 0.07);
        ctx.save();
        ctx.translate(x * TILE_SIZE + TILE_SIZE / 2, y * TILE_SIZE + TILE_SIZE / 2);
        ctx.scale(scaleX, 1);
        ctx.drawImage(powerPelletImg, -TILE_SIZE / 2, -TILE_SIZE / 2, TILE_SIZE, TILE_SIZE);
        ctx.restore();
    }

    function drawMap() {
        for (let y = 0; y < MAP.length; y++) {
            for (let x = 0; x < MAP[y].length; x++) {
                if (MAP[y][x] === 1) {
                    drawWall(x, y);
                } else if (MAP[y][x] === 2) {
                    drawPellet(x, y);
                } else if (MAP[y][x] === 4) {
                    drawPowerPellet(x, y);
                }
            }
        }
    }

    function drawPacman() {
        let mouthOpenRatio = 0.2;
        if (pacman.dx !== 0 || pacman.dy !== 0) {
            mouthOpenRatio = 0.2 + 0.18 * Math.sin(frame * 0.4);
        }

        ctx.save();
        ctx.translate(pacman.x, pacman.y);

        let rotation = 0;
        if (pacman.direction === 'right') rotation = 0;
        else if (pacman.direction === 'left') rotation = Math.PI;
        else if (pacman.direction === 'down') rotation = 0.5 * Math.PI;
        else if (pacman.direction === 'up') rotation = 1.5 * Math.PI;

        ctx.rotate(rotation);

        ctx.beginPath();
        ctx.arc(0, 0, pacman.radius, mouthOpenRatio * Math.PI, (2 - mouthOpenRatio) * Math.PI);
        ctx.lineTo(0, 0);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.closePath();

        ctx.restore();
    }

    function drawGhost(ghost) {
        // if (!ghost.active) return;

        let x = ghost.x;
        let y = ghost.y;
        let radius = ghost.radius;
        let color = ghost.isVulnerable ? 'blue' : ghost.color;

        if (ghost.isShaking) {
            let laughSpeed = 0.6;
            let laughIntensity = 8;
            let laughAmount = Math.abs(Math.sin(frame * laughSpeed));
            radius += laughAmount * laughIntensity * 0.5;
            y -= laughAmount * laughIntensity;
        }

        if (!ghost.isEaten) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, radius, Math.PI, 0);

            if ((ghost.dx !== 0 || ghost.dy !== 0) && !ghost.isShaking) {
                let wave1 = y + radius + Math.sin(frame * 0.4) * 2;
                let wave2 = y + radius + Math.cos(frame * 0.4) * 2;
                ctx.lineTo(x + radius, wave1);
                ctx.lineTo(x + radius * (2/3), wave2);
                ctx.lineTo(x + radius * (1/3), wave1);
                ctx.lineTo(x, wave2);
                ctx.lineTo(x - radius * (1/3), wave1);
                ctx.lineTo(x - radius * (2/3), wave2);
                ctx.lineTo(x - radius, wave1);
            } else {
                ctx.lineTo(x + radius, y + radius);
                ctx.lineTo(x + radius * (2/3), y + radius * (5/6));
                ctx.lineTo(x + radius * (1/3), y + radius);
                ctx.lineTo(x, y + radius * (5/6));
                ctx.lineTo(x - radius * (1/3), y + radius);
                ctx.lineTo(x - radius * (2/3), y + radius * (5/6));
                ctx.lineTo(x - radius, y + radius);
            }

            ctx.closePath();
            ctx.fill();

            // Add a subtle shadow
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Eyes
        let eyeRadius = radius / 3;
        let eyeY = y - radius / 5;
        let leftEyeX = x - radius / 2.5;
        let rightEyeX = x + radius / 2.5;

        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(leftEyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
        ctx.arc(rightEyeX, eyeY, eyeRadius, 0, 2 * Math.PI);
        ctx.fill();

        // Pupils
        let pupilRadius = eyeRadius / 2;
        let pupilOffsetX = 0;
        let pupilOffsetY = 0;

        if (ghost.dx > 0) { // Moving right
            pupilOffsetX = pupilRadius;
        } else if (ghost.dx < 0) { // Moving left
            pupilOffsetX = -pupilRadius;
        } else if (ghost.dy > 0) { // Moving down
            pupilOffsetY = pupilRadius;
        } else if (ghost.dy < 0) { // Moving up
            pupilOffsetY = -pupilRadius;
        } else { // Not moving
            pupilOffsetX = Math.sin(frame * 0.1) * pupilRadius;
        }

        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(leftEyeX + pupilOffsetX, eyeY + pupilOffsetY, pupilRadius, 0, 2 * Math.PI);
        ctx.arc(rightEyeX + pupilOffsetX, eyeY + pupilOffsetY, pupilRadius, 0, 2 * Math.PI);
        ctx.fill();
    }

    function drawUI() {
        // Draw background for UI
        // mainCtx.fillStyle = 'rgba(0, 0, 50, 0.9)';
        mainCtx.fillRect(0, 0, mainCanvas.width, 60);

        // Draw speaker icon
        mainCtx.fillStyle = '#FFF';
        mainCtx.strokeStyle = '#FFF';
        mainCtx.lineWidth = 2;

        mainCtx.beginPath();
        mainCtx.moveTo(uiElements.speaker.x + 5, uiElements.speaker.y + 15);
        mainCtx.lineTo(uiElements.speaker.x + 12, uiElements.speaker.y + 15);
        mainCtx.lineTo(uiElements.speaker.x + 20, uiElements.speaker.y + 10);
        mainCtx.lineTo(uiElements.speaker.x + 20, uiElements.speaker.y + 30);
        mainCtx.lineTo(uiElements.speaker.x + 12, uiElements.speaker.y + 25);
        mainCtx.lineTo(uiElements.speaker.x + 5, uiElements.speaker.y + 25);
        mainCtx.closePath();
        mainCtx.fill();

        if (!muted) {
            mainCtx.beginPath();
            mainCtx.arc(uiElements.speaker.x + 22, uiElements.speaker.y + 20, 6, -0.5, 0.5);
            mainCtx.stroke();
            mainCtx.beginPath();
            mainCtx.arc(uiElements.speaker.x + 22, uiElements.speaker.y + 20, 10, -0.5, 0.5);
            mainCtx.stroke();
        } else {
            mainCtx.beginPath();
            mainCtx.moveTo(uiElements.speaker.x + 24, uiElements.speaker.y + 12);
            mainCtx.lineTo(uiElements.speaker.x + 34, uiElements.speaker.y + 28);
            mainCtx.moveTo(uiElements.speaker.x + 34, uiElements.speaker.y + 12);
            mainCtx.lineTo(uiElements.speaker.x + 24, uiElements.speaker.y + 28);
            mainCtx.stroke();
        }

        // Draw pause/play button
        if (gamePaused) {
            // Play button
            mainCtx.fillStyle = '#FFF';
            mainCtx.beginPath();
            mainCtx.moveTo(uiElements.pause.x + 10, uiElements.pause.y + 10);
            mainCtx.lineTo(uiElements.pause.x + 30, uiElements.pause.y + 20);
            mainCtx.lineTo(uiElements.pause.x + 10, uiElements.pause.y + 30);
            mainCtx.closePath();
            mainCtx.fill();
        } else {
            // Pause button
            mainCtx.fillStyle = '#FFF';
            mainCtx.fillRect(uiElements.pause.x + 8, uiElements.pause.y + 10, 6, 20);
            mainCtx.fillRect(uiElements.pause.x + 22, uiElements.pause.y + 10, 6, 20);
        }

        // Draw score
        mainCtx.fillStyle = '#FFF';
        mainCtx.font = 'bold 20px Arial';
        mainCtx.textAlign = 'left';
        mainCtx.fillText('SCORE: ' + score, uiElements.pause.x + 50, uiElements.pause.y + 25);
        // Draw lives
        mainCtx.fillStyle = '#FFF';
        mainCtx.font = 'bold 20px Arial';
        mainCtx.textAlign = 'right';
        mainCtx.fillText('LIVES: ' + lives, mainCanvas.width - 20, uiElements.pause.y + 25);

        // Draw title
        mainCtx.fillStyle = '#FF0';
        mainCtx.font = 'bold 36px "Courier New", monospace';
        mainCtx.textAlign = 'center';
        mainCtx.textBaseline = 'middle';
        mainCtx.fillText('PAC-MAN', mainCanvas.width / 2, 30);

        drawController()

        syncUI()
    }

    const controller = {
        size: 40,
        gap: 25
    }

    function drawResetButton() {
        if(window.innerWidth >= 1024) return;

        let btnX = mainCanvas.width / 2 - 100;
        let btnY = mainCanvas.height/ 2 + 60;

        mainCtx.globalAlpha = Math.sin(Date.now() * 0.005) * 0.2 + 0.8;;
        mainCtx.fillStyle = '#00E489';
        mainCtx.fillRect(btnX, btnY, 200, 50);
        mainCtx.globalAlpha = 1;

        mainCtx.fillStyle = 'white';
        mainCtx.font = 'bold 20px Arial';
        mainCtx.fillText('RESET GAME', mainCanvas.width/2, btnY + 26);

        window.resetBtn = {x:btnX, y:btnY, w:200, h:50};
    }

    const controllerButtons = {};

    function drawController() {
        if(window.innerWidth >= 1024) {
            return;
        }
        const centerX = mainCanvas.width/2;
        const bottomY = mainCanvas.height - 30;

        const up  = {
            x: centerX - controller.size / 2,
            y: bottomY - controller.size - controller.gap,
            w: controller.size,
            h: controller.size
        };

        const down = {
            x: centerX - controller.size / 2,
            y: bottomY - controller.size + controller.gap,
            w: controller.size,
            h: controller.size
        }

        const left = {
            x: centerX - controller.size - controller.size /2 - controller.gap / 2,
            y: bottomY - controller.size,
            w: controller.size,
            h: controller.size
        }

        const right = {
            x: centerX + controller.size /2 + controller.gap / 2,
            y: bottomY - controller.size,
            w: controller.size,
            h: controller.size
        }

        controllerButtons.up = up;
        controllerButtons.down = down;
        controllerButtons.left = left;
        controllerButtons.right = right;

        mainCtx.strokeStyle = '#fff';
        mainCtx.lineWidth = 2;
        mainCtx.strokeRect(up.x, up.y, up.w, up.h);
        mainCtx.strokeRect(down.x, down.y, down.w, down.h);
        mainCtx.strokeRect(left.x, left.y, left.w, left.h);
        mainCtx.strokeRect(right.x, right.y, right.w, right.h);

        mainCtx.fillText('↑', up.x + up.w / 2, up.y + up.h /2);
        mainCtx.fillText('↓', down.x + down.w / 2, down.y + down.h /2);
        mainCtx.fillText('←', left.x + left.w / 2, left.y + left.h /2);
        mainCtx.fillText('→', right.x + right.w / 2, right.y + right.h /2);
    }

    const syncUI = () => {
        onDataUpdate({
            score,
            lives,
            muted
        })
    }

    function drawGameScreen() {
        // Clear main canvas
        mainCtx.fillStyle = 'black';
        mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

        // Draw game canvas centered
        let gameCanvasX = (mainCanvas.width - gameCanvas.width) / 2;
        let gameCanvasY = (mainCanvas.height - gameCanvas.height) / 2;

        mainCtx.drawImage(gameCanvas, gameCanvasX, gameCanvasY);

        // Draw UI
        drawUI();

        // Draw pause overlay if paused
        if (gamePaused && currentState === STATE.PLAYING) {
            mainCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

            mainCtx.fillStyle = '#FF0';
            mainCtx.font = 'bold 60px "Courier New", monospace';
            mainCtx.textAlign = 'center';
            mainCtx.textBaseline = 'middle';
            mainCtx.fillText('PAUSED', mainCanvas.width / 2, mainCanvas.height / 2);

            mainCtx.font = 'bold 24px "Courier New", monospace';
            mainCtx.fillStyle = '#FFF';
            mainCtx.fillText('Press SPACE to resume', mainCanvas.width / 2, mainCanvas.height / 2 + 60);
        }

        // Draw game over/win screen
        if (currentState === STATE.GAME_OVER || currentState === STATE.WIN) {
            mainCtx.fillStyle = 'rgba(0, 0, 0, 0.85)';
            mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

            mainCtx.fillStyle = currentState === STATE.WIN ? '#0F0' : '#F00';
            mainCtx.font = 'bold 60px "Courier New", monospace';
            mainCtx.textAlign = 'center';
            mainCtx.textBaseline = 'middle';
            mainCtx.fillText(
                currentState === STATE.WIN ? 'YOU WIN!' : 'GAME OVER',
                mainCanvas.width / 2,
                mainCanvas.height / 2 - 50
            );

            mainCtx.fillStyle = '#FF0';
            mainCtx.font = 'bold 30px "Courier New", monospace';
            mainCtx.fillText('FINAL SCORE: ' + score, mainCanvas.width / 2, mainCanvas.height / 2 + 20);

            if(window.innerWidth >= 1024) {
                mainCtx.fillText('PRESS ENTER TO PLAY AGAIN', mainCanvas.width / 2, mainCanvas.height / 2 + 80);
            } else {
                drawResetButton();
            }
        }
    }

// Game logic functions
    function isWall(tileX, tileY) {
        if (tileY === 11 && (tileX < 0 || tileX >= MAP[0].length)) {
            return false; // Tunnel
        }
        if (tileX < 0 || tileX >= MAP[0].length || tileY < 0 || tileY >= MAP.length) {
            return true; // Out of bounds
        }
        return MAP[tileY][tileX] === 1;
    }

    function canMove(character, dx, dy) {
        if (dx === 0 && dy === 0) return false;
        let tileX = Math.floor(character.x / TILE_SIZE);
        let tileY = Math.floor(character.y / TILE_SIZE);
        let nextTileX = tileX + (dx > 0 ? 1 : dx < 0 ? -1 : 0);
        let nextTileY = tileY + (dy > 0 ? 1 : dy < 0 ? -1 : 0);
        return !isWall(nextTileX, nextTileY);
    }

    function eatPellet() {
        let mapX = Math.floor(pacman.x / TILE_SIZE);
        let mapY = Math.floor(pacman.y / TILE_SIZE);

        if (MAP[mapY][mapX] === 2) {
            MAP[mapY][mapX] = 0;
            score++;
            totalPellets--;
        } else if (MAP[mapY][mapX] === 4) {
            if (!gamePaused) {
                audio_eating_pac.currentTime = 0;
                audio_eating_pac.play().catch(e => console.log("Audio play failed:", e));
            }
            energyEl.forEach((energyEl) => {
                energyEl.classList.remove('animation', 'paused');
                void energyEl.getBoundingClientRect();
                energyEl.classList.add('animation');
            })
            MAP[mapY][mapX] = 0;
            score += 10;
            totalPellets--;
            powerMode = true;
            powerModeTimer = POWER_PELLET_DURATION;
            ghosts.forEach(ghost => {
                if (ghost.active) ghost.isVulnerable = true;
            });
        }

        if (totalPellets === 0) {
            currentState = STATE.WIN;
            clearInterval(gameInterval);
        }
    }

    function updatePacman() {
        let onGrid = (pacman.x % TILE_SIZE === TILE_SIZE / 2) && (pacman.y % TILE_SIZE === TILE_SIZE / 2);

        if (onGrid) {
            pacman.x = Math.floor(pacman.x / TILE_SIZE) * TILE_SIZE + TILE_SIZE / 2;
            pacman.y = Math.floor(pacman.y / TILE_SIZE) * TILE_SIZE + TILE_SIZE / 2;

            let lastKey = pressedKeys[pressedKeys.length - 1];

            if (!lastKey) {
                pacman.dx = 0;
                pacman.dy = 0;
            } else {
                let intendedDx = 0;
                let intendedDy = 0;
                if (lastKey === 'ArrowUp') { intendedDy = -pacman.speed; }
                else if (lastKey === 'ArrowDown') { intendedDy = pacman.speed; }
                else if (lastKey === 'ArrowLeft') { intendedDx = -pacman.speed; }
                else if (lastKey === 'ArrowRight') { intendedDx = pacman.speed; }

                if (canMove(pacman, intendedDx, intendedDy)) {
                    pacman.dx = intendedDx;
                    pacman.dy = intendedDy;
                    if (pacman.dx > 0) pacman.direction = 'right';
                    else if (pacman.dx < 0) pacman.direction = 'left';
                    else if (pacman.dy > 0) pacman.direction = 'down';
                    else if (pacman.dy < 0) pacman.direction = 'up';
                } else if (!canMove(pacman, pacman.dx, pacman.dy)) {
                    pacman.dx = 0;
                    pacman.dy = 0;
                }
            }
        }

        pacman.x += pacman.dx;
        pacman.y += pacman.dy;

        if (pacman.y >= 11 * TILE_SIZE && pacman.y < 12 * TILE_SIZE) {
            if (pacman.x < 0) pacman.x = gameCanvas.width;
            else if (pacman.x > gameCanvas.width) pacman.x = 0;
        }

        eatPellet();
    }

    function updateGhosts() {
        if (powerMode) {
            powerModeTimer--;
            if (powerModeTimer === 0) {
                powerMode = false;
                ghosts.forEach(ghost => ghost.isVulnerable = false);
            }
        }

        if (frame > 0 && frame % GHOST_RELEASE_DELAY === 0) {
            let inactiveGhost = ghosts.find(g => !g.active);
            if (inactiveGhost) {
                inactiveGhost.active = true;
                MAP[inactiveGhost.spawn.y][inactiveGhost.spawn.x] = 0;
            }
        }

        ghosts.forEach(ghost => {
            if (!ghost.active) return;

            let onGrid = (ghost.x % TILE_SIZE === TILE_SIZE / 2) && (ghost.y % TILE_SIZE === TILE_SIZE / 2);

            if (onGrid) {
                ghost.x = Math.floor(ghost.x / TILE_SIZE) * TILE_SIZE + TILE_SIZE / 2;
                ghost.y = Math.floor(ghost.y / TILE_SIZE) * TILE_SIZE + TILE_SIZE / 2;

                if (ghost.isEaten) {
                    let dx = TILE_SIZE * ghost.spawn.x + TILE_SIZE / 2 - ghost.x;
                    let dy = TILE_SIZE * ghost.spawn.y + TILE_SIZE / 2 - ghost.y;

                    if (Math.abs(dx) < ghost.speed && Math.abs(dy) < ghost.speed) {
                        ghost.isEaten = false;
                        ghost.isVulnerable = false;
                        ghost.active = true;
                    } else {
                        ghost.dx = Math.sign(dx) * ghost.speed;
                        ghost.dy = Math.sign(dy) * ghost.speed;
                    }
                } else {
                    let directions = [
                        { dx: -ghost.speed, dy: 0 }, { dx: ghost.speed, dy: 0 },
                        { dx: 0, dy: -ghost.speed }, { dx: 0, dy: ghost.speed }
                    ];
                    let oppositeDx = -ghost.dx, oppositeDy = -ghost.dy;

                    let possibleDirections = directions.filter(dir => canMove(ghost, dir.dx, dir.dy));
                    if (possibleDirections.length > 1 && (ghost.dx !== 0 || ghost.dy !== 0)) {
                        possibleDirections = possibleDirections.filter(dir => !(dir.dx === oppositeDx && dir.dy === oppositeDy));
                    }

                    if (possibleDirections.length > 0) {
                        let newDirection = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
                        ghost.dx = newDirection.dx;
                        ghost.dy = newDirection.dy;
                    }
                }
            }

            ghost.x += ghost.dx;
            ghost.y += ghost.dy;

            if (ghost.y >= 11 * TILE_SIZE && ghost.y < 12 * TILE_SIZE) {
                if (ghost.x < 0) ghost.x = gameCanvas.width;
                else if (ghost.x > gameCanvas.width) ghost.x = 0;
            }
        });
    }

    function checkGhostCollision() {
        for (let ghost of ghosts) {
            if (!ghost.active) continue;
            let dx = ghost.x - pacman.x;
            let dy = ghost.y - pacman.y;
            if (Math.sqrt(dx * dx + dy * dy) < pacman.radius + ghost.radius) {
                if (ghost.isVulnerable) {
                    score += 100;
                    ghost.isEaten = true;
                    ghost.isVulnerable = false;
                } else if (!ghost.isEaten) {
                    if (!muted && !gamePaused) {
                        audio_fail.currentTime = 0.4;
                        audio_eating_pac.pause();
                        audio_fail.play().catch(e => console.log("Audio play failed:", e));
                    }
                    lives--;
                    ghosts.forEach(g => g.isShaking = true);
                    if (lives > 0) {
                        isResetting = true;
                        setTimeout(() => {
                            resetAfterLifeLost();
                            isResetting = false;
                        }, 1000);
                    } else {
                        currentState = STATE.GAME_OVER;
                        clearInterval(gameInterval);
                    }
                    return;
                }
            }
        }
    }

    function resetAfterLifeLost() {
        frame = 0;
        powerMode = false;
        powerModeTimer = 0;
        pacman.x = TILE_SIZE * 9 + TILE_SIZE / 2;
        pacman.y = TILE_SIZE * 17 + TILE_SIZE / 2;
        pacman.dx = 0;
        pacman.dy = 0;
        pacman.direction = 'right';

        for (let y = 0; y < ORIGINAL_MAP.length; y++) {
            for (let x = 0; x < ORIGINAL_MAP[y].length; x++) {
                if (ORIGINAL_MAP[y][x] === 3) {
                    MAP[y][x] = 3;
                }
            }
        }

        ghosts = JSON.parse(JSON.stringify(initialGhosts));
        ghosts.forEach(ghost => {
            if (ghost.active) {
                MAP[ghost.spawn.y][ghost.spawn.x] = 0;
            }
        });
        pressedKeys.length = 0;
    }

    function startGame() {
        currentState = STATE.PLAYING;
        initGame();
        gameInterval = setInterval(gameLoop, 1000 / 60);
    }

    function restartGame() {
        score = 0;
        lives = 3;
        currentState = STATE.PLAYING;
        isResetting = false;
        gamePaused = false;
        frame = 0;
        powerMode = false;
        powerModeTimer = 0;
        MAP = JSON.parse(JSON.stringify(ORIGINAL_MAP));
        totalPellets = MAP.flat().filter(tile => tile === 2 || tile === 4).length;
        pacman = {
            x: TILE_SIZE * 9 + TILE_SIZE / 2,
            y: TILE_SIZE * 17 + TILE_SIZE / 2,
            radius: TILE_SIZE / 2 - 2,
            speed: 2,
            dx: 0, dy: 0,
            direction: 'right'
        };
        ghosts = JSON.parse(JSON.stringify(initialGhosts));
        ghosts.forEach(ghost => {
            if (ghost.active) {
                MAP[ghost.spawn.y][ghost.spawn.x] = 0;
            }
        });
        pressedKeys.length = 0;

        // Reset audio
        audio_fail.pause();
        audio_fail.currentTime = 0;
        audio_eating_pac.pause();
        audio_eating_pac.currentTime = 0;
        audio_fail_currentTime = 0;
        audio_eating_pac_currentTime = 0;

        clearInterval(gameInterval);
        gameInterval = setInterval(gameLoop, 1000 / 60);
    }

    function gameLoop() {
        if (currentState !== STATE.PLAYING) return;

        frame++;

        if (!isResetting) {
            updatePacman();
            updateGhosts();
            checkGhostCollision();
        }

        // Clear game canvas
        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
        drawMap();
        drawPacman();
        ghosts.forEach(drawGhost);

        // Draw score and lives on game canvas
        ctx.fillStyle = 'white';
        ctx.font = '16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Score: ' + score, 10, 20);

        // Draw lives as Pac-Man icons
        for (let i = 0; i < lives; i++) {
            let x = TILE_SIZE * (MAP[0].length - 2 - i) + TILE_SIZE / 2;
            let y = TILE_SIZE / 2;
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(x, y - 2);
            ctx.bezierCurveTo(x, y - 7, x - 6, y - 7, x - 6, y - 2);
            ctx.bezierCurveTo(x - 6, y + 3, x, y + 5, x, y + 10);
            ctx.bezierCurveTo(x, y + 5, x + 6, y + 3, x + 6, y - 2);
            ctx.bezierCurveTo(x + 6, y - 7, x, y - 7, x, y - 2);
            ctx.fill();
        }

        drawGameScreen();
    }

    function handleMouseClick(event) {
        let rect = mainCanvas.getBoundingClientRect();
        const scaleX = mainCanvas.width / rect.width;
        const scaleY = mainCanvas.height / rect.height;

        const x = (event.clientX - rect.left) * scaleX;
        const y = (event.clientY - rect.top) * scaleY;

        if (currentState === STATE.PLAYING) {
            // Check if click is on speaker icon
            if(isInsideButton(x, y, uiElements.speaker)) {
                toggleMute();
                return;
            }

            // Check if click is on pause button
            if(isInsideButton(x, y, uiElements.pause)) {
                togglePause();
                return;
            }

            // Check if click is on controller buttons
            if(isInsideButton(x, y, controllerButtons.up)) {
                pressedKeys.push('ArrowUp');
            }

            if(isInsideButton(x, y, controllerButtons.down)) {
                pressedKeys.push('ArrowDown');
            }

            if(isInsideButton(x, y, controllerButtons.left)) {
                pressedKeys.push('ArrowLeft');
            }

            if(isInsideButton(x, y, controllerButtons.right)) {
                pressedKeys.push('ArrowRight');
            }

        }

        if(currentState === STATE.GAME_OVER || currentState === STATE.WIN &&
        window.innerWidth < 1024) {
                if(isInsideButton(x, y, window.resetBtn)) {
                    restartGame();
                    return;
                }
        }
    }

    function isInsideButton(x, y, btn) {
        return (
            x >= btn.x &&
            x <= btn.x + btn.w &&
            y >= btn.y &&
            y <= btn.y + btn.h
        );

    }

    document.querySelector(".mute").addEventListener("click", toggleMute)

   function toggleMute() {
        muted = !muted;
        syncUI();
        audio_fail.muted = muted;
        audio_eating_pac.muted = muted;
    }

    function togglePause() {
        if (currentState !== STATE.PLAYING && currentState !== STATE.PAUSED) return;

        gamePaused = !gamePaused;

        if (gamePaused) {
            clearInterval(gameInterval);

            // Store current playback position and pause audio
            if (!audio_fail.paused) {
                audio_fail_currentTime = audio_fail.currentTime;
                audio_fail.pause();
            }
            if (!audio_eating_pac.paused) {
                audio_eating_pac_currentTime = audio_eating_pac.currentTime;
                audio_eating_pac.pause();
                energyEl.forEach(energyEl => {
                    energyEl.classList.add('paused');
                })
            }
        } else {
            gameInterval = setInterval(gameLoop, 1000 / 60);

            // Resume audio from stored position if they were playing
            if (audio_fail_currentTime > 0 && !muted) {
                audio_fail.currentTime = audio_fail_currentTime;
                audio_fail.play().catch(e => console.log("Audio play failed:", e));
            }
            if (audio_eating_pac_currentTime > 0 && !muted) {
                audio_eating_pac.currentTime = audio_eating_pac_currentTime;
                energyEl.forEach(energyEl => {
                    energyEl.classList.add('paused');
                })
                audio_eating_pac.play().catch(e => console.log("Audio play failed:", e));
            }

            // Reset stored positions
            audio_fail_currentTime = 0;
            audio_eating_pac_currentTime = 0;
        }
    }

// Event listeners
    mainCanvas.addEventListener('click', handleMouseClick);

    document.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            if (currentState === STATE.PLAYING) {
                togglePause();
            }
        } else if (currentState === STATE.GAME_OVER || currentState === STATE.WIN) {
            if (e.key === 'Enter') {


                restartGame();
            }
        } else if (currentState === STATE.PLAYING && !gamePaused) {
            if (validKeys.includes(e.key) && !pressedKeys.includes(e.key)) {
                pressedKeys.push(e.key);
            }
        }
    });

    document.addEventListener('keyup', (e) => {
        let index = pressedKeys.indexOf(e.key);
        if (index > -1) {
            pressedKeys.splice(index, 1);
        }
    });

// Asset loading callbacks
    function checkAssetLoaded() {
        assetsLoaded++;
        if (assetsLoaded === totalAssets) {
            // All assets loaded, start game after 4 seconds for loader effect
            // setTimeout(() => {
            //     startGame();
            // }, 1500);
            console.log("Assets loaded, waiting for modal confirmation");
        }
    }

    document.addEventListener("click", (e) => {
        let target = e.target.closest("#gameReady");
        let modal = target.closest("#infoModal");
        if (target) {
            if(!gameStarted && assetsLoaded === totalAssets) {
                gameStarted = true;
                setTimeout(() => {
                    startGame();
                }, 1500);
            }
            modal.style.display = "none";
        }
    });


// Audio loading
    audio_fail.addEventListener('canplaythrough', checkAssetLoaded);
    audio_fail.addEventListener('error', checkAssetLoaded);
    audio_eating_pac.addEventListener('canplaythrough', checkAssetLoaded);
    audio_eating_pac.addEventListener('error', checkAssetLoaded);

// Image loading
    powerPelletImg.onload = checkAssetLoaded;
    powerPelletImg.onerror = checkAssetLoaded;

// Fallback in case assets don't load
    setTimeout(() => {
        if (currentState === STATE.LOADING && assetsLoaded < totalAssets) {
            console.log("Some assets failed to load, starting game anyway");
            // startGame();
        }
    }, 1500);

// Initialize loader
    initLoaderDots();

// Main animation loop
    function mainLoop() {
        if (currentState === STATE.LOADING) {
            drawLoader();
        } else if (currentState === STATE.PLAYING || currentState === STATE.PAUSED ||
            currentState === STATE.GAME_OVER || currentState === STATE.WIN) {
            drawGameScreen();
        }

        requestAnimationFrame(mainLoop);
    }

// Start the main loop
    mainLoop();
}
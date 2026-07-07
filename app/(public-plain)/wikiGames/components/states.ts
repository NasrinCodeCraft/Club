export interface GameState {
    score: number
    lives: number
    muted: boolean
}

export interface GameStates {
    gameData: GameState
}
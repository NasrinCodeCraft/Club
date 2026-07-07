'use client'

import eat_dot from '@/assets/img/club/eat-dot.png'
import car_race from '@/assets/img/club/wiki-club-race1.png'
import big_gift from '@/assets/img/club/big-gift.png'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { initPacmanGame } from '@/app/(GAMES)/pacman/pacman-engine'
import RightPanel from '@/app/(public-plain)/wikiGames/components/RightPanel'
import "@/assets/styles/pages/gamePages/index.css"


import go from '@/assets/img/club/go_green.png'
import WikiButton from "@/assets/public-components/WikiButton";
import LeftPanel from '@/app/(public-plain)/wikiGames/components/LeftPanel'
import MobileGameHead from '@/app/(public-plain)/wikiGames/components/MobileGameHead'
import MobileNavbar from '@/app/(public-plain)/wikiGames/components/MobileNavbar'

type Game = {
    title: string
    imgGame: StaticImageData
}

const GAMES: Record<string, Game> = {
    'eat-dot': { title: 'نقطه خور', imgGame: eat_dot },
    'car-race': { title: 'ماشین باز', imgGame: car_race },
    'big-gift': { title: 'جایزه بزرگ', imgGame: big_gift }
}

export interface GameState {
    score: number
    lives: number
    muted: boolean
}

const Page = () => {
    const params = useParams()

    const game = GAMES[String(params['slug'])]
    const [gameData, setGameData] = useState<GameState>({ score: 0, lives: 3, muted: true })

    const [infoGame, setInfoGame] = useState(true)

    const [enterCode, setEnterCode] = useState(false)

    useEffect(() => {
        initPacmanGame((data: GameState) => {
            setGameData(data)
        })
    }, [])

    return (
        <main className="flex justify-center items-center min-h-screen"
              style={{ background: 'linear-gradient(180deg, #000000 0%, #282828 33%, #282828 66%, #000000 100%)' }}>
            <div className="club-container min-h-screen flex flex-col justify-between items-center">
                <div className="hidden lg:flex w-full flex-col justify-center items-center py-8 font-peyda">
                    <Image
                        src={game.imgGame}
                        alt="avatar"
                        className="w-auto h-[152px]"
                    />
                    <h1 className="text-white font-bold pt-2">{game.title}</h1>
                </div>
                <div
                    className="w-full flex flex-col justify-between lg:justify-center my-5 py-5 lg:my-0 lg:py-0 gap-4 flex-1 font-peyda">
                    <MobileNavbar />
                    <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 mt-5">
                        <MobileGameHead gameData={gameData} />
                        <div
                            className="hidden lg:block 2xl:w-[500px] 3xl:w-[550px] border border-[#6E6E6E] rounded-xl p-5">
                            <RightPanel />
                        </div>
                        <div
                            className="flex flex-col justify-center items-center 2xl:w-[500px] 3xl:w-[550px] border border-[#6E6E6E] rounded-xl 2xl:h-[650px] 3xl:h-[800px]">
                            <canvas id="mainCanvas" className="w-full h-full"
                                    style={{ borderRadius: '15px!important' }}></canvas>
                        </div>
                        <LeftPanel gameData={gameData} />
                    </div>
                </div>
                <div className="hidden lg:flex w-full justify-center items-center py-[75px]">
                    <p className="text-[#515151]">©تمام حقوق این سایت متعلق به ویکی می‌باشد.</p>
                </div>
            </div>
            <div
                id="infoModal"
                // isOpen={infoGame}
                // title={
                //     <div className="flex justify-center items-center gap-1">
                //         <h4>قوانین بازی</h4>
                //     </div>
                // }
                // // onClose={()=>setInfoGame(false)}
                // fromTop={true}
                className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-xl mx-5 font-peyda"
            >
                <div className="flex flex-col justify-center items-center gap-6 px-5 my-3 pt-3 ">
                    <div className="flex justify-center items-center gap-1">
                                <h4>قوانین بازی</h4>
                    </div>
                    <ul className="w-full flex flex-col gap-3 items-start text-black px-2"
                        style={{ listStyleType: 'square' }}>
                        <li>
                            ⏱️ شروع با ۳۰ ثانیه — هر آیکون سبز +۴ ثانیه (سقف ۱۰۰).
                        </li>
                        <li>
                            🏁 هر ۱۰ ثانیه، مرحله ↑ (تا ۱۰). سرعت و موانع بیشتر می‌شوند.
                        </li>
                        <li>
                            🚫 برخورد با قرمز شانس را کم می‌کند؛ ۳ شانس داری.می‌شوند.
                        </li>
                        <li>
                            🚗 مراحل ۳ تا ۸: «ماشین‌های برنددار» خاکستری وارد مسیر می‌شوند—برخورد با آنها امتیاز منفی
                            دارد.
                        </li>
                        <li>
                            🎁 مراحل ۱–۶: حداکثر ۲ آیکون سبز — ۷–۱۰: حداکثر ۳ آیکون سبز.
                        </li>
                    </ul>
                    <div className="w-full flex flex-col justify-center items-center gap-2">
                        <img id="gameReady" onClick={()=> setInfoGame(false)} className="cursor-pointer" src={go.src} alt="go" style={{ width: '40px' }} />
                        <p className="cursor-pointer text-xs" onClick={()=>setEnterCode(!enterCode)}>کد تقویتی دارید؟</p>
                        <div className={`w-full overflow-hidden flex flex-col gap-4 rounded-[10px] bg-[#DDDDDD] transition-all duration-500 ease-in-out ${enterCode ? 'max-h-screen' : 'max-h-0'} p-${enterCode ? '5' : '0'}`}>
                            <div className="w-full flex justify-center items-start gap-3">
                                <input type="text" placeholder="ChEAt%CoDe" className="bg-white w-[135px] text-[16px] text-[#707070] placeholder-[#707070] text-center font-roboto rounded-md outline-0 p-1" ></input>
                                <WikiButton id="" title="بررسی" type="fill" classes="flex-1 py-4" />
                            </div>
                            <p className="text-center text-black cursor-pointer">چطور  این کد‌ها رو به دست بیارم؟</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page
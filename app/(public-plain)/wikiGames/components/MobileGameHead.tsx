import PersianNumber from "@/assets/public-components/PersianNumber";
import Chances from '@/app/(public-plain)/wikiGames/components/Chances'
import React from 'react'
import { GameStates } from '@/app/(public-plain)/wikiGames/components/states'


const MobileGameHead = ({gameData} : GameStates) => {

    return (
        <div className="flex lg:hidden flex-col gap-2 justify-center items-center">
            <div className="w-full flex items-center justify-between gap-2 flex-wrap">
                <div
                    className="flex justify-between items-center py-2 text-[20px] gap-2">
                    <p className="text-[#6E6E6E]">امتیاز:</p>
                    <PersianNumber value={gameData.score} className="text-[#00E489]" comma={true} />
                </div>
                <Chances lives={gameData.lives} />
                <div
                    className="flex justify-between items-center py-2 text-[20px] gap-2">
                    <p className="text-[#6E6E6E]">مرحله:</p>
                    <div className="flex items-center gap-1">
                        <PersianNumber value={3} className="text-[#00E489]" />
                        <PersianNumber value="از 10" className="text-[16px]" />
                    </div>
                </div>
            </div>
            <div
                className="w-full flex justify-between items-center py-2 text-[#6E6E6E] gap-5 text-[20px]">
                <p>انرژی:</p>
                <svg width="100%" height="24" viewBox="0 0 100% 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_41575_76303)">
                        <rect width="100%" height="24" rx="5" fill="#5D5D5D" />
                        <rect className="energy-fill" y="-31"
                              width="2%" height="86"
                              fill=""
                        />
                        <mask id="mask0_41575_76303" style={{ maskType: 'alpha' }}
                              maskUnits="userSpaceOnUse" x="5" y="2" width="20" height="20">
                            <rect x="5" y="2" width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_41575_76303)">
                            <path
                                d="M10.0007 10.3333H15.0007V6.16667H10.0007V10.3333ZM15.834 19.5H9.16732C8.93121 19.5 8.73329 19.4201 8.57357 19.2604C8.41385 19.1007 8.33398 18.9028 8.33398 18.6667V6.16667C8.33398 5.70833 8.49718 5.31597 8.82357 4.98958C9.14996 4.66319 9.54232 4.5 10.0007 4.5H15.0007C15.459 4.5 15.8513 4.66319 16.1777 4.98958C16.5041 5.31597 16.6673 5.70833 16.6673 6.16667V12H17.709C18.1118 12 18.4555 12.1424 18.7402 12.4271C19.025 12.7118 19.1673 13.0556 19.1673 13.4583V17.3125C19.1673 17.5486 19.2645 17.7639 19.459 17.9583C19.6534 18.1528 19.8687 18.25 20.1048 18.25C20.3548 18.25 20.5736 18.1528 20.7611 17.9583C20.9486 17.7639 21.0423 17.5486 21.0423 17.3125V9.5H20.834C20.5979 9.5 20.4 9.42014 20.2402 9.26042C20.0805 9.10069 20.0007 8.90278 20.0007 8.66667V7.41667C20.0007 7.30556 20.0423 7.20833 20.1257 7.125C20.209 7.04167 20.3062 7 20.4173 7V6.16667C20.4173 6.05556 20.459 5.95833 20.5423 5.875C20.6257 5.79167 20.7229 5.75 20.834 5.75C20.9451 5.75 21.0423 5.79167 21.1257 5.875C21.209 5.95833 21.2507 6.05556 21.2507 6.16667V7H22.084V6.16667C22.084 6.05556 22.1257 5.95833 22.209 5.875C22.2923 5.79167 22.3895 5.75 22.5007 5.75C22.6118 5.75 22.709 5.79167 22.7923 5.875C22.8757 5.95833 22.9173 6.05556 22.9173 6.16667V7C23.0284 7 23.1257 7.04167 23.209 7.125C23.2923 7.20833 23.334 7.30556 23.334 7.41667V8.66667C23.334 8.90278 23.2541 9.10069 23.0944 9.26042C22.9347 9.42014 22.7368 9.5 22.5007 9.5H22.2923V17.3125C22.2923 17.8958 22.0805 18.4062 21.6569 18.8437C21.2333 19.2812 20.7159 19.5 20.1048 19.5C19.5076 19.5 18.9937 19.2812 18.5632 18.8437C18.1326 18.4062 17.9173 17.8958 17.9173 17.3125V13.4583C17.9173 13.3889 17.9 13.3368 17.8652 13.3021C17.8305 13.2674 17.7784 13.25 17.709 13.25H16.6673V18.6667C16.6673 18.9028 16.5875 19.1007 16.4277 19.2604C16.268 19.4201 16.0701 19.5 15.834 19.5ZM12.084 17.8333L14.1673 14.5H12.9173V12L10.834 15.3333H12.084V17.8333Z"
                                fill="#1C1B1F" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_41575_76303">
                            <rect width="100%" height="24" rx="5" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

 export default MobileGameHead
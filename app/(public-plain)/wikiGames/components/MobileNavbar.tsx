import back_game from '../../../../assets/img/club/back-game.png'
import leaderboard from '../../../../assets/img/club/leaderboard.png'
import settings from '../../../../assets/img/club/settings.png'
import React from 'react'

const MobileNavbar = () => {

    return(
        <div className="w-full flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 cursor-pointer"
                 style={{ maxWidth: 'max-content' }}
                 onClick={() => history.back()}>
                <img
                    src={back_game.src}
                    alt="avatar"
                    className="w-[24px] h-[24px]"
                />
                <h3 className="hidden lg:block text-white">بازگشت</h3>
            </div>
            <div className="flex lg:hidden justify-center items-center gap-5">
                <img
                    src={leaderboard.src}
                    alt="avatar"
                    className="w-[24px] h-[24px] mx-4"
                />
                <img
                    src={settings.src}
                    alt="avatar"
                    className="w-[24px] h-[24px]"
                />
            </div>
        </div>
    )
}

export default MobileNavbar
import chance from '../../../../assets/img/club/chance.png'
import noChance from '../../../../assets/img/club/no-chance.png'
import React from 'react'

type ChancesProps = {
    lives: number
}

const Chances = ({lives}: ChancesProps) => {
    return (
        <div className="flex items-center gap-2">
            <img
                src={lives === 3 ? chance.src : noChance.src}
                alt="avatar"
                className="w-[24px] h-[24px]"
            />
            <img
                src={lives >= 2 ? chance.src : noChance.src}
                alt="avatar"
                className="w-[24px] h-[24px]"
            />
            <img
                src={lives >= 1 ? chance.src : noChance.src}
                alt="avatar"
                className="w-[24px] h-[24px]"
            />
        </div>
    )
}

export default Chances
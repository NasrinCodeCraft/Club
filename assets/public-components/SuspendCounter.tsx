import React from 'react'
import PersianNumber from "@/assets/public-components/PersianNumber";

type SuspendCounterProps = {
    title: string
    bgColor: string
    txtColor: string
    count: number | string
}

const SuspendCounter = ({
                            title,
                            bgColor,
                            txtColor,
                            count,
                        }: SuspendCounterProps) => {
    return (
        <div className="flex justify-center items-center gap-1 bg-white rounded-3xl px-2 py-1">
            <p className="text-black" style={{ fontSize: '14px' }}>
                {title}
            </p>
            <PersianNumber value={count}
                           className='text-white text-center font-bold rounded-full w-[25px]'
                           style={{ backgroundColor: bgColor,
                               color: txtColor, }}
            />
        </div>
    )
}

export default SuspendCounter

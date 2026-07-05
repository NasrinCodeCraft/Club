import clubImg from '../../../../assets/img/club/club-img.svg'

import Steps from "@/assets/public-components/Steps";
import WikiButton from "@/assets/public-components/WikiButton";
import React, { useState } from 'react'
import PersianNumber from "@/assets/public-components/PersianNumber";

export type LoginViaCards = {
    auth: string | boolean | undefined
    setOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const CardGameWizard = ({auth, setOpenModalLogin}:LoginViaCards) => {

    const [step, setStep] = useState(1)

    return (
        <div className="flex flex-col gap-[10px] justify-center items-center border border-[#D0D0D0] rounded-[15px] p-[20px]">
            <div className="w-full flex flex-row-reverse justify-center items-end px-[20px] py-[10px] bg-[#00E489] rounded-[10px]">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-sm">روز</p>
                    <PersianNumber value='10' className="text-2xl text-black font-bold" />
                </div>
                <span className="text-2xl text-black font-bold">:</span>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-sm">ساعت</p>
                    <PersianNumber value='23' className="text-2xl text-black font-bold" />
                </div>
                <span className="text-2xl text-black font-bold">:</span>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-sm">دقیقه</p>
                    <PersianNumber value='45' className="text-2xl text-black font-bold" />
                </div>
                <span className="text-2xl text-black font-bold">:</span>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-sm">ثانیه</p>
                    <PersianNumber value='59' className="text-2xl text-black font-bold" />
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-2">
                <img
                    src={clubImg.src}
                    alt="avatar"
                    className="w-1/5"
                />
                <div className="flex flex-col items-center lg:items-start justify-center gap-1">
                    <p className="text-md md:text-2xl text-black font-bold">
                        هر ماه یک جایزه بزرگ منتظر توئه!
                    </p>
                    <p className="text-sm md:text-xl text-black">
                        بازی کن، امتیاز کسب کن، سکه به‌دست بیار و ...
                    </p>
                </div>
            </div>
            <div className="w-[85%]">
                <Steps current={step}>
                    <Steps.Item title="بازی کن" />
                    <Steps.Item title="ماموریت رو کامل کن" />
                    <Steps.Item title="تو قرعه کشی شرکت کن" />
                </Steps>
            </div>

            <WikiButton
                id=""
                title="انجام ماموریت"
                type="fill"
                classes="px-[20px] py-[10px] mt-6 text-sm font-bold"
                onClick={()=>{if (!auth) {setOpenModalLogin(true)}}}
            />

        </div>
    )
}

export default CardGameWizard

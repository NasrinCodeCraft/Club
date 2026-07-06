import React from 'react'
import PersianNumber from "@/assets/public-components/PersianNumber";
import WikiButton from "@/assets/public-components/WikiButton";
import wikiCoin from "../../assets/img/club/wiki-coin.png"
import wikiCoinDisable from "../../assets/img/club/wiki-coin-disable.png"

type WikiCardProps = {
    theme: string
    verticalTitle: string
    title: string
    subtitle: string
    expire: string
    amount: string
    disabled?: string | boolean | undefined
}

const WikiCard = ({
                      theme,
                      verticalTitle,
                      title,
                      subtitle,
                      expire,
                      amount,
                      disabled = false
                  }: WikiCardProps) => {
    return (
        <div
            className={`relative w-[300px] rounded-[14.04px] ${disabled && 'pointer-events-none'}`}
            style={{
                boxShadow:
                    '0px 1.75px 3.51px -2.63px #23272F0A, 0px 3.51px 7.02px -2.63px #23272F1F',
            }}
        >
            <div
                className="relative w-[299px] h-[150px] rounded-[14.04px]"
                style={{ background: !disabled ? theme : '#D8D8D8' }}
            >
                <div className="absolute top-[50%] -right-[27px] transform -translate-x-1/2 -translate-y-1/2  w-[25px] h-[25px] rounded-[50%] bg-white z-3"></div>
                <div
                    className="absolute top-0 right-[20.2%] h-full w-[3px]"
                    style={{
                        background: `repeating-linear-gradient(
                          to bottom,
                          white 0px,
                          white 10px,
                          transparent 10px,
                          transparent 20px
                        )`,
                    }}
                ></div>
            </div>
            <div className="absolute top-0 left-0 w-[78.9%] h-full flex flex-col justify-between bg-white rounded-tl-[14.04px] rounded-bl-[14.04px] p-3">
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col items-start justify-center">
                        <p
                            className={`${disabled ? 'text-[#ACACAC]' : 'text-black'} font-bold`}
                        >
                            {title}
                        </p>
                        <PersianNumber value={subtitle} className={`${disabled ? 'text-[#ACACAC]' : 'text-[#353132]'} text-sm`} />
                    </div>
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            width="30"
                            height="30"
                            rx="15"
                            fill={!disabled ? theme : '#D8D8D8'}
                        />
                        <path
                            d="M24.8872 9.64502L24.254 10.7392L17.5448 22.355L16.2731 20.1526V20.1513H16.2719L15.6361 19.0507L16.9102 16.8469L17.5448 17.9475L17.546 17.9488L21.0776 11.8347H14.0145L14.3632 12.4394L13.0903 14.6419L10.8368 10.7392L10.2035 9.64502H24.8872Z"
                            fill="white"
                        />
                        <path
                            d="M17.8985 12.9301L15.0003 17.9475L14.8528 18.2038L12.4545 22.355L10.5458 19.0494L10.0561 18.2038L5.11328 9.64502H8.93066L9.5639 10.7392L10.1959 11.8347H8.92297L9.55492 12.9301H9.55621L11.8174 16.8456V16.8469L12.4545 17.9475L15.3528 12.9301H17.8985Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <div className="flex justify-start items-center gap-1">
                        <p
                            className={`${disabled ? 'text-[#D8D8D8]' : 'text-[#A5A3A3]'}  text-xs`}
                        >
                            تاریخ انقضا:
                        </p>
                        <PersianNumber value={expire} className={`${disabled ? 'text-[#ACACAC]' : 'text-[#353132]'} text-xs`} />
                    </div>
                    <WikiButton
                        id=""
                        title={
                            <>
                                <PersianNumber value={amount} className={`px-1 ${disabled ? 'text-[#ACACAC]' : 'text-[#353132]'} font-bold`}/>
                                {disabled
                                    ?

                                    <img
                                        src={wikiCoinDisable.src}
                                        alt="avatar"
                                        width={20}
                                        height={20}
                                    />

                                    :

                                    <img
                                        src={wikiCoin.src}
                                        alt="avatar"
                                        width={20}
                                        height={20}
                                    />

                                }
                            </>
                        }
                        type="outLine"
                        classes="w-full flex justify-center items-center rounded-2xl p-1"
                        disable={disabled}
                    />
                </div>
            </div>
            <div className="absolute top-0 right-0 w-[21.1%] h-full flex items-center justify-center">
                <p className="text-white rotate-90 text-lg text-nowrap font-bold">
                    {verticalTitle}
                </p>
            </div>
        </div>
    )
}

export default WikiCard

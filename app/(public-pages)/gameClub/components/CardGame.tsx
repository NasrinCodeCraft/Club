import React, { ReactNode } from 'react'
import go from '@/assets/img/club/go_green.png'

type CardGameProps = {
    img: ReactNode
    titleGame: string
    descGame: string
    className?: string
    href?: string
}
const CardGame = ({ img, titleGame, descGame, className, href }: CardGameProps) => {

    return (
        <div
            className={`flex flex-col justify-center items-center rounded rounded-2xl gap-2 p-5 font-peyda ${className}`}
            style={
                {
                    boxShadow: '0px 4px 30px 0px #42424240, 0px 4px 4px 0px #42424240',
                    background: 'linear-gradient(257.43deg, #484848 -4.93%, #2F2F2F 99.06%),radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);'
                }
            }
        >
            {img}
            <h4 className="w-full text-white text-right">{titleGame}</h4>
            <p className="w-full text-[#CFCFCF] text-right">{descGame}</p>
            <hr
                style={{
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'white',
                    opacity: '0.6'
                }}
            />
            <div className="w-full flex justify-end items-center gap-2">
                <p className="text-[#CFCFCF]">شروع بازی</p>
                <a href={href}>
                    <img src={go.src} alt="go" className="cursor-pointer" style={{ width: '40px' }} />
                </a>
            </div>
        </div>
    )
}

export default CardGame
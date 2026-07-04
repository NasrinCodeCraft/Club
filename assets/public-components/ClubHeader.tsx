import clubHeader from '@/assets/img/club/banner.png'
import clubHeaderGuest from '@/assets/img/club/header-gradiant.svg'
import Image from 'next/image'
import React from 'react'
import WikiButton from "@/assets/public-components/WikiButton";
import { Session } from 'next-auth'
import w_icon from '@/assets/img/club/w_icon.png'

type ClubHeaderProps = {
    auth: Session | null
}

const ClubHeader = ({ auth }: ClubHeaderProps) => {
    return (
        <div className="hidden xl:block w-full h-[102px] lg:h-[200px] ">
            <div
                className="h-full w-full flex justify-center items-center gap-3"
                style={{
                    background: auth ? `url(${clubHeader.src})` : `url(${clubHeaderGuest.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                }}
            >
                <Image
                    src={w_icon}
                    alt="avatar"
                    className="w-[100px] h-auto"
                />
                <div className="flex flex-col justify-center items-center gap-1">
                    <h2>ویکــــی کلاب</h2>
                    <WikiButton
                        id=""
                        title="باشگاه مشتریان ویکی"
                        type="fill"
                        classes="text-[16px] !text-black font-bold px-3"
                    />
                </div>
            </div>
        </div>
    )
}

export default ClubHeader

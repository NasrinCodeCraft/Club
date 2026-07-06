'use client'

import wikiClubIcon from '@/assets/img/club/wiki-club-icon.png'
import bell from '@/assets/img/club/bell.png'
import React, { useState } from 'react'
import YourScore from './YourScore'
import { Session } from 'next-auth'
import { usePathname } from 'next/navigation'

type MenuProps = {
    auth: Session | null
}

const activeGlowStyle = {
    textShadow: `
        0 0 6px rgba(0, 228, 137, .65),
        0 0 14px rgba(0,228,137,.55),
        0 6px 24px rgba(0,228,137,.35)
    `
}

const items = [
    {label: 'قرعه کشی ماهانه', href:'/monthlyLottery'},
    {label: 'ماموریت های ویکی', href:'/Home'},
    {label: 'جایزه ها و تخفیف ها', href:'/prizesDiscounts'},
    {label: 'کلوپ بازی', href:'/gameClub'},
    {label: 'تاریخچه امتیازات', href:'/scoreHistory'}
]

const Menu = ({ auth }: MenuProps) => {
    const [openMenu, setOpenMenu] = useState(false)
    const pathname = usePathname()

    return (
        <div
            className="xl:relative flex justify-center items-center col-span-12 py-6"
            style={{ background: '#353132', height: '5vh' }}
        >
            <div className="flex justify-between items-center py-1 club-container">
                {auth && (
                    <svg
                        className="block xl:hidden"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <mask
                            id="mask0_42519_75640"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                        >
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_42519_75640)">
                            <path
                                d="M4 7C3.71667 7 3.47917 6.90417 3.2875 6.7125C3.09583 6.52083 3 6.28333 3 6C3 5.71667 3.09583 5.47917 3.2875 5.2875C3.47917 5.09583 3.71667 5 4 5H20C20.2833 5 20.5208 5.09583 20.7125 5.2875C20.9042 5.47917 21 5.71667 21 6C21 6.28333 20.9042 6.52083 20.7125 6.7125C20.5208 6.90417 20.2833 7 20 7H4ZM4 19C3.71667 19 3.47917 18.9042 3.2875 18.7125C3.09583 18.5208 3 18.2833 3 18C3 17.7167 3.09583 17.4792 3.2875 17.2875C3.47917 17.0958 3.71667 17 4 17H20C20.2833 17 20.5208 17.0958 20.7125 17.2875C20.9042 17.4792 21 17.7167 21 18C21 18.2833 20.9042 18.5208 20.7125 18.7125C20.5208 18.9042 20.2833 19 20 19H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4Z"
                                fill="white"
                            />
                        </g>
                    </svg>
                )}
                <img
                    src={wikiClubIcon.src}
                    alt="wikiClubIcon"
                    style={{ height: '4vh' }}
                />
                <ul
                    className={`home-menu xl:absolute xl:left-1/2 ${openMenu ? 'translate-x-0' : 'translate-x-full'} xl:-translate-x-1/2  transform transition-transform duration-300 ease-in-out h-full w-3/5 xl:h-full xl:w-auto flex flex-col-reverse xl:flex-row fixed justify-end xl:justify-center items-start gap-7 xl:gap-4 text-white xl:items-center top-0 right-0 bg-[#353132] xl:bg-none xl:pb-0 pb-5 pt-[12px] xl:pt-0 xl:py-0 z-20 font-peyda`}
                    style={{ fontWeight: '400' }}
                >
                    <div className="flex xl:hidden justify-center items-center gap-3 w-full">
                        <span>امتیاز شما:</span>
                        <YourScore score="56231" classes="font-bold px-2" />
                    </div>

                    <hr className="block xl:hidden w-full h-[0.5px] bg-white pl-[10%]" />

                    {items.map((item) => {

                        const isActive =
                            pathname === item.href ||
                            (item.href !== '/' && pathname.startsWith(item.href + '/'))

                        return (
                            <li key={item.href} className="mr-[15%] xl:mr-0 xl:h-full px-2">
                                <a
                                    href={item.href}
                                    style={isActive ? activeGlowStyle : undefined}
                                    className={`${isActive ? '!text-[#00E489]' : 'text-white'}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                    <svg
                        className="block xl:hidden mr-[15%] xl:mr-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <mask
                            id="mask0_42519_75555"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                        >
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_42519_75555)">
                            <path
                                d="M12.0008 13.3998L7.10078 18.2998C6.91745 18.4831 6.68411 18.5748 6.40078 18.5748C6.11745 18.5748 5.88411 18.4831 5.70078 18.2998C5.51745 18.1165 5.42578 17.8831 5.42578 17.5998C5.42578 17.3165 5.51745 17.0831 5.70078 16.8998L10.6008 11.9998L5.70078 7.0998C5.51745 6.91647 5.42578 6.68314 5.42578 6.3998C5.42578 6.11647 5.51745 5.88314 5.70078 5.6998C5.88411 5.51647 6.11745 5.4248 6.40078 5.4248C6.68411 5.4248 6.91745 5.51647 7.10078 5.6998L12.0008 10.5998L16.9008 5.6998C17.0841 5.51647 17.3174 5.4248 17.6008 5.4248C17.8841 5.4248 18.1174 5.51647 18.3008 5.6998C18.4841 5.88314 18.5758 6.11647 18.5758 6.3998C18.5758 6.68314 18.4841 6.91647 18.3008 7.0998L13.4008 11.9998L18.3008 16.8998C18.4841 17.0831 18.5758 17.3165 18.5758 17.5998C18.5758 17.8831 18.4841 18.1165 18.3008 18.2998C18.1174 18.4831 17.8841 18.5748 17.6008 18.5748C17.3174 18.5748 17.0841 18.4831 16.9008 18.2998L12.0008 13.3998Z"
                                fill="white"
                            />
                        </g>
                    </svg>
                </ul>
                <div className="flex items-center gap-3">
                    <YourScore score="56231" classes="hidden xl:flex px-4" />
                    {auth && (
                        <img
                            src={bell.src}
                            alt="avatar"
                            style={{width:"25px", height:"25px"}}
                        />
                    )}
                    <div className="flex items-center gap-1">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                                fill="white"
                            />
                            <path
                                d="M20.002 17.5002C20.002 19.9855 20.002 22.0002 12.002 22.0002C4.00195 22.0002 4.00195 19.9855 4.00195 17.5002C4.00195 15.0149 7.58367 13.0002 12.002 13.0002C16.4203 13.0002 20.002 15.0149 20.002 17.5002Z"
                                fill="white"
                            />
                        </svg>
                        <svg
                            className="hidden xl:block"
                            width="9"
                            height="5"
                            viewBox="0 0 9 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.775 4.475L0.15 0.85C0.1 0.8 0.0625 0.745833 0.0375 0.6875C0.0125 0.629167 0 0.566667 0 0.5C0 0.366667 0.0458333 0.25 0.1375 0.15C0.229167 0.05 0.35 0 0.5 0H8.1C8.25 0 8.37083 0.05 8.4625 0.15C8.55417 0.25 8.6 0.366667 8.6 0.5C8.6 0.533333 8.55 0.65 8.45 0.85L4.825 4.475C4.74167 4.55833 4.65833 4.61667 4.575 4.65C4.49167 4.68333 4.4 4.7 4.3 4.7C4.2 4.7 4.10833 4.68333 4.025 4.65C3.94167 4.61667 3.85833 4.55833 3.775 4.475Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu

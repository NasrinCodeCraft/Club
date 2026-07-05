// bash: openssl rand -base64 32 then go to '.env' and write: AUTH_SECRET=xxxxxxxx....
'use client'

import "../../../assets/styles/pages/home/index.css"
import wikiClubSlider from '@/assets/img/club/wiki-club-slider.jpg'
import wikiClubSlider1 from '@/assets/img/club/wiki-club-slider1.png'
import wikiClubSlider2 from '@/assets/img/club/wiki-club-slider2.png'
import FadeSlider from '@/app/(public-pages)/Home/components/FadeSlider'
import CardGameWizard from "@/app/(public-pages)/Home/components/CardGameWizard";
import CardGameSlider from '@/app/(public-pages)/Home/components/CardGameSlider'

import {useState} from "react";

const Page = () => {

    const [openModalLogin, setOpenModalLogin] = useState(false)

    const isAuthenticated = true;

    const sliderImages = [
        wikiClubSlider.src,
        wikiClubSlider1.src,
        wikiClubSlider2.src,
    ]

    return (
        <>
            <main
                className="w-full flex flex-col justify-center items-center gap-5 lg:px-0 text-base bg-white dark:bg-gray-900 overflow-hidden font-peyda">
                <FadeSlider
                    images={sliderImages}
                    className="h-[150px] md:h-[360px] 3xl:h-[500px] mt-5 club-container rounded-[20px] my-5"
                />
                <div className="grid grid-cols-1 xl:grid-cols-2 club-container gap-10 my-5">
                    <CardGameWizard auth={isAuthenticated} setOpenModalLogin={setOpenModalLogin} />
                    <CardGameSlider auth={isAuthenticated} setOpenModalLogin={setOpenModalLogin} />
                </div>
            </main>
        </>
    )
}

export default Page

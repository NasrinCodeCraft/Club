// bash: openssl rand -base64 32 then go to '.env' and write: AUTH_SECRET=xxxxxxxx....
'use client'

import wikiClubSlider from '@/assets/img/club/wiki-club-slider.jpg'
import wikiClubSlider1 from '@/assets/img/club/wiki-club-slider1.png'
import wikiClubSlider2 from '@/assets/img/club/wiki-club-slider2.png'
import FadeSlider from '@/app/(public-pages)/Home/components/FadeSlider'

const Page = () => {

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

            </main>
        </>
    )
}

export default Page

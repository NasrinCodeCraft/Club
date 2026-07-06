'use client'

import CardGame from '@/app/(public-pages)/gameClub/components/CardGame'
import Image from 'next/image'
import React from 'react'
import wiki_club_race1 from '@/assets/img/club/wiki-club-race1.png'
import eat_dot from '@/assets/img/club/eat-dot.png'
import TopPeople from '@/app/(public-pages)/gameClub/components/TopPeople'

const GameClub =() => {

    return (
        <main className="club-container flex flex-col justify-center items-center my-5">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-stretch justify-between gap-5">
                <TopPeople />
                <CardGame
                    img={<Image
                    src={wiki_club_race1}
                    alt="avatar"
                    className="w-auto h-[180px]"
                />}
                          titleGame="ماشین باز"
                          descGame="توضیحات مربوط به بازی «ماشین باز» که اینجا می‌تونه نوشته بشه و در مورد امتیازاتش."
                    href="/wikiGames/car-race"
                />
                <CardGame
                    img={<Image
                    src={eat_dot}
                    alt="avatar"
                    className="w-auto h-[180px]"
                />}
                          titleGame="نقطه خور!"
                          descGame="توضیحات مربوط به بازی «نقطه‌خور» که اینجا می‌تونه نوشته بشه و در مورد امتیازاتش."
                          href="/wikiGames/eat-dot"
                />
            </div>
        </main>
    )
}

export default GameClub
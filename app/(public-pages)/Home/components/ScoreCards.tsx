import ScoreCard from "@/assets/public-components/ScoreCard";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { AutoplayOptions } from 'swiper/types'
import React from 'react'
import YourScore from "@/assets/public-components/YourScore";
import SuspendCounter from "@/assets/public-components/SuspendCounter";
import avatar from "../../../../assets/img/club/avatar.png"
import history from "../../../../assets/img/club/history.svg"
import Missions from "../../../../assets/img/club/Missions.svg"
import ClubFlower from "../../../../assets/img/club/club-flower.png"
import EatDot from "../../../../assets/img/club/eat-dot.png"
import ClubDart from "../../../../assets/img/club/club-dart.png"
import ClubGun from "../../../../assets/img/club/club-gun.png"
import ClubPs1 from "../../../../assets/img/club/club-ps1.png"
import ClubPs2 from "../../../../assets/img/club/club-ps2.png"
import ClubDice from "../../../../assets/img/club/club-dice.png"
import ClubGlobe from "../../../../assets/img/club/club-globe.png"
import medal from "../../../../assets/img/club/MEDAL.png"

const ScoreCards = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5 club-container my-5">
            <ScoreCard
                bg="linear-gradient(257.43deg, #FFFFFF -4.93%, #D1D1D1 99.06%), radial-gradient(50% 50% at 50% 50%, rgba(66, 66, 66, 0) 0%, rgba(66, 66, 66, 0.2) 100%)"
                boxShadow="0px 4px 30px 0px #42424240, 0px 4px 4px 0px #42424240"
                avatar={
                    <img
                        src={avatar.src}
                        alt="avatar"
                        className="w-[77px] h-[77px]"
                    />
                }
                title={
                    <div className="flex justify-center items-center gap-2">
                        <h4 style={{ color: '#353132' }}>مسعود قنبری</h4>
                        <img
                            src={medal.src}
                            alt="medal"
                            style={{ width: '30px' }}
                        />
                    </div>
                }
                description=" با تکمیل اطلاعات می‌تونید به امتیازهای بیشتری دست پیدا کنید!"
                footer={
                    <SuspendCounter title="موارد نیاز به تکمیل شدن:" bgColor="black" txtColor="white" count="5"></SuspendCounter>
                }
            />

            <ScoreCard
                bg="linear-gradient(257.43deg, #F7E115 -4.93%, #D7C22B 99.06%),radial-gradient(50% 50% at 50% 50%, rgba(255, 191, 0, 0) 0%, rgba(255, 191, 0, 0.2) 100%)"
                boxShadow="0px 4px 30px 0px #FFCC4940, 0px 4px 4px 0px #FFCC4940"
                avatar={
                    <img
                        src={history.src}
                        alt="avatar"
                        className="w-[70px] h-[70px]"
                    />
                }
                title={<h4 style={{ color: '#353132' }}>تاریخچه امتیازات</h4>}
                description="تاریخچه امتیاز‌هایی که تا الان کسب کردی رو می‌تونی از اینجا ببینی!"
                footer={
                    <YourScore score={56231} classes="font-bold text-[14px] px-2" />
                }
            />

            <ScoreCard
                bg="linear-gradient(0deg, #00E489, #00E489), linear-gradient(257.43deg, #5FED2F -4.93%, #00E489 99.06%), radial-gradient(50% 50% at 50% 50%, rgba(0, 228, 137, 0) 0%, rgba(0, 108, 65, 0.2) 100%)"
                boxShadow="0px 4px 30px 0px #00E48940, 0px 4px 4px 0px #00E48940"
                avatar={
                    <img
                        src={Missions.src}
                        alt="avatar"
                        className="w-[70px] h-[70px]"
                    />
                }
                title={<h4 style={{ color: '#353132' }}>ماموریت‌های ویکی</h4>}
                description="ماموریت‌های هیجان‌انگیز ویکی‌کلاب  را انجام دهید و به پایان برسانید و امتیاز بگیرید!"
                footer={
                    <SuspendCounter title="ماموریت‌های در انتظار:" bgColor="#00E489" txtColor="black" count="3" />
                }
            />
            <ScoreCard
                bg="linear-gradient(257.43deg, #5A5A5A -4.93%, #202020 99.06%), radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)"
                boxShadow="0px 4px 30px 0px #20202040, 0px 4px 4px 0px #20202040"
                avatar={
                    <img
                        src={Missions.src}
                        alt="avatar"
                        className="w-[70px] h-[70px]"
                    />
                }
                title={
                    <div className="flex justify-between w-full gap-2 md:gap-5 md:flex-row">
                        <div className="flex flex-col justify-center">
                            <h4 className="text-white">کلوپ بازی</h4>
                            <p className="text-white">بازی کن، جایزه ببر!</p>
                        </div>
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                reverseDirection: false,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1.5 },
                                640: { slidesPerView: 3 },
                                768: { slidesPerView: 4 },
                                1024: { slidesPerView: 5 },
                            }}
                            loop={false}
                            speed={1000}
                            onReachEnd={(swiper) => {
                                ;(
                                    swiper.params.autoplay as AutoplayOptions
                                ).reverseDirection = true
                            }}
                            onReachBeginning={(swiper) => {
                                ;(
                                    swiper.params.autoplay as AutoplayOptions
                                ).reverseDirection = false
                            }}
                            className="w-[150px] sm:w-[300px] md:w-[400px] lg:w-3/5 xl:w-[64%] overflow-hidden"
                        >
                            <SwiperSlide>
                                <img
                                    src={ClubFlower.src}
                                    alt="avatar"
                                    className="w-[60px] h-[60px]"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src={EatDot.src}
                                    alt="avatar"
                                    className="w-[70px] h-[70px]"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src={ClubDart.src}
                                    alt="avatar"
                                    className="w-[60px] h-[60px]"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src={ClubGun.src}
                                    alt="avatar"
                                    className="w-[60px] h-[60px]"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src={ClubPs1.src}
                                    alt="avatar"
                                    className="w-[60px] h-[60px]"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src={ClubPs2.src}
                                    alt="avatar"
                                    className="w-[60px] h-[60px]"
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img
                                    src={ClubDice.src}
                                    alt="avatar"
                                    className="w-[60px] h-[60px]"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                }
                description=""
                footer={
                    <SuspendCounter title="تعداد بازی ها:" bgColor="#E41B00" txtColor="white" count="4" />
                }
                classes="xl:col-span-2"
            />
            <ScoreCard
                bg="linear-gradient(257.43deg, #AFDDFF -4.93%, #00BFFF 99.06%), radial-gradient(50% 50% at 50% 50%, rgba(53, 127, 180, 0) 0%, rgba(53, 127, 180, 0.2) 100%)"
                boxShadow="0px 4px 30px 0px #357FB440, 0px 4px 4px 0px #357FB440"
                avatar={
                    <img
                        src={ClubGlobe.src}
                        alt="avatar"
                        className="w-[70px] h-[70px]"
                    />
                }
                title={<h4 style={{ color: '#353132' }}>قرعه‌کشی ماهانه</h4>}
                description="اینجا می‌تونی توی قرعه‌کشی ماهانه شرکت کنی و برنده جایزه‌ی خوبی بشی!"
                footer={
                    <SuspendCounter title="روزهای مانده تا قرعه‌کشی:" bgColor="#00BFFF" txtColor="white" count="10" />
                }
            />
        </div>
    )
}

export default ScoreCards

import WikiButton from '@/assets/public-components/WikiButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import React from 'react'
import { LoginViaCards } from '@/app/(public-pages)/Home/components/CardGameWizard'
import carRace from '../../../../assets/img/club/wiki-club-race1.png'
import bigGift from '../../../../assets/img/club/big-gift.png'
import eatDot from '../../../../assets/img/club/eat-dot.png'

const CardGameSlider = ({auth, setOpenModalLogin}:LoginViaCards) => {
    return (
        <div className="relative border border-[#D0D0D0] h-[300px] md:h-auto rounded-[15px] px-[5px] md:px-[20px] py-[5px] md:py-[30px]">
            <WikiButton
                id=""
                title={
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.6667 33.3333C14.3611 33.3333 12.1944 32.8958 10.1667 32.0208C8.13889 31.1458 6.375 29.9583 4.875 28.4583C3.375 26.9583 2.1875 25.1944 1.3125 23.1667C0.4375 21.1389 0 18.9722 0 16.6667C0 14.3611 0.4375 12.1944 1.3125 10.1667C2.1875 8.13889 3.375 6.375 4.875 4.875C6.375 3.375 8.13889 2.1875 10.1667 1.3125C12.1944 0.4375 14.3611 0 16.6667 0C18.9722 0 21.1389 0.4375 23.1667 1.3125C25.1944 2.1875 26.9583 3.375 28.4583 4.875C29.9583 6.375 31.1458 8.13889 32.0208 10.1667C32.8958 12.1944 33.3333 14.3611 33.3333 16.6667C33.3333 18.9722 32.8958 21.1389 32.0208 23.1667C31.1458 25.1944 29.9583 26.9583 28.4583 28.4583C26.9583 29.9583 25.1944 31.1458 23.1667 32.0208C21.1389 32.8958 18.9722 33.3333 16.6667 33.3333ZM17 18.3333L15.5 19.8333C15.1944 20.1389 15.0417 20.5278 15.0417 21C15.0417 21.4722 15.1944 21.8611 15.5 22.1667C15.8056 22.4722 16.1944 22.625 16.6667 22.625C17.1389 22.625 17.5278 22.4722 17.8333 22.1667L22.1667 17.8333C22.5 17.5 22.6667 17.1111 22.6667 16.6667C22.6667 16.2222 22.5 15.8333 22.1667 15.5L17.8333 11.1667C17.5278 10.8611 17.1389 10.7083 16.6667 10.7083C16.1944 10.7083 15.8056 10.8611 15.5 11.1667C15.1944 11.4722 15.0417 11.8611 15.0417 12.3333C15.0417 12.8056 15.1944 13.1944 15.5 13.5L17 15H11.6667C11.1944 15 10.7986 15.1597 10.4792 15.4792C10.1597 15.7986 10 16.1944 10 16.6667C10 17.1389 10.1597 17.5347 10.4792 17.8542C10.7986 18.1736 11.1944 18.3333 11.6667 18.3333H17Z"
                            fill="#9D9D9D"
                        />
                    </svg>
                }
                classes="prev-btn hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 w-6 md:w-9 h-6 md:h-9 rounded-full"
            />
            <WikiButton
                id=""
                title={
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.3333 18.3333H21.6667C22.1389 18.3333 22.5347 18.1736 22.8542 17.8542C23.1736 17.5347 23.3333 17.1389 23.3333 16.6667C23.3333 16.1944 23.1736 15.7986 22.8542 15.4792C22.5347 15.1597 22.1389 15 21.6667 15H16.3333L17.8333 13.5C18.1389 13.1944 18.2917 12.8056 18.2917 12.3333C18.2917 11.8611 18.1389 11.4722 17.8333 11.1667C17.5278 10.8611 17.1389 10.7083 16.6667 10.7083C16.1944 10.7083 15.8056 10.8611 15.5 11.1667L11.1667 15.5C10.8333 15.8333 10.6667 16.2222 10.6667 16.6667C10.6667 17.1111 10.8333 17.5 11.1667 17.8333L15.5 22.1667C15.8056 22.4722 16.1944 22.625 16.6667 22.625C17.1389 22.625 17.5278 22.4722 17.8333 22.1667C18.1389 21.8611 18.2917 21.4722 18.2917 21C18.2917 20.5278 18.1389 20.1389 17.8333 19.8333L16.3333 18.3333ZM16.6667 33.3333C14.3611 33.3333 12.1944 32.8958 10.1667 32.0208C8.13889 31.1458 6.375 29.9583 4.875 28.4583C3.375 26.9583 2.1875 25.1944 1.3125 23.1667C0.4375 21.1389 0 18.9722 0 16.6667C0 14.3611 0.4375 12.1944 1.3125 10.1667C2.1875 8.13889 3.375 6.375 4.875 4.875C6.375 3.375 8.13889 2.1875 10.1667 1.3125C12.1944 0.4375 14.3611 0 16.6667 0C18.9722 0 21.1389 0.4375 23.1667 1.3125C25.1944 2.1875 26.9583 3.375 28.4583 4.875C29.9583 6.375 31.1458 8.13889 32.0208 10.1667C32.8958 12.1944 33.3333 14.3611 33.3333 16.6667C33.3333 18.9722 32.8958 21.1389 32.0208 23.1667C31.1458 25.1944 29.9583 26.9583 28.4583 28.4583C26.9583 29.9583 25.1944 31.1458 23.1667 32.0208C21.1389 32.8958 18.9722 33.3333 16.6667 33.3333Z"
                            fill="#9D9D9D"
                        />
                    </svg>
                }
                classes="next-btn hidden md:block  absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200 w-6 md:w-9 h-6 md:h-9 rounded-full"
            />
            <Swiper
                modules={[
                    // Autoplay,
                    Navigation,
                    Pagination,
                ]}
                // autoplay={{
                //     delay: 2000,
                //     disableOnInteraction: false
                // }}
                loop={true}
                speed={1000}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <div className="w-full h-full flex justify-around items-center md:px[30px] gap-2 px-5 md:px-[40px]">
                        <img
                            src={carRace.src}
                            alt="avatar"
                            className="w-3/5"
                        />
                        <div className="flex flex-col justify-start items-start gap-3">
                            <div>
                                <h3>سرعت و هیجان</h3>
                                <p className="text-md text-black md:text-xl">
                                    هر روزی می‌تونی مسابقه بدی و برنده‌ی
                                    جایزه‌های روزانه ‌بشی!
                                </p>
                            </div>
                            <WikiButton
                                id=""
                                title="شانست رو امتحان کن!"
                                type="fill"
                                classes="px-[20px] py-[10px] bg-[#00E489] rounded-[50px] text-white  text-sm font-bold"
                                href={auth ? '/wikiGames/car-race' : ''}
                                onClick={()=>{if (!auth) {setOpenModalLogin(true)}}}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full flex justify-around items-center md:px[30px] gap-2 px-5 md:px-[40px]">
                        <img
                            src={bigGift.src}
                            alt="avatar"
                            className="w-2/5"
                        />
                        <div className="flex flex-col justify-start items-start gap-3">
                            <div>
                                <h3>جایزه بزرگ!</h3>
                                <p className="text-md text-black md:text-xl">
                                    هر روزی می‌تونی شانست رو امتحان کنی و
                                    برنده‌ی جایزه‌های روزانه ‌بشی!
                                </p>
                            </div>
                            <WikiButton
                                id=""
                                title="شانست رو امتحان کن!"
                                type="fill"
                                classes="px-[20px] py-[10px] bg-[#00E489] rounded-[50px] text-white  text-sm font-bold"
                                href={auth ? '/wikiGames/big-gift' : ''}
                                onClick={()=>{if (!auth) {setOpenModalLogin(true)}}}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full flex justify-around items-center md:px[30px] gap-2 px-5 md:px-[40px]">
                        <img
                            src={eatDot.src}
                            alt="avatar"
                            className="w-2/5"
                        />
                        <div className="flex flex-col justify-start items-start gap-3">
                            <div>
                                <h3>نقطه خور!</h3>
                                <p className="text-md text-black md:text-xl">
                                    هر روزی می‌تونی شانست رو امتحان کنی و
                                    برنده‌ی جایزه‌های روزانه ‌بشی!
                                </p>
                            </div>
                            <WikiButton
                                id=""
                                title="شانست رو امتحان کن!"
                                type="fill"
                                classes="px-[20px] py-[10px] bg-[#00E489] rounded-[50px] text-white  text-sm font-bold"
                                href={auth ? '/wikiGames/eat-dot' : ''}
                                onClick={()=>{if (!auth) {setOpenModalLogin(true)}}}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CardGameSlider;

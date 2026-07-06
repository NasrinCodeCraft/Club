import WikiCard from "@/assets/public-components/WikiCard";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import gifts from "../../../../assets/img/club/gifts.svg"

type WikiCardsProps = {
    auth: string | boolean | undefined
}

const WikiCards = ({auth}:WikiCardsProps) => {

    const wikiCards = [
        { id: 1, theme: "#0E5445", verticalTitle: "ویکی شاپ", title: "خلافی خودرو", subtitle: "50% تخفیف استعلام خلافی", expire: "23 مهر 1404", amount: "1000" },
        { id: 2, theme: "#FF5F2C", verticalTitle: "ویکی هوم", title: "ثبت آگهی", subtitle: "2 آگهی رایگان", expire: "۱۰ فروردین ۱۴۰۶", amount: "300" },
        { id: 3, theme: "#0E5445", verticalTitle: "ویکی شاپ", title: "گوش به زنگ", subtitle: "1 ماه اشتراک ویژه رایگان", expire: "۳ روز دیگر", amount: "2000" },
        { id: 4, theme: "#001ED9", verticalTitle: "ویکی پی", title: "اعتبار سنجی", subtitle: "25% تخفیف تا سقف 100 هزار تومان", expire: "۲۰ شهریور ۱۴۰۵", amount: "750" },
        { id: 5, theme: "#ED1B34", verticalTitle: "دیجی کالا", title: "ارسال رایگان", subtitle: "۲بار ارسال رایگان برای خریدهای بالاتر از ۲۰۰ هزار تومان", expire: "امروز", amount: "6400" },
    ];

    return (
        <>
            <div className="flex justify-start items-center gap-1 club-container mt-5">
                <img
                    src={gifts.src}
                    alt="avatar"
                    width={70}
                    height={70}
                />
                <div className="flex flex-col justify-center items-start gap-1">
                    <h4>جوایز و تخفیف‌ها</h4>
                    <p className="text-sm text-[#00E489]"> نمایش همه‌ {'>'} </p>
                </div>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView="auto"
                loop={false}
                speed={1000}
                pagination={{ clickable: true }}
                className="w-full !px-[5%] !pb-10 xl:!px-[10%]"
            >
                {wikiCards.map((card) => (
                    <SwiperSlide key={card.id} className="!w-[300px]">
                        <WikiCard
                            theme={card.theme}
                            verticalTitle={card.verticalTitle}
                            title={card.title}
                            subtitle={card.subtitle}
                            expire={card.expire}
                            amount={card.amount}
                            disabled={!auth}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default WikiCards

import Image from 'next/image'
import PersianNumber from "@/assets/public-components/PersianNumber";

type YourScoreProps = {
    score: number | string
    classes?: string
}

const YourScore = ({score, classes}: YourScoreProps) => {

    return (
        <div className={`font-extrabold flex justify-center items-center gap-1 py-1 bg-white text-black rounded-2xl cursor-pointer ${classes}`}>
            <PersianNumber value={score} />
            <Image
                src={require('@/assets/img/club/img.png')}
                alt="avatar"
                style={{
                    width: '20px',
                    height: '20px',
                }}
            />
        </div>
    )
}

export default YourScore
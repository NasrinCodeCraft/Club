import React from 'react'
import go from "../img/club/go.png"

type ScoreCardProps = {
    bg: string;
    boxShadow?: string;
    avatar: React.ReactNode;
    title: React.ReactNode;
    description: string;
    footer: React.ReactNode;
    classes?: string;
}

const ScoreCard = ({bg, boxShadow, avatar, title, description, footer, classes}:ScoreCardProps) => {
    return (
        <div
            className={`flex flex-col items-start justify-center gap-3 rounded-2xl px-5 py-3 font-peyda  overflow-x-hidden ${classes}`}
            style={{
                background: bg,
                boxShadow: boxShadow,
            }}
        >
            <div className="flex justify-start items-stretch w-full gap-4">
                {avatar}
                <div className="flex flex-col items-start justify-center w-full gap-3">
                    {title}
                    <p className="text-black text-sm">{description}</p>
                </div>
            </div>
            <hr
                style={{
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'white',
                    opacity: '0.6',
                }}
            />
            <div className="flex justify-between items-center w-full">
                {footer}
                <img src={go.src} alt="go" style={{ width: '40px' }} />
            </div>
        </div>
    )
}

export default ScoreCard

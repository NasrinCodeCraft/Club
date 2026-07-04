'use client'

import { useEffect, useState } from 'react'

type FadeSliderProps = {
    images: string[]
    interval?: number
    className?: string
}

const FadeSlider = ({ images, interval = 4000, className = '' }: FadeSliderProps) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, interval)

        return () => clearInterval(timer)

    }, [images.length, interval])

    return (
        <div className={`flex justify-center relative overflow-hidden ${className}`}>
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt="slider"
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                        i === index ? 'opacity-100' : 'opacity-0'
                    }`} />
            ))}
        </div>
    )
}

export default FadeSlider
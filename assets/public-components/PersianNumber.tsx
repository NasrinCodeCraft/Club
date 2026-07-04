import { CSSProperties } from 'react'

type PersianNumberProps = {
    value: number | string
    className?: string
    style?: CSSProperties
    comma?: boolean
}

const PersianNumber = ({ value, className = '', style, comma = false }: PersianNumberProps) => {

    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    const toPersian = (str: string) => {
        return str.replace(/\d/g, (char) => persianDigits[parseInt(char)])
    }

    if (comma) {
        const formatted = new Intl.NumberFormat('fa-IR').format(Number(value))
        return <span className={className}>{formatted}</span>
    }

    return (
        <span className={className} style={style}>{toPersian(value.toString())}</span>
    )
}

export default PersianNumber
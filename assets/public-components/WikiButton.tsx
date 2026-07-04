type WikiButtonProps = {
    id: string
    title: string | React.ReactNode
    type?: 'fill' | 'outLine'
    classes?: string
    onClick?: () => void
    disable?: boolean | undefined | string
    href?: string
}

const WikiButton = ({
                        id,
                        title,
                        type,
                        classes,
                        onClick,
                        disable = false,
                        href,
                    }: WikiButtonProps) => {
    const btnBaseClasses = `border border-[#00E489] rounded-[50px] ${disable && 'pointer-events-none border !border-[#D8D8D8] !text-gray-400'}`
    const variantClasses =
        type === 'fill'
            ? 'btn-fill bg-[#00E489] text-white'
            : 'btn-outline bg-white text-[#00E489]'
    const finalClassName = `${btnBaseClasses} ${variantClasses} ${classes}`

    if(href) {
        return (
            <a
                id={id}
                href={href}
                onClick={onClick}
                className={finalClassName}>
                {title}
            </a>
        )
    }

    return (
        <button
            id={id}
            className={finalClassName}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default WikiButton

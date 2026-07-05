import classNames from 'classnames'
import { HiX } from 'react-icons/hi'

import {STEPS_STATUS} from "@/assets/utils/constants";
import type { CommonProps, StepStatus } from '../../@types/common'
import type { ReactNode, Ref } from 'react'

const { COMPLETE, PENDING, IN_PROGRESS, ERROR } = STEPS_STATUS

const STEP_STATUS_ICON = {
    [COMPLETE]: (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="24" height="24" rx="12" fill="#00E489" />
            <circle cx="12" cy="12" r="4" fill="white" />
        </svg>
    ),
    [PENDING]: (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="1" y="1" width="22" height="22" rx="11" fill="white" />
            <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="11"
                stroke="#CDCDCD"
                strokeWidth="2"
            />
            <circle cx="12" cy="12" r="4" fill="#CDCDCD" />
        </svg>
    ),
    [IN_PROGRESS]: (
        <svg
            className="drop-shadow-[0_0_15px_#00FF6A80]"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <rect
                    x="15"
                    y="15"
                    width="24"
                    height="24"
                    rx="12"
                    fill="white"
                    shapeRendering="crispEdges"
                />
                <rect
                    x="16"
                    y="16"
                    width="22"
                    height="22"
                    rx="11"
                    stroke="#00E489"
                    strokeWidth="2"
                    shapeRendering="crispEdges"
                />
                <g filter="url(#filter1_d_41350_73415)">
                    <circle cx="27" cy="27" r="4" fill="#00E489" />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_dd_41350_73415"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="7.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.416667 0 0 0 0.5 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_41350_73415"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0.894118 0 0 0 0 0.537255 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_41350_73415"
                        result="effect2_dropShadow_41350_73415"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_41350_73415"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_d_41350_73415"
                    x="13"
                    y="13"
                    width="28"
                    height="28"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0.894118 0 0 0 0 0.537255 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_41350_73415"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_41350_73415"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    ),
    [ERROR]: <HiX />,
}

export interface StepItemProps extends CommonProps {
    customIcon?: ReactNode | string
    description?: ReactNode | string
    isLast?: boolean
    onStepChange?: () => void
    ref?: Ref<HTMLDivElement>
    status?: StepStatus
    stepNumber?: number
    title?: ReactNode | string
    vertical?: boolean
}

const StepItem = (props: StepItemProps) => {
    const {
        className,
        customIcon,
        description,
        isLast,
        onStepChange,
        ref,
        status,
        stepNumber,
        title,
        vertical,
        ...rest
    } = props

    let stepIcon = (
        <span>{STEP_STATUS_ICON[status as StepStatus] ?? stepNumber}</span>
    )

    if (customIcon) {
        stepIcon = <span>{customIcon}</span>
    }

    const stepItemClass = classNames(
        `step-item step-item-${status}`,
        vertical && 'step-item-vertical',
        className,
    )

    const stepWrapperClass = classNames(
        'step-item-wrapper',
        onStepChange && 'step-clickable',
    )

    const stepIconClass = classNames(
        `step-item-icon step-item-icon-${status}`,
        status === COMPLETE && `bg-primary text-white`,
        status === ERROR && `step-item-icon-error`,
        status === IN_PROGRESS &&
        `text-primary dark:text-gray-100 border-primary step-item-icon-current`,
    )

    const stepConnectClass = classNames(
        'step-connect',
        title ? 'ml-2.5 rtl:mr-2.5' : '',
        vertical ? 'step-connect-vertical' : '',
        status === COMPLETE ? `bg-primary` : `inactive`,
    )

    const stepTitleClass = classNames(
        'step-item-title',
        status === ERROR && `step-item-title-error`,
        onStepChange && status !== ERROR && `hover:text-primary`,
    )

    const handleStepChange = () => {
        onStepChange?.()
    }

    return (
        <div
            className={stepItemClass}
            {...rest}
            ref={ref}
            role="presentation"
            onClick={handleStepChange}
        >
            <div className={stepWrapperClass}>
                <div className={stepIconClass}>{stepIcon}</div>
                {title && (
                    <div className="step-item-content">
                        {title && (
                            <span className={stepTitleClass}>{title}</span>
                        )}
                        {description && vertical && (
                            <span className="step-item-description">
                                {description}
                            </span>
                        )}
                    </div>
                )}
            </div>
            {!isLast && <div className={stepConnectClass} />}
        </div>
    )
}

export default StepItem

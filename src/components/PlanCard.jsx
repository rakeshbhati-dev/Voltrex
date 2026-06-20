import React from 'react'
import BulletLine from './BulletLine'
import Button from './Button'

function PlanCard({
    name,
    price,
    features = [],
    isPopular,
    isSelected,
    onSelect,
    onClick
}) {
    return (
        <div
            onClick={onSelect}
            className={`
                relative px-5 cursor-pointer transition-all duration-300
                ${isPopular
                    ? 'bg-primary py-6 md:py-12 z-10'
                    : 'bg-background py-5 md:py-10'
                }
                ${isSelected
                    ? 'border-2 border-primary md:scale-105 shadow-xl shadow-primary/20'
                    : 'border-2 border-transparent'
                }
                ${isPopular && isSelected
                    ? 'md:scale-105 shadow-xl shadow-primary/30'
                    : ''
                }
                w-full md:w-auto
            `}
        >
            {/* Most Popular badge */}
            {isPopular && (
                <div className='inline-block bg-white text-primary text-xs font-bold tracking-widest py-1 px-3 uppercase mb-5'>
                    Most Popular
                </div>
            )}

            {/* Mobile layout — streaming-service style row */}
            <div className='flex items-center justify-between md:block'>

                {/* Left: name + feature preview */}
                <div className='flex-1 md:block'>
                    <h4 className={`text-xs font-semibold tracking-widest uppercase mb-1 md:mb-3
                        ${isPopular ? 'text-white/75' : 'text-gray'}`}>
                        {name}
                    </h4>

                    {/* Feature preview — mobile only */}
                    <p className={`text-xs md:hidden
                        ${isPopular ? 'text-white/60' : 'text-gray/60'}`}>
                        {features[0]}{features.length > 1 ? ` +${features.length - 1} more` : ''}
                    </p>
                </div>

                {/* Price block */}
                <div className='flex items-start gap-1 mb-0 md:mb-8 ml-4 md:ml-0'>
                    <span className={`text-lg font-bold mt-1
                        ${isPopular ? 'text-white/75' : 'text-gray'}`}>
                        ₹
                    </span>
                    <span className='font-black leading-none text-4xl md:text-6xl text-white'>
                        {price}
                    </span>
                    <span className={`text-xs self-end mb-1
                        ${isPopular ? 'text-white/75' : 'text-gray'}`}>
                        /mo
                    </span>
                </div>

                {/* Mobile select indicator */}
                <div className={`ml-4 md:hidden w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${isSelected ? 'border-primary bg-primary' : 'border-gray'}`}>
                    {isSelected && (
                        <div className='w-2 h-2 rounded-full bg-white' />
                    )}
                </div>
            </div>

            {/* Divider */}
            <div className={`hidden md:block h-px mb-7
                ${isPopular ? 'bg-white/20' : 'bg-white/10'}`}
            />

            {/* Features list — desktop only */}
            <ul className='hidden md:flex flex-col gap-3 mb-9'>
                {features.map((point, i) => (
                    <BulletLine
                        key={i}
                        line={point}
                        isPrimary={!isPopular}
                    />
                ))}
            </ul>

            {/* Mobile: expanded features when selected */}
            {isSelected && (
                <ul className='flex flex-col gap-2 mt-3 mb-4 md:hidden'>
                    {features.map((point, i) => (
                        <BulletLine
                            key={i}
                            line={point}
                            isPrimary={!isPopular}
                        />
                    ))}
                </ul>
            )}

            {/* CTA Button */}
            <Button
                title={isSelected ? 'Join Now' : 'Get Started'}
                buttonStyle={`
                    w-full py-3 text-sm font-bold tracking-widest uppercase transition-colors duration-200
                    ${isPopular
                        ? 'bg-white text-primary hover:bg-white/90'
                        : 'bg-transparent text-white border border-white/25 hover:border-white/60'
                    }
                    ${!isSelected ? 'hidden md:block' : 'block'}
                `}
                onClick={onClick}
            />
        </div>
    )
}

export default PlanCard
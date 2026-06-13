import React, { useState } from 'react'
import Section from '../components/Section'
import PlanCard from '../components/PlanCard'

function Plans() {
    const plans = [
        {
            name: 'Starter',
            price: '1,499',
            features: ['Gym Floor Access', '2 Group Classes / Week', 'Locker Room Access', 'Basic App Access'],
            isPopular: false,
        },
        {
            name: 'Pro Athlete',
            price: '2,999',
            features: ['Unlimited Gym Access', 'Unlimited Group Classes', '2 PT Sessions / Month', 'Nutrition Consultation', 'Full App + Analytics'],
            isPopular: true,
        },
        {
            name: 'Elite',
            price: '5,499',
            features: ['Everything in Pro', 'Unlimited PT Sessions', 'Custom Meal Planning', 'Recovery Zone Access', 'Priority Class Booking'],
            isPopular: false,
        },
    ]

    const [selected, setSelected] = useState(1)
    return (
        <Section
            isDark={true}
        >
            <div className='flex items-center gap-2 justify-center mb-2'>
                <div className='w-[24px] h-[2px] bg-primary'></div>
                <p className='text-primary text-sm font-semibold tracking-widest uppercase'>Simple Pricing</p>
                <div className='w-[24px] h-[2px] bg-primary'></div>
            </div>
            <h2 className='text-center text-5xl text-white uppercase font-black tracking-tight mb-10'>Choose Your <br />Plan </h2>
             <div className='
        flex flex-col gap-2 mt-10
        md:grid md:grid-cols-3 md:gap-0.5 md:items-center md:mt-14
      '>
        {plans.map((plan, i) => (
          <PlanCard
            key={i}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            isPopular={plan.isPopular}
            isSelected={selected === i}
            onSelect={() => setSelected(i)}
          />
        ))}
      </div>
        </Section>
    )
}

export default Plans
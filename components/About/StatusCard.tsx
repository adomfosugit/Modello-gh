'use client'
import CountUp from '@/components/CountUp';
import SpotlightCard from '@/components/SpotlightCard'
import React from 'react'

type Props = {
  title:string;
  subtitle:string;
  countdown:number
}

const StatusCard = ({title, subtitle, countdown}: Props) => {
  return (
    
  
    <SpotlightCard className="bg-white" spotlightColor="rgba(98, 40, 207, 0.89)">
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 text-nowrap">
        <CountUp from={0} to={countdown} separator="," direction="up" duration={1} className="count-up-text" />
           {'+'}  {title} 
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </SpotlightCard>
  )
}

export default StatusCard
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
    
  
    <SpotlightCard className="bg-white/40 backdrop-blur-xl border-white/30 border-1 " spotlightColor="rgba(231, 230, 240, 0.89)">
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-primary mb-3 text-nowrap">
        <CountUp from={0} to={countdown} separator="," direction="up" duration={1} className="count-up-text" />
           {'+'}  {title} 
        </h3>
        <p className="text-sm text-white leading-relaxed">
          {subtitle}
        </p>
      </div>
    </SpotlightCard>
  )
}

export default StatusCard
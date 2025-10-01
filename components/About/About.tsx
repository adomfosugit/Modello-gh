import React from 'react'
import StatusCard from './StatusCard'
import { AboutCardContent } from '@/Constants'
import WhyChooseUs from './WhyChooseUs'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col p-6 gap-y-6 mb-8'>
        <div className='h-1/4 flex space-x-3 w-full flex-start justify-evenly  max-w-6xl  mx-auto'>
        {AboutCardContent.map((item) => (
            <StatusCard key={item.id}  title={item.title}  subtitle={item.subtitle} countdown={item.countdown}/>
        ))}
        </div>
        <div>
            <WhyChooseUs />
        </div>
    </div>
  )
}

export default About
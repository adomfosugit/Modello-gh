import React from 'react'
import StatusCard from './StatusCard'
import { AboutCardContent } from '@/Constants'
import WhyChooseUs from './WhyChooseUs'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col p-6 gap-y-6 mb-8'>
       
            <WhyChooseUs />
        </div>
    
  )
}

export default About
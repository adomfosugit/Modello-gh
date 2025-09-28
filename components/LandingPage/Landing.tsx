'use client'
import React from 'react'


import { Button } from '../ui/button'
import TextType from '../TextType'
import CardFlip from './CardFlip'

type Props = {}

const Landing = (props: Props) => {
  return (
    <div className='max-h-screen flex justify-center items-center space-x-5 ' >
      <div className='w-1/2' style={{ width: '50%', height: '400px', position: 'relative' }}>
  
  <div className='absolute inset-0 flex items-center justify-center '>
    <div className='px-4 py-2 rounded mt--5'>
      <p className='text-5xl font-manrope font-bold '> The Art of a <span className='text-primary'>Perfect</span> Clean</p>
      <p className='text-primary text-xl font-bold'>
      <TextType  text={["Your Space, our shine","Turning Everyday Spaces Into Bright Places.", "A Fresh Touch for Every Surface.", "Detail-Driven, Shine-Guaranteed." , "Professional Cleaning, Personal Care."]} typingSpeed={60} pauseDuration={1500} showCursor={true} cursorCharacter="|"  textColors={['black']}/>
      </p>
    <div className='flex flex-row space-x-3 mt-2'>
        <Button className='w-[150px]'>Services</Button>
        <Button variant={'secondary'} className='w-[150px] border border-1 border-primary text-primary'>Book Appointment</Button>
    </div>
    </div>

  </div>
 
</div>

<div className='w-1/2  bg-red-400'>
  
    <CardFlip />

</div>
        
    
    </div>
  )
}

export default Landing
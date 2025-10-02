'use client'
import React from 'react'

import TextType from '../TextType'
import CardFlip from './CardFlip'

type Props = {}

const Landing = (props: Props) => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center bg-gradient-to-tl from-blue-500/60 to-transparent px-4 py-8 lg:py-0'>
      {/* Text Content Section */}
      <div className='w-full lg:w-1/2 flex items-center justify-center lg:min-h-screen'>
        <div className='px-4 sm:px-6 lg:px-8 py-6 lg:py-4 rounded max-w-3xl'>
          <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-manrope font-bold leading-tight'>
            The Art of a <span className='text-primary'>Perfect</span> Clean.
          </p>
          <p className='text-primary text-lg sm:text-xl md:text-2xl lg:text-xl font-bold mt-4'>
            <TextType 
              text={[
                "Your Space, our shine",
                "Turning Everyday Spaces Into Bright Places.", 
                "A Fresh Touch for Every Surface.", 
                "Detail-Driven, Shine-Guaranteed.", 
                "Professional Cleaning, Personal Care."
              ]} 
              typingSpeed={60} 
              pauseDuration={1500} 
              showCursor={true} 
              cursorCharacter="|"  
              textColors={['black']}
            />
          </p>
          {/* Uncomment if needed
          <div className='flex flex-col sm:flex-row gap-3 mt-6'>
            <Button className='w-full sm:w-[150px]'>Services</Button>
            <Button variant={'secondary'} className='w-full sm:w-[150px] border border-1 border-primary text-primary'>
              Book Appointment
            </Button>
          </div>
          */}
        </div>
      </div>

      {/* Card Section - Below text on mobile, side by side on large screens */}
      <div className='w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 pb-8 lg:pb-0'>
        <div className='w-full max-w-sm sm:max-w-md lg:max-w-lg'>
          <CardFlip />
        </div>
      </div>
    </div>
  )
}

export default Landing
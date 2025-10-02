'use client'
import React from 'react'

import TextType from '../TextType'
import CardFlip from './CardFlip'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '../ui/badge'
import StatusCard from '../About/StatusCard'
import { AboutCardContent } from '@/Constants'

type Props = {}

const Landing = (props: Props) => {
  return (
    <section className="relative hero overflow-hidden py-32 h-full">
    {/* Gradient overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
  <div className="container relative z-10 mx-auto px-4">
<div className="space-y-8 items-center">
<Badge
  variant="outline"
  className="bg-primary/40 border-sky-700 px-4 py-2 rounded-4xl text-white text-sm font-medium"
>

</Badge>
<h1

className="text-3xl md:text-4xl lg:text-5xl font-seondary font-bold text-white leading-tight">
  Sparkling Spaces, <br />
  <span className="inter text-primary">Exceptional Results</span>
</h1>
<p

className="text-white/80 text-lg md:text-xl max-w-md">
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
                textColors={['white']}
              />
</p>
<div className="flex flex-col sm:flex-row gap-4">
  <Button
    asChild
    size="lg"
    className="bg-primary text-black hover:bg-primary/80"
  >
    
    <Link href="/Services">
    Services  <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
  <Button
    asChild
    variant="secondary"
    size="lg"
    className="bg-white/30 border-white/40 hover:bg-white/60"
  >
    <Link className="text-white hover:text-black" href="/doctors">
    Book Appointment
    </Link>
  </Button>
</div>
</div>
                     <div className='h-1/4 flex flex-col md:flex-row space-x-3 w-full flex-start justify-evenly mt-30 md:mt-20  space-y-3  '>
                            {AboutCardContent.map((item) => (
                                <StatusCard key={item.id}  title={item.title}  subtitle={item.subtitle} countdown={item.countdown}/>
                            ))}
                            </div>
                

</div>
</section>
  )
}

export default Landing
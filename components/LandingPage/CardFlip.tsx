import React from 'react'
import CardSwap, { Card } from '../CardSwap' // Import Card from CardSwap
import { flipCardContent } from '@/Constants'
import Image from 'next/image'

type Props = {}

const CardFlip = (props: Props) => {
  return (
    <div 
      style={{ height: '600px', width: '70%' }} 
      className='relative flex items-center justify-center overflow-hidden'
    >
      <CardSwap 
        width={300}
        height={450}
        cardDistance={25} 
        verticalDistance={10} 
        delay={5000} 
        pauseOnHover={true}
        skewAmount={3}
        easing="elastic"
      >
        {flipCardContent.map((item) => (
          <Card 
            key={item.id}
           className='ring ring-2 ring-primary'
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              overflow: 'hidden',
              background: 'white'
            }}
          >
            {/* Header section */}
            <div className="border-b border-gray-200 bg-gradient-to-t from-gray-100 to-white p-3 flex-shrink-0">
              <h3 className="text-sm font-semibold text-gray-800">{item.TagContent}</h3>
            </div>
            
            {/* Image section */}
            <div className="relative flex-1">
              <Image
                src={item.ImageSrc}
                alt={item.TagContent}
                fill
                className="object-fit"
                sizes="500px"
              />
            </div>
          </Card>
        ))}
      </CardSwap>
    </div>
  )
}

export default CardFlip
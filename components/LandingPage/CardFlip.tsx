import React from 'react'
import { Card } from '../ui/card'
import CardSwap from '../CardSwap'
import { flipCardContent } from '@/Constants'
import Image from 'next/image'

type Props = {}

const CardFlip = (props: Props) => {
  return (
   
  <CardSwap cardDistance={10} verticalDistance={20} delay={5000} pauseOnHover={false }  >


{flipCardContent.map((item, index) => (
          // Use CardSwap's own Card component, not shadcn Card
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative w-full h-60">
              <Image
                src={item.ImageSrc}
                alt={item.TagContent}
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{item.TagContent}</h3>
              <p className="text-sm text-gray-600 mt-2">Professional cleaning service</p>
            </div>
          </div>
        ))}
   
  
  </CardSwap>
 
  )
}

export default CardFlip
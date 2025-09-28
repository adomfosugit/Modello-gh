import {  NavigationMenuLinks } from '@/Constants'
import React from 'react'
import NavigationLink from './NavigationLink'
import {
    NavigationMenu,
  
  } from "@/components/ui/navigation-menu"
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
    
  return (
    <div className='flex flex-row justify-between w-full shadow-sm items-center p-3'>
        <div className=''>
            <Image className='rounded-full' width={100} height={70} alt='Modello-gh Logo' src= {'/modello.735399a5ceacf176c1bb.png'} />
            
        </div>
        <NavigationMenu className='space-x-10 '>
            
            {NavigationMenuLinks.map((item) =>  (
                <div key={item.id}>
                    <NavigationLink name={item.name} link= {item.link} />
                </div>
            ))}
            
        </NavigationMenu>

    </div>
  )
}

export default Navbar


// Add mobile Dropdown to navbar and style logo for responsivenes


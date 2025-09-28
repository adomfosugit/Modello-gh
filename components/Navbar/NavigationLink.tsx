import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
type Props = {
    name:string;
    link:string;
}

const NavigationLink = ({name, link}: Props) => {
  return (
    <NavigationMenuItem className='list-none font-bold'>
      <NavigationMenuLink asChild>
        <Link href={`${link}`} className='text-xl text-primary font-manrope'>{name}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default NavigationLink
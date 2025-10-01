import { NavigationMenuLinks } from '@/Constants'
import React from 'react'
import NavigationLink from './NavigationLink'
import { NavigationMenu,} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'


type Props = {}

const Navbar = (props: Props) => {
    
  return (
    <div className='flex flex-row justify-between w-full shadow-sm items-center p-1 bg-white'>
        {/* Logo */}
        <div className='flex-shrink-0'>
            <Image 
                className=' w-25 h-16 md:w-32 md:h-18 object-fit' 
                width={100} 
                height={100} 
                alt='Modello-gh Logo' 
                src='/colored-logo.png' 
            />
        </div>

        {/* Mobile Dropdown - Visible on small screens only */}
        <div className='md:hidden'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    
                        <MenuIcon className="w-6 h-6 text-primary" />
              
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuGroup>
                        {NavigationMenuLinks.map((item) => (
                            <Link key={item.id} href={item.link}>
                                <DropdownMenuItem className="cursor-pointer">
                                    {item.name}
                                </DropdownMenuItem>
                            </Link>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

        {/* Desktop Navigation - Hidden on small screens */}
        <NavigationMenu className='hidden md:flex space-x-10'>
            {NavigationMenuLinks.map((item) => (
                <div key={item.id}>
                    <NavigationLink name={item.name} link={item.link} />
                </div>
            ))}
        </NavigationMenu>
    </div>
  )
}

export default Navbar
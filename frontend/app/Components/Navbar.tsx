"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'
import ToggleTheme from '@/components/ToggleTheme'
import Link from 'next/link'


export default function Navbar() {

    const router = useRouter()

    return (
        <nav className="flex items-center justify-between p-4">
          <div>
            <Link href="/">
              <div className="text-lg text-rose-500 text-3xl font-bold">Healix</div>
            </Link>
          </div>

          <div className='mx-5 flex space-x-[70px]'>
            <Link href="/" className='flex'>
              <div className="text-lg text-rose-500 font">Home</div>
            </Link>

            <Link href="/" className='flex'>
              <div className="text-lg text-rose-500 text font">Services</div>
            </Link>

            <Link href="/" className='flex'>
              <div className="text-lg text-rose-500 font">About</div>
            </Link>
          </div>
      
          <div className="flex items-center">
            <ToggleTheme />


            <div className="ml-6">
              <Link href="/auth/login">
                <Button className="btn btn-primary">Login</Button> 
              </Link>
            </div>

            
        
            <div className="ml-3">
              <Link href="/auth/signup">
                <Button variant="outline" className="btn btn-secondary">Sign Up</Button>
              </Link>
            </div>
          </div>
        </nav>
      );
}

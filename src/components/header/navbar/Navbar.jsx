
import Link from 'next/link'
import React from 'react'
import NavItems from '../navItmes/NavItems'


export default function Navbar() {
    return (
        <nav className='bg-white sticky top-0 z-50'>
            <div className='container mx-auto flex h-16 items-center justify-between'>
                {/* company logo */}
                <Link  href="/">
                    <img
                        src="/images/monir-group.jpg"
                        alt="company-logo"
                        className='h-10 object-contain w-auto'
                    />
                </Link>
                {/* nav items */}
                <NavItems/>
            </div>
        </nav>
    )
}

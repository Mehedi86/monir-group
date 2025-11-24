import Link from 'next/link'
import React from 'react'

export default function NavItems() {
    const itemsStyle = 'px-3 hover:text-rose-400'
    return (
        <div className="flex space-x-1 uppercase text-sm text-gray-700 font-semibold">
            <Link className={`${itemsStyle}`} href="/">Home</Link>
            <Link className={`${itemsStyle}`} href="/about">About</Link>
            <Link className={`${itemsStyle}`} href="/services">Services</Link>
            <Link className={`${itemsStyle}`} href="/clients">Clients</Link>
            <Link className={`${itemsStyle}`} href="/gallery">Gallery</Link>
            <Link className={`${itemsStyle}`} href="/profile">Profile</Link>
            <Link className={`${itemsStyle}`} href="/businesses">Our Businesses</Link>
            <Link className={`${itemsStyle}`} href="/team">Our Team</Link>
            <Link className={`${itemsStyle}`} href="/contact">Contact Us</Link>
        </div>
    )
}

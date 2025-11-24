import { about_monir_group } from '@/constants';
import React from 'react'
import Marquee from "react-fast-marquee";

export default function Notice() {
  return (
    <div className='bg-[#1A2A4A]'>
      <div className='container mx-auto px-6 md:px-8 text-white py-4 flex items-center gap-4'>
        <div className="w-auto">
          <h1 className="uppercase whitespace-nowrap font-semibold">Notices & Events</h1>
        </div>
        <Marquee
        pauseOnClick={true}
        speed={20}
        >
          {about_monir_group}
        </Marquee>
      </div>
    </div>
  )
}

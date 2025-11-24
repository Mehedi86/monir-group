import React from 'react'
import ContentHeader from '../header/ContentHeader'
import { about_monir_group } from '@/constants'
import Button from '../button/Button'

export default function Banner() {
  return (
    <div className='bg-gradient-to-r from-[#e94362]  to-[#17375f] pb-12 text-white'>
        <ContentHeader
        title="About Monir Group"
        titleStyle='text-center text-4xl font-bold pt-12'
        />

        {/* image */}
        <div>
          <img src="/images/banner.jpg" alt="banner" className='w-1/2 mx-auto rounded-lg shadow-lg my-12' />

          <p className='text-center w-4/6 mx-auto'>{about_monir_group}</p>
          <div className='flex justify-center my-6'>
            <Button 
            text="Learn More About Us"
            style="bg-[#17375f] rounded px-4 py-2 text-sm cursor-pointer"
            />
          </div>
        </div>
    </div>
  )
}

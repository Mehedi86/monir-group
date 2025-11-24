'use client'

import React, { useEffect, useState } from 'react'
import ContentHeader from '../header/ContentHeader'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


import { Navigation, Pagination, Autoplay } from 'swiper/modules'

export default function ClientsOpinion() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/data/clientOpinion.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error("Failed to fetch client opinions:", err))
    }, [])

    return (
        <div className='py-12 px-4 bg-gray-50'>
            <ContentHeader
                title='What Our Clients Say'
                titleStyle='text-3xl text-[#17375f] font-semibold text-center pb-4'
            />

            <div className='max-w-4xl mx-auto'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    speed={2000}
                >
                    {data.map(opinion => (
                        <SwiperSlide key={opinion.id}>
                            <div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
                                <img
                                    src={opinion.photo}
                                    alt={opinion.name}
                                    className='w-20 h-20 rounded-full object-cover mb-4'
                                />
                                <p className='text-gray-700 mb-3'>" {opinion.testimonial} "</p>
                                <h3 className='text-[#17375f] font-semibold'>{opinion.name}</h3>
                                <span className='text-gray-500 text-sm'>{opinion.position}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

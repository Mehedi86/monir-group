'use client'

import React, { useEffect, useState } from 'react'
import ContentHeader from '../header/ContentHeader';
import Button from '../button/Button';

export default function Services() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data/services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='py-12 px-4'>
            <ContentHeader
                title='Our Services'
                titleStyle='text-3xl text-[#17375f] font-semibold text-center pb-4'
            />
            <div className='border-b-4 border-rose-400 w-20 mx-auto'></div>
            <p className='max-w-2xl mx-auto text-gray-600 text-center pt-4 pb-8'>
                Recruitment of Bangladeshi working candidates in several company on a permanent contractual or temporary basis.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                {data.map(item => (
                    <div key={item.id} className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-[400px] flex flex-col justify-between'>
                        <h3 className='text-xl font-semibold text-[#17375f] mb-3'>{item.title}</h3>
                        <p className='text-gray-600 mb-4'>{item.description}</p>
                        <Button
                            text="Learn More"
                            style="bg-[#17375f] text-white px-4 py-2 rounded hover:bg-[#0f2b4d] transition-colors duration-300 w-fit"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

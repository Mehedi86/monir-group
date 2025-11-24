'use client'

import { messages } from '@/constants'
import React, { useState } from 'react'

export default function Message() {
    const [activeTab, setActiveTab] = useState(messages[0].id);
    const [data, setData] = useState(messages[0]);

    const handleTabClick = (message) => {
        setActiveTab(message.id);
        setData(message);
    };

    return (
        <div className="py-16 flex justify-center items-center bg-[#FAF4F4]">
            <div className="container mx-auto">

                {/* Tabs */}
                <div className="flex justify-center items-center overflow-x-auto">
                    <div className="flex items-center h-16 gap-6">
                        {messages.map(message => (
                            <span
                                key={message.id}
                                onClick={() => handleTabClick(message)}
                                className={`cursor-pointer px-6 py-4 text-lg border-b-4 
                                    ${activeTab === message.id ? "border-[#E94362]" : "border-transparent"}
                                `}
                            >
                                {message.designation}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm grid grid-cols-5 gap-10 mt-10">

                    {/* image */}
                    <div className="flex items-center col-span-2">
                        <img src={data.img} alt="" className="rounded-lg w-full object-cover h-[400px]" />
                    </div>

                    {/* description */}
                    <div className="col-span-3">
                        <p className='text-gray-400 text-xl pb-2'>Message from</p>
                        <h2 className="text-3xl font-semibold mb-4">{data.designation}</h2>
                        <p className="text-gray-600 mb-2">{data.message}</p>
                        <p className="text-gray-700 leading-7 mb-8 whitespace-pre-line">
                            {data.description}
                        </p>

                        <div className="border-t border-gray-200 pt-4">
                            <h3 className="font-semibold text-lg">{data.name}</h3>
                            <p className="text-gray-600">{data.designation}</p>
                            <p className="text-gray-600">{data.company}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Button } from '@heroui/react';
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const Feature = ({ feature }) => {
    const { name, capacity, category, description, image, location, availability, owner_email, price_per_hour, rating } = feature;
    return (
        <div
            className="border rounded-xl bg-white pb-5"
        >
            <Image
                width={400}
                height={400}
                src={image}
                alt={category}
                className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className='px-5 mt-10'>
                <h1 className="font-bold mt-3 text-2xl text-gray-800">
                    {name}
                </h1>

                <p className="text-gray-500 flex gap-1 items-center my-2 font-semibold">
                    <LuMapPin className='text-lg text-green-400 font-bold' /> {location}
                </p>
                <div className="flex justify-between items-center text-gray-700">
                    <p>
                        <span className='text-lg font-semibold'>${price_per_hour}</span>/ hour
                    </p>
                    <p className='text-lg font-bold flex gap-2 items-center'>
                        <span className='text-lg text-yellow-400'><FaStar /></span> {rating}
                    </p>
                </div>
                <Button className='btn rounded-lg w-full mt-5 bg-green-500'>Book Now</Button>
            </div>
        </div>
    )
}

export default Feature

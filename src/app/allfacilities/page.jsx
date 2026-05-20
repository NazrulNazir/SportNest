import { getAllFacilities } from '@/lib/data'
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const AllFacilitiesPage = async () => {
  const facilities = await getAllFacilities();
  console.log(facilities)
  return (
    <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-15 px-5 sm:px-0'>
      {
        facilities.map(facility => (
          <div key={facility._id}>
            <div
              className="border rounded-xl bg-white pb-5"
            >
              <Image
                width={400}
                height={400}
                src={facility.photo_URL}
                alt={facility.name}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className='px-5 mt-10'>
                <h1 className="font-bold mt-3 text-2xl text-gray-800">
                  {facility.name}
                </h1>

                <p className="text-gray-500 flex gap-1 items-center my-2 font-semibold">
                  <LuMapPin className='text-lg text-green-400 font-bold' /> {facility.Location}
                </p>
                <div className="flex justify-between items-center text-gray-700">
                  <p>
                    <span className='text-lg font-semibold'>${facility.Price_Per_Hour}</span>/ hour
                  </p>
                  <p className='text-lg font-bold flex gap-2 items-center'>
                    <span className='text-lg text-yellow-400'><FaStar /></span> 4.8
                  </p>
                </div>
                <Link href={`allfacilities/${facility._id}`}>
                  <Button className='btn rounded-lg w-full mt-5 bg-green-500'>Book Now</Button>
                </Link>
              </div>
            </div>
          </div>))
      }
    </div>
  )
}

export default AllFacilitiesPage

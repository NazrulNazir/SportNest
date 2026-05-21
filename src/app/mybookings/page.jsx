import BookingEmpty from '@/components/BookingEmpty';
import Cancel from '@/components/Cancel';
import { auth } from '@/lib/auth';
import { bookingCancel, getMybooking } from '@/lib/data';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react'
import { FaRegClock } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

const MyBookingsPage = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;
  // console.log('user id .......',user?.id);

  const bookings = await getMybooking(user?.id);


  // const bookings = []
  console.log(bookings)
  if (!user?.id) {
    return <BookingEmpty />
  }
  return (
    <div className='mx-auto px-5 sm:px-0 mt-10 max-w-5xl'>
      <h1 className='text-2xl font-bold text-gray-800'>My Bookings</h1>
      <div className='flex flex-col gap-4 mt-10'>
        {
          bookings.map(booking => (<div key={booking._id}>
            <div className='bg-gray-100 rounded-xl py-3 px-4 flex flex-col sm:flex-row justify-between sm:items-center gap-5'>

              <div className='flex gap-5'>
                <Image width={200} height={120} className='rounded-lg' src={booking.imageUrl} alt='hello'></Image>
                <div>
                  <div className='sm:flex items-center gap-5 mb-4'>
                    <h2 className='text-lg font-bold text-gray-800 mb-5 sm:-0'>{booking.facilityName}</h2>
                    <span className='bg-yellow-50 px-4 py-1.5 rounded-full font-semibold text-yellow-500'>pending</span>
                  </div>
                  <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 sm:mt-3'>
                    {/* booking data, timeslot, price */}
                    <p className='text-gray-600 font-semibold flex gap-1 items-center'>
                      <span className='text-green-500'><MdDateRange /></span>
                      {booking.facilityDate}
                    </p>
                    <p className='text-gray-600 font-semibold flex gap-1 items-center'>
                      <span className='text-green-500'><FaRegClock /></span>
                      {booking.timeSlot}</p>
                    <p className='font-semibold text-gray-600'>${booking.price}</p>

                  </div>
                </div>
              </div>

              <Cancel booking  = {booking}></Cancel>
            </div>

          </div>))
        }
      </div>
    </div>
  )

}

export default MyBookingsPage

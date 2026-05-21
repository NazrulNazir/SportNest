import DeleteBooking from '@/components/DeleteBooking'
import EditModal from '@/components/EditModal'
import { auth } from '@/lib/auth'
import { getMybooking } from '@/lib/data'
import { Button } from '@heroui/react'
import { headers } from 'next/headers'
import Image from 'next/image'
import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { GrEdit, GrLocation } from 'react-icons/gr'
import { MdDateRange } from 'react-icons/md'

const ManageMyFacilities = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;
  const bookings = await getMybooking(user?.email);

  // if (!user?.id) {
  //   return <BookingEmpty />
  // }
  return (
    <div className='mx-auto px-5 sm:px-0 mt-10 max-w-5xl'>
      <h1 className='text-2xl font-bold text-gray-800'>Manage my facilities</h1>
      <div className='flex flex-col gap-4 mt-10'>
        {
          bookings.map(booking => (<div key={booking._id}>
            <div className='bg-gray-100 rounded-xl py-3 px-4 flex flex-col sm:flex-row justify-between sm:items-center gap-5'>

              <div className='flex gap-5'>
                <Image width={200} height={120} className='rounded-lg' src={booking.photo_URL} alt='hello'></Image>
                <div>
                  <div className='sm:flex items-center gap-5 mb-4'>
                    <h2 className='text-lg font-bold text-gray-800 mb-5 sm:-0'>{booking.name}</h2>
                    <span className='bg-green-100 px-4 py-1.5 rounded-full font-semibold text-green-600'>{booking.Facility_Type}</span>
                  </div>
                  <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 sm:mt-3'>
                    {/* booking data, timeslot, price */}
                    <p className='text-gray-600 font-semibold flex gap-1 items-center'>
                      <span className='text-green-500 text-xl'><GrLocation /></span>
                      {booking.Location}
                    </p>
                    <p className='text-gray-600 font-semibold flex gap-1 items-center'>
                      <span className='text-green-500'><FaRegClock /></span>
                      {booking.Available_Time_Slots}</p>
                    <p className='font-semibold text-gray-600'>${booking.Price_Per_Hour}</p>

                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <EditModal booking = {booking}/>
                {/* <Button variant="secondary" className={'bg-none px-5'}><GrEdit/> <span className="text-[16px]">Edit</span></Button> */}
                <DeleteBooking bookingID ={booking._id} />
              </div>
            </div>

          </div>))
        }
      </div>
    </div>
  )
}

export default ManageMyFacilities

import BookingEmpty from '@/components/BookingEmpty';
import { auth } from '@/lib/auth';
// import { useSession } from '@/lib/auth-client';
import { getMybooking } from '@/lib/data';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

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
    <div className='max-w-7xl mx-auto px-5 sm:px-0 mt-10'>
      <h1 className='text-2xl font-bold text-gray-800'>My Bookings</h1>
      <div>
        {
          bookings.map(booking => (<div key={booking._id}>
            <Image width={100} height={100} src={booking.imageUrl} alt='hello'></Image>
          </div>))
        }
      </div>
    </div>
  )

}

export default MyBookingsPage

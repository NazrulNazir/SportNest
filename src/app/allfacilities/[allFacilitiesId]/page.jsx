'use client';

import { allFacilitiesDetails } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { LuMapPin } from 'react-icons/lu';
import { redirect, useParams } from 'next/navigation';
import { useSession } from '@/lib/auth-client';

const AllFacilitiesDetails = () => {

    const { data } = useSession();
    const user = data?.user;
    // const { email, id, image, name } = user;

    const { allFacilitiesId } = useParams();

    const [facility, setFacility] = useState(null);
    const [time, setTime] = useState('');
    const [timeSlot, setTimeSlot] = useState("");
    console.log(timeSlot);
    const [date, setDate] = useState("");

    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    useEffect(() => {

        const loadFacility = async () => {

            const data = await allFacilitiesDetails(allFacilitiesId);

            setFacility(data);
        };

        if (allFacilitiesId) {
            loadFacility();
        }

    }, [allFacilitiesId]);


    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            facilityId: facility?._id,
            facilityName: facility?.name,
            price: facility?.Price_Per_Hour,
            imageUrl: facility?.photo_URL,
            coundry: facility?.Location,
            facilityDate: formattedDate,
            timeSlot: timeSlot,
            time
        }

        const res = await fetch(`http://localhost:8000/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        });
        const data = await res.json();
        if(data.insertedId){
            redirect('/mybookings');
        }
        return data;
    }

    if (!facility) {
        return (
            <p className='text-center mt-10 text-xl'>
                Loading...
            </p>
        )
    }

    return (
        <div className="bg-white pb-5 px-5 sm:px-0 max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
                <Image
                    width={500}
                    height={400}
                    src={facility.photo_URL}
                    alt={facility.name}
                    className='rounded-xl w-full'
                />

                <div className='px-5 mt-10'>

                    <h1 className="font-bold mt-3 text-2xl text-gray-800">
                        {facility.name}
                    </h1>

                    <div className='grid grid-cols-2 gap-3 items-center'>
                        <p className="text-gray-500 flex gap-1 items-center my-2 font-semibold bg-gray-100 px-8 py-5 rounded-lg">
                            <LuMapPin className='text-lg text-green-400' />
                            {facility.Location}
                        </p>

                        <p className="text-gray-500 flex gap-1 items-center my-2 font-semibold bg-gray-100 px-8 py-5 rounded-lg">
                            <span className='text-lg font-semibold'>
                                ${facility.Price_Per_Hour}
                            </span>
                            / hour
                        </p>
                    </div>

                    <p className='mt-3 bg-gray-100 px-3 py-5 rounded-lg text-gray-600 font-semibold'>
                        {facility.Description}
                    </p>

                </div>
            </div>

            <div className='border border-gray-200 rounded-xl px-10 py-5'>

                <h1 className='text-2xl font-bold text-gray-800'>
                    Book This Facility
                </h1>

                <div className='mt-5 py-5 rounded-xl'>
                    <h2 className='font-semibold text-gray-700'>Facility Name</h2>
                    <p className='border border-gray-300 px-3 mt-2 py-2 rounded-md font-semibold'>{facility.name}</p>
                </div>
                <div className=''>

                    <label className='text-gray-700 font-semibold'>
                        Booking Date
                    </label>

                    <input
                        type="date"
                        value={date}
                        // min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full mt-3"
                    />
                </div>
                {/* <div>
                    <label className='text-gray-700 font-semibold'>Booking Date</label>
                    <div>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full mt-3"
                        />
                    </div>
                </div> */}

                <div className='mt-3'>
                    <p className='text-gray-700 font-semibold'>Time Slot</p>
                    <label className="select w-full mt-2">
                        {/* <span className="label">Type</span> */}
                        <select
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                        >
                            <option value="">Select Time</option>
                            <option value="6AM-8AM">6AM-8AM</option>
                            <option value="8AM-10AM">8AM-10AM</option>
                            <option value="10AM-12AM">10AM-12AM</option>
                        </select>
                    </label>
                </div>

                <div className='mt-3'>
                    <p className='text-gray-700 font-semibold'>Hours</p>
                    <input onChange={(e) => setTime(e.target.value)} type="text" className='input w-full mt-2' required />
                </div>

                <div className='mt-5 bg-gray-100 py-5 rounded-xl px-3'>
                    <h2 className='text-lg font-semibold'>Total Price</h2>
                    <p className='text-green-600 font-semibold'>${facility.Price_Per_Hour}</p>
                </div>

                <Button onClick={handleBooking} className={'btn rounded-lg w-full bg-green-500 mt-5 text-lg font-semibold'}>Confirm Booking</Button>

            </div>

        </div>
    )
}

export default AllFacilitiesDetails;
'use client';
import { useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import { useState } from 'react';

const AddFacilityPage = () => {
    const { data } = useSession();
    const ownerEmail = data?.user.email;
    const [email, setEmail] = useState(ownerEmail)

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newFacilities = Object.fromEntries(formData.entries());
        // console.log(newFacilities);

        const facilitiesData = async () => {
            const res = await fetch(`http://localhost:8000/allfacilities`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newFacilities)
            });
            const data = await res.json();
            if (data.insertedId) {
                redirect('/allfacilities');
            }
            return data;
        }
        facilitiesData();
    }
    return (
        <div className='mt-2'>
            <div className="hero min-h-[80vh] flex justify-center items-center">
                <div className="card bg-base-100 w-full max-w-md shadow-2xl">
                    <div className="card-body">
                        <form action="" onSubmit={onSubmit}>
                            <h1 className='text-3xl font-bold text-center text-green-600 mb-5'>Add Facilities</h1>
                            {/* <SigninGoogle></SigninGoogle> */}
                            <fieldset className="fieldset flex flex-col gap-3 px-3">
                                <input type="text" name='name' className="input border border-gray-200" placeholder="Facility Name" required />

                                <input type="text" name='Facility_Type' className="input border border-gray-200" placeholder="Facility Type" required />

                                <input className='input border border-gray-200' type="text" name='photo_URL' placeholder='Enter Photo URL' required />

                                <div className='flex gap-3'>
                                    <input className='input border border-gray-200' type="text" name='Location' placeholder='Enter Location' required />

                                    <input className='input border border-gray-200' type="text" name='Price_Per_Hour' placeholder='Price Per Hour' required />
                                </div>

                                <div className='flex gap-3'>
                                    <input className='input border border-gray-200' type="text" name='Capacity' placeholder='Capacity' required />

                                    <input className='input border border-gray-200' type="text" name='Available_Time_Slots' placeholder='Available Time Slots' required />
                                </div>

                                <input value={email || ""} onChange={(e) => setEmail(e.target.value)} type="email" name='email' className="input border border-gray-200" placeholder="Owner Email" required />

                                <textarea className='input border border-gray-200' name="Description" rows={4} placeholder='Description..' required></textarea>


                                <Button type='submit' className="btn bg-green-400 rounded-lg w-full text-gray-800 mt-2 text-lg font-semibold">Add Facilities</Button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFacilityPage

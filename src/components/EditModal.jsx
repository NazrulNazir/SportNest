'use client'
import { modifyBooking } from '@/lib/data'
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react'
import { redirect } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { GrEdit } from 'react-icons/gr'

const EditModal = ({booking}) => {
    // const {email , _id, image} = booking;
    // console.log(facilityName);
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newData = Object.fromEntries(formData.entries());
        // console.log(data);
        // await modifyBooking(id)

        const res = await fetch(`http://localhost:8000/allfacilities/${booking._id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newData)
        });
        const data = await res.json();
        if(data.modifiedCount > 0){
            toast.success("Edit Successfully");
        }else{
            alert('something wrong..');
            redirect('/managemyfacilities')
        }
        console.log('After edit data..',data)
        

    }
    return (
        <div>
            <Modal>
                <Button variant="secondary"><GrEdit /> <span className="text-[16px]">Edit</span></Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form action="" onSubmit={onSubmit}>
                                        {/* <h1 className='text-3xl font-bold text-center text-green-600 mb-5'>update</h1> */}
                                        {/* <SigninGoogle></SigninGoogle> */}
                                        <fieldset className="fieldset flex flex-col gap-3 px-3">
                                            <input  defaultValue={booking.name} type="text" name='name' className="input border border-gray-200" placeholder="Facility Name" required />

                                            <input type="text" defaultValue={booking.Facility_Type} name='Facility_Type' className="input border border-gray-200" placeholder="Facility Type" required />

                                            <input defaultValue={booking.photo_URL} className='input border border-gray-200' type="text" name='photo_URL' placeholder='Enter Photo URL' required />

                                            <div className='flex gap-3'>
                                                <input defaultValue={booking.Location} className='input border border-gray-200' type="text" name='Location' placeholder='Enter Location' required />

                                                <input defaultValue={booking.Price_Per_Hour} className='input border border-gray-200' type="text" name='Price_Per_Hour' placeholder='Price Per Hour' required />
                                            </div>

                                            <div className='flex gap-3'>
                                                <input defaultValue={booking.Capacity} className='input border border-gray-200' type="text" name='Capacity' placeholder='Capacity' required />

                                                <input defaultValue={booking.Available_Time_Slots} className='input border border-gray-200' type="text" name='Available_Time_Slots' placeholder='Available Time Slots' required />
                                            </div>

                                            <textarea defaultValue={booking.Description} className="w-80 h-25 resize-none border rounded-lg p-3 border-gray-200" name="Description" rows={6} placeholder='Description..' required></textarea>
                                        </fieldset>
                                        <Modal.Footer className='mt-5'>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type='submit' slot="close">Update</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    )
}

export default EditModal

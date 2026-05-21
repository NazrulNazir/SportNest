'use client'
import { bookingCancel } from '@/lib/data';
import { Button } from '@heroui/react'


const Cancel = ({  booking }) => {
    // Cancel booking
    const onDelete = async (userId) => {
        await bookingCancel(userId);

    }
    return (
        <div>
            <Button onClick={() => onDelete(booking._id)} className={'text-lg font-semibold text-red-500 bg-gray-200 w-full sm:w-25'}>Cancel</Button>

        </div>
    )
}

export default Cancel

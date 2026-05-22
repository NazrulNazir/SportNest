'use client'

import { bookingCancel } from '@/lib/data';
import { Button } from '@heroui/react';
import toast from 'react-hot-toast';

const Cancel = ({ booking }) => {

    const onDelete = async (userId) => {

        const toastId = toast.loading('Cancelling...');

        try {
            const result = await bookingCancel(userId);
            if (result.success) {
                toast.success(result.message, {
                    id: toastId,
                });
            } else {
                toast.error(result.message, {
                    id: toastId,
                });
            }
        } catch (error) {
            toast.error('Something went wrong', {
                id: toastId,
            });
        }
    };

    return (
        <div>
            <Button
                onClick={() => onDelete(booking._id)}
                className={
                    'text-lg font-semibold text-red-500 bg-gray-200 w-full sm:w-25'
                }
            >
                Cancel
            </Button>
        </div>
    );
};

export default Cancel;
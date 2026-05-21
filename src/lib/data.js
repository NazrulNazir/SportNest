'use server'

import { revalidatePath } from "next/cache";

export const getFeaturedFacilities = async () => {
        const res = await fetch('http://localhost:8000/FeaturedFacilities');
        const data = await res.json();
        return data;
}

export const getAllFacilities = async ()=> {
        const res = await fetch(`http://localhost:8000/allfacilities`);
        const data = await res.json();
        return data;
}

// Details Page
export const allFacilitiesDetails = async (id)=> {
        const res = await fetch(`http://localhost:8000/allfacilities/${id}`);
        const data = await res.json();
        return data;
}

// my booking
export const getMybooking = async (id) => {

    const res = await fetch(`http://localhost:8000/booking/${id}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch bookings");
    }

    const data = await res.json();
    return data;
}


// Booking Cancel
export const bookingCancel = async (userId) => {
    const res = await fetch(`http://localhost:8000/booking/${userId}`, {
        method: 'DELETE',
        headers: {
            'content-type' : 'application/json',
        }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch bookings");
    }

    const data = await res.json();
    if(data.deletedCount > 0) {
        revalidatePath('/mybookings')
    }
    return data;
}
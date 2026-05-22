'use server'

import { revalidatePath } from "next/cache";

export const getFeaturedFacilities = async () => {
    const res = await fetch('http://localhost:8000/FeaturedFacilities');
    const data = await res.json();
    return data;
}

// `http://localhost:5000/facilities?search=${searchText}&sport=${sportType}`
export const getAllFacilities = async (searchText, sportType) => {
    const res = await fetch(`http://localhost:8000/allfacilities?search=${searchText}&sport=${sportType}`);
    const data = await res.json();
    return data;
}

// Details Page
export const allFacilitiesDetails = async (id) => {
    const res = await fetch(`http://localhost:8000/allfacilities/${id}`);
    const data = await res.json();
    return data;
}




// Booking Cancel
export const bookingCancel = async (userId) => {
    const res = await fetch(`http://localhost:8000/booking/${userId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    });

    const data = await res.json();
    if (data.deletedCount > 0) {
        revalidatePath('/mybookings')
    }
    return data;
}

// my booking
export const getMybooking = async (email) => {
    // http://localhost:8000/manageFacilities/nazrul@islam.com

    const res = await fetch(`http://localhost:8000/manageFacilities/${email}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch bookings");
    }

    const data = await res.json();
    return data;
}



// Booking Delete
export const bookingDElete = async (bookingID) => {
    const res = await fetch(`http://localhost:8000/manageFacilities/${bookingID}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    });

    const data = await res.json();
    if (data.deletedCount > 0) {
        revalidatePath('/managemyfacilities')
    }
    return data;
}

export const getMybook = async (userId) => {
    // http://localhost:8000/manageFacilities/nazrul@islam.com

    const res = await fetch(`http://localhost:8000/booking/${userId}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch bookings");
    }

    const data = await res.json();
    return data;
}

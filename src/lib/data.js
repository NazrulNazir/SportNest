'use server'

import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { headers } from "next/headers";

const BASE_URL = 'http://localhost:8000';

// Featured Facilities
export const getFeaturedFacilities = async () => {

    const res = await fetch(`${BASE_URL}/FeaturedFacilities`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch featured facilities');
    }

    return res.json();
};


// All Facilities with Search + Filter
export const getAllFacilities = async (
    searchText = '',
    sportType = ''
) => {

    const res = await fetch(
        `${BASE_URL}/allfacilities?search=${searchText}&sport=${sportType}`,
        {
            cache: 'no-store'
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch facilities');
    }

    return res.json();
};


// Facility Details private
export const allFacilitiesDetails = async (id) => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    })
    console.log(token);
    const res = await fetch(`${BASE_URL}/allfacilities/${id}`, {
        cache: 'no-store',
        headers: {
            authorization: `Bearer ${token}`
        }

    });

    if (!res.ok) {
        throw new Error('Failed to fetch facility details');
    }

    return res.json();
};


// Cancel Booking
export const bookingCancel = async (userId) => {

    const res = await fetch(`${BASE_URL}/booking/${userId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
        revalidatePath('/mybookings');
    }

    return data;
};


// My Facilities
export const getMybooking = async (email) => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    })

    const res = await fetch(
        `${BASE_URL}/manageFacilities/${email}`,
        {
            cache: 'no-store',
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch facilities');
    }

    return res.json();
};


// Delete Facility
export const bookingDElete = async (bookingID) => {

    const res = await fetch(
        `${BASE_URL}/manageFacilities/${bookingID}`,
        {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
        revalidatePath('/managemyfacilities');
    }

    return data;
};


// My Bookings
export const getMybook = async (userId) => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    })

    const res = await fetch(
        `${BASE_URL}/booking/${userId}`,
        {
            cache: 'no-store',
             headers: {
                authorization: `Bearer ${token}`
            }
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch bookings');
    }

    return res.json();
};


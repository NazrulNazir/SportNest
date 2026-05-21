import Link from 'next/link'
import React from 'react'

const BookingEmpty = () => {
    return (
        <div>
            {
                bookings.length === 0 && (

                    <div className="min-h-[70vh] flex items-center justify-center px-4">

                        <div className="max-w-md w-full bg-white border border-gray-200 rounded-3xl shadow-xl p-10 text-center">

                            <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 text-green-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        d="M9 17V7m6 10V7m-9 0h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z"
                                    />
                                </svg>

                            </div>

                            <h1 className="text-3xl font-bold text-gray-800 mt-6">
                                No Bookings Yet
                            </h1>

                            <p className="text-gray-500 mt-3 leading-relaxed">
                                You haven’t booked any sports facility yet.
                                Start exploring and reserve your favorite court today.
                            </p>

                            <Link
                                href="/allfacilities"
                                className="inline-block mt-8 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl text-white font-semibold"
                            >
                                Explore Facilities
                            </Link>

                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default BookingEmpty

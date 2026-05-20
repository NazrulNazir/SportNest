'use client'
import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-[#0B1120]/80 backdrop-blur-xl">
      <header className="flex h-16 items-center justify-between w-7xl mx-auto text-white">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="text-2xl font-bold">Sport<span className="text-green-400">Nest</span></div>
        </div>
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="allfacilities">All Facilities</Link>
          </li>
          <li>
            <Link href="mybookings">My Bookings</Link>
          </li>
          <li>
            <Link href="addfacility">Add Facility</Link>
          </li>
          <li>
            <Link href="managemyfacilities">Manage My Facilities</Link>
          </li>
        </ul>
        <div>
          <Link href={'/login'}>
              <Button className={'btn bg-green-600 rounded-md font-semibold'}>Login</Button>
          </Link>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="#" className="block py-2">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

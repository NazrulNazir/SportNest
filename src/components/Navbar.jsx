'use client'

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {

  const { data } = useSession();
  const user = data?.user;

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { label: "Home", href: "/" },
    { label: "All Facilities", href: "/allfacilities" },
    { label: "My Bookings", href: "/mybookings" },
    { label: "Add Facility", href: "/addfacility" },
    { label: "Manage My Facilities", href: "/managemyfacilities" },
  ];

  const items = tabs.map((item) => {
    const isActive = pathname === item.href;

    return (
      <li key={item.label}>
        <Link href={item.href}>
          <motion.div
            className={`relative px-3 py-1 cursor-pointer transition ${isActive ? "text-green-400" : "text-white"
              }`}
            whileHover={{ y: -2 }}
          >
            {item.label}

            {isActive && (
              <motion.div
                layoutId="underline"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute left-0 right-0 -bottom-1 h-0.5 bg-green-400"
              />
            )}
          </motion.div>
        </Link>
      </li>
    );
  });

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-[#0B1120]/80 backdrop-blur-xl">

      <header className="flex h-16 items-center justify-between max-w-7xl mx-auto px-4 text-white">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
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

          {/* Logo */}
          <div className="text-2xl font-bold">
            Sport<span className="text-green-400">Nest</span>
          </div>
        </div>

        {/* Middle */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-2 text-lg">
            {items}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-3">

          {user ? (
            <div className='flex gap-3 items-center'>

              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full overflow-hidden">
                  <Image
                    width={40}
                    height={40}
                    alt='user'
                    className="object-cover"
                    src={
                      user.image ||
                      'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                    }
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  signOut();
                  alert("log out successfully");
                }}
                className="btn btn-primary btn-sm md:btn-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              className='btn btn-primary btn-sm md:btn-md'
              href={'/login'}
            >
              Login
            </Link>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden bg-[#0B1120]">
          <ul className="flex flex-col gap-2 p-4">

            {tabs.map((item) => {

              const isActive = pathname === item.href;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-3 rounded-lg transition ${isActive
                        ? "bg-blue-500/20 text-blue-400"
                        : "text-white hover:bg-white/10"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
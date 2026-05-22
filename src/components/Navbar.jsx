'use client'

import { Button, Dropdown, Label } from "@heroui/react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const { data } = useSession();
  const user = data?.user;

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Public Routes
  const publicTabs = [
    { label: "Home", href: "/" },
    { label: "All Facilities", href: "/allfacilities" },
  ];

  // Private Routes
  const privateTabs = [
    { label: "My Bookings", href: "/mybookings" },
    { label: "Add Facility", href: "/addfacility" },
    { label: "Manage My Facilities", href: "/managemyfacilities" },
  ];

  // Final Tabs
  const tabs = user
    ? [...publicTabs, ...privateTabs]
    : publicTabs;

  // sign out

  const [selected, setSelected] = useState('');

  const handleChange = async (e) => {
    const value = e.target.value;

    setSelected(value);

    if (value === 'logout') {
      await signOut();
      toast.success("Logout Successful");
      router.push('/');
      return;
    }

    router.push(value);
  }
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-xl">

      <header className="flex h-16 items-center justify-between max-w-7xl mx-auto px-4 text-white">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
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
          <Link href="/">
            <h1 className="text-2xl font-bold flex items-center gap-1">
              <span className="text-green-400">
                <MdOutlineSportsSoccer />
              </span> Sport<span
                className="text-green-400">Nest</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-2 text-lg">

            {tabs.map((item) => {

              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className={`relative px-3 py-1 transition cursor-pointer ${isActive
                        ? "text-green-400"
                        : "text-white"
                        }`}
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
            })}

          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {user ? (
            <>
              {/* User Image */}
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <Image
                  width={40}
                  height={40}
                  alt="user"
                  className="w-full h-full object-cover"
                  src={
                    user.image ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>

              {/* Logout */}
              <div className="flex items-center gap-2">

                <label className="select rounded-xl text-black">
                  <select
                    onChange={handleChange}
                    defaultValue=""
                    
                  >
                    <option disabled value="">
                      {user?.email}
                    </option>

                    <option value="/mybookings">
                      My Bookings
                    </option>

                    <option value="/addfacility">
                      Add Facility
                    </option>

                    <option value="/managemyfacilities">
                      Manage My Facilities
                    </option>

                    <option 
                    value="logout"
                    className="text-red-500 text-lg font-semibold"
                    >
                      Logout
                    </option>
                  </select>
                </label>
              </div>
            </>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition text-white text-sm md:text-base"
            >
              Login
            </Link>
          )}

        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0B1120]">

          <ul className="flex flex-col gap-2 p-4">

            {tabs.map((item) => {

              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-3 rounded-lg transition ${isActive
                      ? "bg-green-500/20 text-green-400"
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
  );
};

export default Navbar;
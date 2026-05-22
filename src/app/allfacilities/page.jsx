'use client'

import FilterFacilitiesData from '@/components/FilterFacilitiesData';
import SearchFacilities from '@/components/SearchFacilities';
import { getAllFacilities } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const AllFacilitiesPage = () => {

  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState('');
  const [sport, setSport] = useState('');

  useEffect(() => {

    const loadData = async () => {
      const facilities = await getAllFacilities();
      setAllData(facilities);
    };

    loadData();

  }, []);

  // Search + Filter
  const filteredFacilities = allData.filter(facility => {

    const matchSearch = facility.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchSport =
      sport === ''
        ? true
        : facility.Facility_Type === sport;

    return matchSearch && matchSport;
  });

  return (
    <div className='max-w-7xl mx-auto my-8'>

      {/* Search + Filter */}
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-8 items-center'>

        <SearchFacilities setSearch={setSearch} />

        <FilterFacilitiesData setSport={setSport} />

      </div>

      {/* Cards */}
      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-15 px-5 sm:px-0'>

        {
          filteredFacilities.map(facility => (

            <div key={facility._id}>

              <div className='border border-gray-300 rounded-xl bg-white pb-5'>

                <Image
                  width={400}
                  height={400}
                  src={facility.photo_URL}
                  alt={facility.name}
                  className='w-full h-60 object-cover rounded-t-lg'
                />

                <div className='px-5 mt-10'>

                  <h1 className='font-bold mt-3 text-2xl text-gray-800'>
                    {facility.name}
                  </h1>

                  <p className='text-gray-500 flex gap-1 items-center my-2 font-semibold'>
                    <LuMapPin className='text-lg text-green-400 font-bold' />
                    {facility.Location}
                  </p>

                  <div className='flex justify-between items-center text-gray-700'>

                    <p>
                      <span className='text-lg font-semibold'>
                        ${facility.Price_Per_Hour}
                      </span>
                      / hour
                    </p>

                    <p className='text-lg font-bold flex gap-2 items-center'>
                      <FaStar className='text-yellow-400' />
                      4.8
                    </p>

                  </div>

                  <Link href={`/allfacilities/${facility._id}`}>
                    <Button className='btn rounded-lg w-full mt-5 bg-green-500'>
                      Book Now
                    </Button>
                  </Link>

                </div>

              </div>

            </div>
          ))
        }

      </div>
    </div>
  );
};

export default AllFacilitiesPage;
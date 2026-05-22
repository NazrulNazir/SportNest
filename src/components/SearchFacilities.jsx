'use client'

import { Label, SearchField } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchFacilities = ({setSearch}) => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    router.push(`/allfacilities?${params.toString()}`);
  };

  return (
    <div className='max-w-80'>

      <SearchField>
        <Label>Search</Label>

        <SearchField.Group className='border border-gray-300 rounded-lg'>
          <SearchField.SearchIcon />

          <SearchField.Input
            placeholder='Search facilities...'
            onChange={(e)=> setSearch(e.target.value)}
          />

          <SearchField.ClearButton />
        </SearchField.Group>

      </SearchField>

    </div>
  );
};

export default SearchFacilities;
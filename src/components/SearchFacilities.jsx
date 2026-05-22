'use client'
import { Label, SearchField } from '@heroui/react'
import React from 'react'

const SearchFacilities = () => {
  return (
    <div className='max-w-80'>
      <SearchField name="search" render={(props) => <div {...props} data-custom="foo" />}>
          <Label>Search</Label>
          <SearchField.Group className={'border border-gray-300'}>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-70" placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
    </div>
  )
}

export default SearchFacilities

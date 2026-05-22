import React from 'react'

const FilterFacilitiesData = () => {
    return (
        <div className='flex flex-col gap-1'>
            <p className="label">Type</p>
            <label className="select rounded-xl">
                <select className='w-80'>
                    <option value={''}>All</option>
                    <option>Football</option>
                    <option>Cricket</option>
                    <option>Badminton</option>
                    <option>Tennis</option>
                    <option>Basketball</option>
                </select>
            </label>
        </div>
    )
}

export default FilterFacilitiesData

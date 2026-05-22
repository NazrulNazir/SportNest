'use client'

const FilterFacilitiesData = ({ setSport }) => {

  return (
    <div className='flex flex-col gap-1'>

      <p className="label">Type</p>

      <label className="select rounded-xl">

        <select
          className='w-80'
          onChange={(e) => setSport(e.target.value)}
        >

          <option value="">All</option>

          <option value="Football">
            Football
          </option>

          <option value="Cricket">
            Cricket
          </option>

          <option value="Badminton">
            Badminton
          </option>

          <option value="Tennis">
            Tennis
          </option>

          <option value="Basketball">
            Basketball
          </option>

        </select>

      </label>

    </div>
  );
};

export default FilterFacilitiesData;
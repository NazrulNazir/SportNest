import { getFeaturedFacilities } from "@/lib/data"
import Feature from "./Feature";

const FeaturedFacilities = async () => {
  const features = await getFeaturedFacilities();
  console.log('Featured data', features)
  return (
    <>
      <div className="bg-[#E5E4E2] py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-0">
          <h1 className="text-4xl font-bold mb-5 text-gray-800">Featured Facilities</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          features.map(feature => <Feature feature = {feature} key={feature._id}></Feature>)
        }
      </div>
     </div>
      </div>
    </>
  )
}

export default FeaturedFacilities

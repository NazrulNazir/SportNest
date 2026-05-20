import BannerSections from "@/components/BannerSections";
import FeaturedFacilities from "@/components/FeaturedFacilities";

export default function Home() {
  return (
    <div>
      <BannerSections></BannerSections>
      {/* <div className="relative">
      <Image width={600} height={600} src = {'/assets/Banner.png'} alt="Banner Image"></Image>
      </div> */}
      <FeaturedFacilities></FeaturedFacilities>
    </div>
  );
}


import { Button, Separator } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const BannerSections = () => {
    return (
        <div className="relative">
            <div className="bg-[url('/assets/Banner.png')]  bg-cover bg-center text-white  flex justify-between flex-col items-center  gap-5 h-150">
                <div className="w-7xl mx-auto text-center flex flex-col justify-center items-start gap-2 flex-1 z-10">
                    <h1 className="text-5xl font-bold">Every Moment</h1>
                    <h1 className="text-5xl font-bold"><span className="text-green-500">Builds Future</span> Sports</h1>
                    <h1 className="text-5xl font-bold">Champions</h1>
                    <p className="max-w-sm text-center sm:text-start mt-4 text-neutral-300">We empower athletes through discipline, passion, and ellite training ot become confident leadres on global stages worldwide.</p>
                    <Button className={'btn rounded-md bg-green-600 text-lg flex gap-3 items-center mt-5 py-5'}>Explore Facilities <FaArrowRightLong /></Button>
                </div>

                <div className=" bg-[#0B1120]/60 flex justify-between gap-5 w-full items-center z-10 px-10 py-6">
                    <div className="px-3">
                        <h3 className="text-sm font-bold">Wide Range</h3>
                        <p className="text-xs">Multiple sports facilities</p>
                    </div>

                    <Separator variant="tertiary" orientation="vertical" />

                    <div>
                        <h3 className="text-sm font-bold">Easy Booking</h3>
                        <p className="text-xs">Book in just a few clicks</p>
                    </div>

                    <Separator variant="tertiary" orientation="vertical" />

                    <div>
                        <h3 className="text-sm font-bold">Secure Payment</h3>
                        <p className="text-xs">Safe an secure payments</p>
                    </div>

                    <Separator variant="tertiary" orientation="vertical" />

                    <div>
                        <h3 className="text-sm font-bold">24/7 Support</h3>
                        <p className="text-xs">We are here to help</p>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
    );
};

export default BannerSections

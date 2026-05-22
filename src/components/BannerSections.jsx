import { Button, Separator } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

const BannerSections = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="bg-[url('/assets/Banner.png')] bg-cover bg-center text-white flex justify-between flex-col items-center gap-5 min-h-screen relative">

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                {/* Content */}
                <div className="max-w-7xl w-full mx-auto flex flex-col justify-center items-start gap-2 flex-1 z-10 px-5">
                    <h1 className="text-3xl sm:text-5xl font-bold">
                        Every Moment
                    </h1>

                    <h1 className="text-3xl sm:text-5xl font-bold">
                        <span className="text-green-500">Builds Future</span> Sports
                    </h1>

                    <h1 className="text-3xl sm:text-5xl font-bold">
                        Champions
                    </h1>

                    <p className="max-w-sm text-start mt-4 text-neutral-300">
                        We empower athletes through discipline, passion, and elite
                        training to become confident leaders on global stages worldwide.
                    </p>

                    <Button className="rounded-md bg-green-600 text-lg flex gap-3 items-center mt-5 py-5">
                        Explore Facilities <FaArrowRightLong />
                    </Button>
                </div>

                {/* Bottom Stats */}
                <div className="bg-[#0B1120]/60 flex flex-wrap justify-center sm:justify-between gap-10 sm:gap-5 w-full items-center z-10 px-6 py-6">

                    <div className="px-3">
                        <h3 className="text-sm font-bold">Wide Range</h3>
                        <p className="text-xs">Multiple sports facilities</p>
                    </div>

                    <Separator className="hidden sm:block h-10" orientation="vertical" />

                    <div>
                        <h3 className="text-sm font-bold">Easy Booking</h3>
                        <p className="text-xs">Book in just a few clicks</p>
                    </div>

                    <Separator className="hidden sm:block h-10" orientation="vertical" />

                    <div>
                        <h3 className="text-sm font-bold">Secure Payment</h3>
                        <p className="text-xs">Safe and secure payments</p>
                    </div>

                    <Separator className="hidden sm:block h-10" orientation="vertical" />

                    <div>
                        <h3 className="text-sm font-bold">24/7 Support</h3>
                        <p className="text-xs">We are here to help</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSections;
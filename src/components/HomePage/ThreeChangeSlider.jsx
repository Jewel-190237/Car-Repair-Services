'use client'
import React, { useState } from "react";

const ThreeChangeSlider = () => {
    const banners = [
        {
            title: "Affordable Price For Car Servicing 1",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
        {
            title: "Affordable Price For Car Servicing 1",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
        {
            title: "Affordable Price For Car Servicing 1",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
        {
            title: "Affordable Price For Car Servicing 2",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
        {
            title: "Affordable Price For Car Servicing 3",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
        {
            title: "Affordable Price For Car Servicing 4",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
        {
            title: "Affordable Price For Car Servicing 5",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
        {
            title: "Affordable Price For Car Servicing 6",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
    ];

    const [activeSlide, setActiveSlide] = useState(0);

    // Handles the next slide logic
    const handleNext = () => {
        setActiveSlide((prevSlide) =>
            prevSlide === Math.ceil(banners.length / 3) - 1 ? 0 : prevSlide + 1
        );
    };

    // Handles the previous slide logic
    const handlePrev = () => {
        setActiveSlide((prevSlide) =>
            prevSlide === 0 ? Math.ceil(banners.length / 3) - 1 : prevSlide - 1
        );
    };

    return (
        <div className="w-full overflow-hidden my-40">
            <div
                className="flex transition-transform duration-700 gap-5"
                style={{ transform: `translateX(-${activeSlide * (100 / 3)}%) `}} // Move by 33.33% of the container
            >
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url('assets/images/banner/${index + 1}.jpg')`,
                        }}
                        className="w-[32%] flex items-center h-[40vh] bg-top bg-no-repeat bg-cover flex-shrink-0"
                    >
                        <div className="flex flex-col justify-center space-y-10 ml-5 ">
                            <h1 className="text-white text-2xl w-full font-extrabold lato">
                                {banner.title}
                            </h1>
                            <p className="text-white w-full lato">
                                {banner.description}
                            </p>
                            <div className="flex gap-5">
                                <button className="lato bg-[#FF3811] border border-[#FF3811] text-xl text-white rounded-lg px-6 py-3 font-bold transition-transform duration-300 hover:scale-105">
                                     More
                                </button>
                                <button className="lato border border-white text-xl text-white rounded-lg px-6 py-3 font-bold transition-transform duration-300 hover:bg-[#FF3811] hover:scale-105">
                                    Project
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 p-5">
                <button
                    onClick={handlePrev}
                    className="bg-transparent border-2 border-[#FF3811] px-5 py-3 text-[#FF3811] rounded-full p-2 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❮
                </button>
                <button
                    onClick={handleNext}
                    className="bg-[#FF3811] text-white rounded-full px-5 py-3 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};




export default ThreeChangeSlider;
import Image from "next/image";
import React from "react";

const Banner = () => {

    const banners = [
        {
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide2',
            prev: '#slide4'
        },
        {
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide3',
            prev: '#slide1'
        },
        {
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide4',
            prev: '#slide2'
        },
        {
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide1',
            prev: '#slide3'
        },

    ]

    return (
        <div className="carousel w-full">
            {
                banners.map((banner, index) => (
                    <div
                        style={{
                            backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url('/assets/images/banner/${index + 1}.jpg')`
                        }}
                        key={index}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full bg-top bg-no-repeat h-[90vh] rounded-lg"
                    >
                        <div className="flex flex-col justify-center">
                            <h1 className="text-white text-6xl">{banner.title}</h1>
                            <p className="text-white"> {banner.description}</p>
                            <div className="flex gap-5">
                                <button className="lato bg-white lato hover:bg-[#FF3811] border border-[#FF3811] text-xl text-[#FF3811] hover:text-white rounded-lg px-6 py-3">Discover More </button>
                                <button className="lato bg-white lato hover:bg-[#FF3811] border border-[#FF3811] text-xl text-[#FF3811] hover:text-white rounded-lg px-6 py-3">Latest Project</button>

                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={banner.prev} className="btn btn-circle">❮</a>
                            <a href={banner.next} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Banner;
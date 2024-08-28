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
                        style={{ backgroundImage: `url('/assets/images/banner/${index+1}.jpg')` }}
                        key={index}
                        id={`slide${index+1}`}
                        className="carousel-item relative w-full h-screen"
                    >
                        <div className="">

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
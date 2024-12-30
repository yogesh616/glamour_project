import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Track() {
    const slides = [
        {
            name: 'Meghasmita Asapu (Age - 37)',
            address: 'Bangalore, Karnataka, India',
            image: 'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/meghasmita-1.jpg',
            text: '<p>Since The International Glamour Project<sup>®️</sup> is not my 1st attempt at pageantry, I can confidently say that this platform stands apart from the rest. As a team, this platform is extremely transparent in communication and also equally approachable. A special mention to Dr. Akshata Prabhu who has valuable experience in pageantry and an excellent network.</p>'
        },
        {
            name: 'Rashna Karai (Age - 25)',
            address: 'Mumbai, Maharashtra, India',
            image: 'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/rashna-1.jpg',
            text: '<p>From inspiring lectures with amazing mentors to constant guidance, are just some of the ways they keep us focused on our goals. I’m extremely thankful for all the brand endorsement opportunities they’ve helped us with. I personally want to thank Dr. Akshata Prabhu, Alesia Raut, Dr. Aditi Govitrikar, Jillian Spano, and all the other mentors who have taken their time out and coached us so beautifully.</p>'
        },
        {
            name: 'Uttara Iyer (Age - 16)',
            address: 'Mumbai, Maharashtra, India',
            image: 'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/uttara-thumb-1.jpg',
            text: '<p>As a confident teenager, I set foot in the world of pageantry with The International Glamour Project<sup>®️</sup>. I truly believe that I am a dreamer, believer, and next-gen leader who has the zest and commitment to make a difference, but without The International Glamour Project<sup>®️</sup> and their support, I would never have discovered this side of myself. It has been a really wonderful journey.</p>'
        },
        {
            name: 'Diya Merchant (Age - 16)',
            address: 'Mumbai, Maharashtra, India',
            image: 'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/diya-merchant-thumb.jpg',
            text: '<p>Being a participant of The International Glamour Project<sup>®️</sup> has not only boosted my confidence but has also given me a new goal and opportunity at a very young age. Learning so much from the Mentors in every session has already enriched my life. I am proud to be associated with this wonderful pageant.</p>'
        },
    ];

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-4xl text-center mx-auto flex items-center justify-center">
                <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
                    {slides.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center border rounded-lg p-6 shadow-lg"
                        >
                            <img
                                src={item.image}
                                alt={`Slide ${index + 1}`}
                                className="rounded-full border-2 border-gray-300 mb-4"
                                style={{ width: "70px", height: "70px" }}
                            />
                            <h1 className="font-bold text-lg mb-2">{item.name}</h1>
                            <h3 className="text-sm text-gray-600 mb-4">{item.address}</h3>
                            <div
                                className="text-sm text-gray-800"
                                dangerouslySetInnerHTML={{ __html: item.text }}
                            ></div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Track;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Track() {
    const slides = [
        {
            name: 'Meghasmita Asapu (Age - 37)',
            address: 'Bangalore, Karnataka, India',
            image: 'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/meghasmita-1.jpg',
            text: '<p>Since The Glam Talent is not my 1st attempt at pageantry, I can confidently say that this platform stands apart from the rest. As a team, this platform is extremely transparent in communication and also equally approachable. A special mention to Dr. Akshata Prabhu who has valuable experience in pageantry and an excellent network.</p>'
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
            text: '<p>As a confident teenager, I set foot in the world of pageantry with The Glam Talent. I truly believe that I am a dreamer, believer, and next-gen leader who has the zest and commitment to make a difference, but without The Glam Talent and their support, I would never have discovered this side of myself. It has been a really wonderful journey.</p>'
        },
        {
            name: 'Diya Merchant (Age - 16)',
            address: 'Mumbai, Maharashtra, India',
            image: 'https://theinternationalglamourproject.com/wp-content/uploads/2022/10/diya-merchant-thumb.jpg',
            text: '<p>Being a participant of The  Glam Talent has not only boosted my confidence but has also given me a new goal and opportunity at a very young age. Learning so much from the Mentors in every session has already enriched my life. I am proud to be associated with this wonderful pageant.</p>'
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    };

    return (
        <div className="w-full flex items-center justify-center p-4">
            <div className="w-full max-w-md min-h-28">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className=" flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg ">
                            <h3 className="text-2xl font-extrabold mb-2 opensans" style={{fontWeight: '800'}}>{slide.name}</h3>
                            <p className="text-gray-500 mb-4 poppins">{slide.address}</p>
                            <div className="w-24 h-24 mb-4 text-center mx-auto ">
                                <img
                                    className="rounded-full w-full h-full object-cover"
                                    src={slide.image}
                                    alt={slide.name}
                                    loading="lazy"
                                />
                            </div>
                            <p
                                className="text-gray-700 poppins"
                                dangerouslySetInnerHTML={{ __html: slide.text }}
                            ></p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Track;

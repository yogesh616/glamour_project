import React from 'react'
import Carousel from './Carousel'
import Desription from './Desription'
import BeautyQueens from './BeautyQueens'
import Track from './Track'
import WhatWeOffer from './WhatWeOffer'
import FashionWeek from './FashionWeek'
import BrandEndorsements from './BrandEndorsements'
import WebSeries from './WebSeries'
import LeaderShip from './LeaderShip'
function Main() {
    const divImages = [
        'https://theinternationalglamourproject.com/wp-content/uploads/2022/11/banner-logo-4.png',
        'https://theinternationalglamourproject.com/wp-content/uploads/2022/11/banner-logo-3.png',
        'https://theinternationalglamourproject.com/wp-content/uploads/2022/11/banner-logo-2.png',
        'https://theinternationalglamourproject.com/wp-content/uploads/2022/11/banner-logo-1.png'

    ]
  return (
    <div>
      <Carousel />
      <div
  style={{ background: '#515151' }}
  className="w-full h-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4"
>
  {divImages.map((image, index) => (
    <div
      key={index}
      className="flex justify-center items-center px-4"
    >
      <img className="w-48 h-32" src={image} alt="Logo" />
    </div>
  ))}
</div>

      <Desription />
      <BeautyQueens />
      <Track />
      <WhatWeOffer />
      <FashionWeek />
      <BrandEndorsements />
      <WebSeries />
      <LeaderShip />
    </div>
  )
} 

export default Main

import React from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/avatar.jpg';
import AVTR2 from '../../assets/avatar.jpg';
import AVTR3 from '../../assets/maro_logo.png';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    name: 'Sukh',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veniam architecto animi commodi delectus reprehenderit cumque praesentium, culpa, pariatur autem deserunt voluptates doloremque maxime veritatis voluptatem libero? Non, maxime repudiandae!'
  },
  {
    avatar:AVTR2,
    name: 'Superva',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veniam architecto animi commodi delectus reprehenderit cumque praesentium, culpa, pariatur autem deserunt voluptates doloremque maxime veritatis voluptatem libero? Non, maxime repudiandae!'
  },
  {
    avatar:AVTR3,
    name: 'Maropost',
    review: 'During her stay with us, we found her intellectual, hard worker, and keen in her work. We wish her all the success in her future endeavors.'
  }
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews About me</h5>
      <h2>Testimonials</h2>

      <Swiper // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="container testimonials__container">
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One"/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials

import React from 'react'
import { PageHeading } from '../components/PageHeading'
import { Carousel } from '../components/Carousel'
import { CarouselItem } from '../components/CarouselItem'
import { InfoSlide } from '../components/InfoSlide'
import pride from "../resources/images/pride.jpeg";

export const Home = () => {
  return <>
    <PageHeading title='Home'/>
    <Carousel>
      <CarouselItem>
        <InfoSlide title='Our mission' alignment='right' imageSrc={pride}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut atque, sint consequuntur alias neque ea eius perspiciatis quaerat. Inventore eum quisquam dolorum. Inventore sed sit dolore enim fuga, hic, soluta eos veritatis laborum nobis ratione consequuntur modi doloribus provident harum similique est. Vel, quae culpa! Vel quos tempore necessitatibus beatae.</p>
        </InfoSlide>
      </CarouselItem>
      <CarouselItem>
      <InfoSlide title='Links to useful policy' alignment='left' imageSrc={pride}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam laboriosam fuga corrupti distinctio ex, earum iure veniam ea unde.</p>
      </InfoSlide>
      </CarouselItem>
      <CarouselItem>
        <div className='blue'>Item three</div>
      </CarouselItem>
    </Carousel>
  </>
}

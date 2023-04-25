import React from 'react'
import { PageHeading } from '../components/PageHeading'
import { Carousel } from '../components/Carousel'
import { CarouselItem } from '../components/CarouselItem'

export const Home = () => {
  return <>
    <PageHeading title='Home'/>
    <Carousel>
      <CarouselItem>
        <div className='red'>Item one</div>
      </CarouselItem>
      <CarouselItem>
        <div className='green'>Item two</div>
      </CarouselItem>
      <CarouselItem>
        <div className='blue'>Item three</div>
      </CarouselItem>
    </Carousel>
  </>
}

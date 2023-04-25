import React from "react";
import { PageHeading } from "../components/PageHeading";
import { Carousel } from "../components/Carousel";
import { CarouselItem } from "../components/CarouselItem";
import { pageData } from "../data/home-page";
import { InfoSlide } from "../components/InfoSlide";

export const Home = () => {
  return (
    <>
      <PageHeading title="Home" />
      <Carousel>
        {pageData.map((page, i) => {
          return (
            <CarouselItem>
              <InfoSlide title={page.title} imageSrc={page.imageSrc} alignment={i % 2 == 0 ? 'left' : 'right'}>
                <p>{page.content}</p>
              </InfoSlide>
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
};

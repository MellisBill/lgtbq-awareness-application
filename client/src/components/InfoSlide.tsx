import React from "react";
import { InfoSlideProps } from "../types/types";

export const InfoSlide = (props: InfoSlideProps) => {
  const { title, alignment, imageSrc, children } = props;
  return (
    <>
      <div className={`info-slide info-slide-${alignment}`}>
        <img className="slide-image" src={imageSrc} />
        <div className="content">
          <h2>{title}</h2>
          {children}
        </div>
        <div className="cornerstone" />
      </div>
    </>
  );
};

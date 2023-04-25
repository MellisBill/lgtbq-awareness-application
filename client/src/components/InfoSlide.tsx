import React from "react";
import { InfoSlideProps } from "../types/types";
import { Link } from "react-router-dom";

export const InfoSlide = (props: InfoSlideProps) => {
  const { title, alignment, imageSrc, to, children } = props;
  return (
    <>
      <div className={`info-slide info-slide-${alignment}`}>
        <img className="slide-image" src={imageSrc} />
        <div className="content">
          <h2>{title}</h2>
          {children}
          {to !== '/' ?
            (<Link to={to}>
              <button>Try it!</button>
            </Link>) : <div/>}
        </div>
        <div className="cornerstone" />
      </div>
    </>
  );
};

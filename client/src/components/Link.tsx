import React from "react";
import { ExtLink } from "../types/types";

export const Link = (props: ExtLink) => {
  const { title, description, url } = props;
  return (
    <li>
      <h2>{title}</h2>
      <a href={url}>{url}</a>
      <p>{description}</p>
    </li>
  );
};

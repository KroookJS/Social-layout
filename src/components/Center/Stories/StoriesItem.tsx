import { FC } from "react";
import { StoriesItmeParams } from "../../../types/data-type";

export const StoriesItem: FC<StoriesItmeParams> = ({
  authorImg,
  imgUrl,
  name,
}) => {
  return (
    <div className="single-stories">
      <label>
        <img src={authorImg} alt="user" />
      </label>

      <div>
        <img src={imgUrl} alt="user" />
        <i className="fa-solid fa-circle-plus"></i>
        <b className="title-stories">{name}</b>
      </div>
    </div>
  );
};

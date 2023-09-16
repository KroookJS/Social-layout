import { FC } from "react";

interface AvatarParams {
  img?: string;
  border?: string;
}

export const Avatar: FC<AvatarParams> = ({ img, border }) => {
  return (
    <img
      className={border ? "avatarBorder" : ""}
      src={
        img
          ? img
          : "https://github.com/KroookJS/Social-layout/blob/main/src/assets/images/user.jpg"
      }
      alt="user"
    />
  );
};

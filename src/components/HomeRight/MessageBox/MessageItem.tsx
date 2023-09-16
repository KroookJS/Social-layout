import { FC } from "react";

interface MessageItemParams {
  name: string;
  isOnline: boolean;
  img?: string;
}

export const MessageItem: FC<MessageItemParams> = ({ name, isOnline, img }) => {
  return (
    <li>
      <img src={img ? img : "src/assets/images/us2.png"} alt="user" />
      <b>
        {name} <span>{isOnline ? "Online" : "Offline"}</span>
      </b>
      <i className="fa-brands fa-facebook-messenger"></i>
    </li>
  );
};

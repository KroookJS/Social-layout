import { messageData } from "../../../data/data-message";
import { MessageItem } from "./MessageItem";

export const MessageList = () => {
  return (
    <div className="messenger">
      <div className="messenger-search">
        <i className="fa-solid fa-user-group"></i>
        <h4>Мессенджер</h4>
        <input type="search" placeholder="Поиск" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <ul>
        {messageData.map((mess) => {
          return (
            <MessageItem
              key={mess.name}
              name={mess.name}
              isOnline={mess.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
};

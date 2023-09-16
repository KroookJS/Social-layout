import { EventsContainer } from "./Events/EventsContainer";
import { MessageList } from "./MessageBox/MessageList";
import { PopularGroups } from "./PopularGroups/PopularGroups";

export const HomeRight = () => {
  return (
    <div className="home-right">
      <div className="home-right-wrapper">
        <EventsContainer />
        <PopularGroups />
        <MessageList />
      </div>
    </div>
  );
};

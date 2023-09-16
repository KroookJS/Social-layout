import { RequestsFriend } from "../Frends/RequestsFriend";

export const EventsContainer = () => {
  return (
    <div className="event-friend">
      <div className="event">
        <h3 className="heading">
          Ближайшие события<span></span>
        </h3>
        <img
          src="https://www.computerra.ru/wp-content/uploads/2021/06/WWDC21.jpg"
          alt="event-img"
        />
        <div className="event-date">
          <h3>
            21 <b>сентября</b>
          </h3>
          <h4>
            Тверская 21<span> Москва </span>
          </h4>
        </div>
        <button>
          <i className="fa-regular fa-star"></i> Записаться
        </button>
      </div>

      <hr />

      <div className="friend">
        <h3 className="heading">
          Запросы в друзья 
        </h3>
        <ul className="requests-friend">
          <RequestsFriend />
        </ul>
      </div>
    </div>
  );
};

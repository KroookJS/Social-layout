import { BsInstagram, BsTelegram } from "react-icons/bs";
import { styleIcon } from "../../ui/IconStyles";
import { BtnNavBar } from "../ui/button/BtnNavBar";
import { FC } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Avatar } from "../ui/Avatar";

interface NavBarParams {
  isBurger?: boolean;
  setIsActiveburger: (e: boolean) => void;
}

export const NavBar: FC<NavBarParams> = ({ isBurger, setIsActiveburger }) => {
  return (
    <div className={isBurger ? "home-left--mobile" : "home-left"}>
      <div className="profile">
        <Avatar />
        <h3>Gamzat Gamzatov</h3>
        {isBurger && (
          <div>
            <AiOutlineCloseCircle
              onClick={() => setIsActiveburger(false)}
              style={{ color: "grey", fontSize: "20px" }}
            />
          </div>
        )}
      </div>

      <div className="pages">
        <h4 className="mini-headign">Pages</h4>
        <label className="labTest">
          <BsTelegram style={styleIcon} />
          <span>Telegram</span>
        </label>
        <label>
          <BsInstagram style={styleIcon} />
          <span>VK</span>
        </label>
        <button className="see-more-btn">
          Смотрите больше <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>

      <div className="group">
        <h4 className="mini-headign">Направления</h4>
        <label>
          <img
            src="https://raw.githubusercontent.com/KroookJS/Social-layout/main/src/assets/images/gg.png"
            alt="group01"
          />
          <span>Графический дизайн</span>
        </label>

        <label>
          <img
            src="https://raw.githubusercontent.com/KroookJS/Social-layout/main/src/assets/images/gg2.png"
            alt="group02"
          />
          <span>Веб дизайн</span>
        </label>

        <label>
          <img
            src="https://raw.githubusercontent.com/KroookJS/Social-layout/main/src/assets/images/gg3.png"
            alt="group03"
          />
          <span>Машинное обучение</span>
        </label>

        <BtnNavBar> Смотрите больше </BtnNavBar>
      </div>

      <div className="games">
        <h4 className="mini-headign">развивающие игры </h4>
        <label>
          <img
            src="https://raw.githubusercontent.com/KroookJS/Social-layout/main/src/assets/images/game.png"
            alt="game01"
          />
          <span>Kroook games</span>
        </label>
        <label>
          <img
            src="https://raw.githubusercontent.com/KroookJS/Social-layout/main/src/assets/images/game2.png"
            alt="game02"
          />
          <span>Free Play Games</span>
        </label>
        <BtnNavBar> Смотрите больше </BtnNavBar>
      </div>

      <div className="explore">
        <h4 className="mini-headign">Дополнительно</h4>

        <a>
          <i className="fa-solid fa-user-group"></i> Группы
        </a>
        <a href="#">
          <i className="fa-solid fa-star"></i> Понравившиеся
        </a>
        <a href="#">
          <i className="fa-solid fa-bookmark"></i> Сохраненные
        </a>
        <a href="#">
          <i className="fa-solid fa-clock"></i> Мероприятия
        </a>
        <a href="#">
          <i className="fa-solid fa-flag"></i> Поддержка
        </a>

        <div>
          <label className="darkTheme">
            {" "}
            <span></span>
          </label>
          Очень темная тема
        </div>
        <BtnNavBar> Смотрите больше </BtnNavBar>
      </div>
    </div>
  );
};

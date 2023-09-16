import { FC } from "react";
import { LogoSwg } from "../ui/LogoSwg";

import { PiHamburgerLight } from "react-icons/pi";
import { Avatar } from "../ui/Avatar";

interface HeaderParams {
  setIsActiveburger: (e: boolean) => void;
}

export const Header: FC<HeaderParams> = ({ setIsActiveburger }) => {
  return (
    <header>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="logoBox">
            <LogoSwg bg={"#0150e0"} />
          </div>
          <div className="searchBox">
            <input type="search" placeholder="Поиск..." />
            <i className="fas fa-search"></i>
          </div>

          <div className="iconBox2">
            <label>
              <div className="hamburger-box">
                <PiHamburgerLight
                  style={{ fontSize: "40px", color: "grey" }}
                  onClick={() => setIsActiveburger(true)}
                />
              </div>
              <Avatar />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

import { useState } from "react";
import { Center } from "./Center/Center";
import { Header } from "./Header/Header";
import { HomeRight } from "./HomeRight/HomeRight";
import { NavBar } from "./NavBar /NavBar";

export const Main = () => {
  const [isActiveBurger, setIsActiveburger] = useState(false);
  return (
    <>
      <Header setIsActiveburger={setIsActiveburger} />
      <div className="home">
        <div className="container">
          <div className="home-weapper">
            <NavBar
              isBurger={isActiveBurger}
              setIsActiveburger={setIsActiveburger}
            />
            {!isActiveBurger && (
              <>
                <Center />
                <HomeRight />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

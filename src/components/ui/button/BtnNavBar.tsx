import { ReactNode } from "react";

export const BtnNavBar = ({ children }: { children: ReactNode }) => {
  return (
    <button className="see-more-btn">
      {children} <i className="fa-solid fa-angle-down"></i>
    </button>
  );
};

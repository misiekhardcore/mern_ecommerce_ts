import React from "react";
import "./Backdrop.scss";

interface BackdropProps {
  toggle: boolean;
  setToggle: (value: any) => void;
}

export const Backdrop: React.FC<BackdropProps> = ({ toggle, setToggle }) => {
  return (
    <div onClick={setToggle} className={`backdrop ${toggle && "active"}`}></div>
  );
};

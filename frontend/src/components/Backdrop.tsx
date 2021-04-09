import React from "react";
import "./Backdrop.scss";

interface BackdropProps {
  toggle: boolean;
}

export const Backdrop: React.FC<BackdropProps> = ({ toggle }) => {
  return <div className={`backdrop ${toggle && "active"}`}></div>;
};

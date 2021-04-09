import React from "react";
import "./SideDrawer.scss";

interface SideDrawerProps {
  toggle: boolean;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ toggle }) => {
  return <div className={`sidedrawer ${toggle && "active"}`}></div>;
};

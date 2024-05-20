import React, { useState, useEffect } from "react";
import "../assets/rightPane.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Avatar from "@mui/material/Avatar";
import profilePic from "../assets/profilePic.jpg";
import Dashboard from "./Dashboad";

export const RightPane = () => {
  return (
    <div className="rightPane">
      <div className="header">
        <div className="searchDiv">
          <SearchOutlinedIcon className="iconsHover" />
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
        <div className="settingsDiv">
          <SettingsOutlinedIcon className="iconsHover" />
          <ChatBubbleOutlineOutlinedIcon className="iconsHover" />
          <NotificationsNoneOutlinedIcon className="iconsHover" />
          <Avatar alt="Profile" src={profilePic} className="profilePic" />
          <ExpandMoreOutlinedIcon className="iconsHover" />
        </div>
      </div>
      <Dashboard />
    </div>
  );
};

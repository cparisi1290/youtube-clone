import React from 'react';
import './header.css';
import MenuSharp from '@material-ui/icons/MenuSharp';
import SearchSharp from '@material-ui/icons/SearchSharp';
import VideoCallSharp from '@material-ui/icons/VideoCallSharp';
import AppsSharp from '@material-ui/icons/AppsSharp';
import NotificationsSharp from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharp />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="YouTube Logo"
          className="header__logo"
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchSharp className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallSharp />
        <AppsSharp />
        <NotificationsSharp />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;

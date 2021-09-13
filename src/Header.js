import React, { useState } from 'react';
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="YouTube Logo"
          className="header__logo"
        />
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;

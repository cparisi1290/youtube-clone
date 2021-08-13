import React from 'react';
import './sidebarRow.css';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

function SidebarRow({ title }) {
  return (
    <div className="sidebarRow">
      <HomeSharpIcon />
      <h2>{title}</h2>
    </div>
  );
}

export default SidebarRow;

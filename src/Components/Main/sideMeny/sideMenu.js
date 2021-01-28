import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';
import s from './sideMenu.module.css'


const SideMenu = (props) => {
    const classes = useStyles();
    return (
      <div className={s.sideMenu}>
        
          <div>
            <NavLink to="/alldays">All Days</NavLink>
          </div>
          <div>
            <NavLink to="/today">Today</NavLink>
          </div>
          <div>
            <NavLink to="/test">Test</NavLink>
          </div>
       
      </div>
    );
}

export default SideMenu;
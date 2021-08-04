import React from 'react';
import './Header.css';
import airbnb_icon from '/Users/guscattokki/Documents/Gustaf/React/airbnb-home-page-clone/airbnb-homepage-clone/src/assets/airbnb_icon.png'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core"


function Header() {
    return (
        <div className="header">
            <img 
                className="header__icon" 
                src={airbnb_icon}
                alt=""
            /> 
             <div className="header__center">
                 <input type="text" />
                    <SearchIcon />
             </div>

             <div className="header__right">
                 <p>Become a host</p>
                 <LanguageIcon />
                 <ExpandMoreIcon />
                 <Avatar />
             </div>
        </div>
    )
}

export default Header

import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderRdiv';
import HeaderTitleC from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = (props) => {
    return <div className="HeaderContainer">
    <ImageThumbnail/>
    <HeaderTitle/>
   
    </div>

}


export default HeaderContainer;


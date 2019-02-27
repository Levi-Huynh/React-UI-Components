import React from 'react';
import './Header.css';
import HeaderTitleC from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderTitle = (props) => {
    return <div className="HeaderTitle">
    <HeaderTitleC/>
    <HeaderContent/>
    </div>
}

    export default HeaderTitle;

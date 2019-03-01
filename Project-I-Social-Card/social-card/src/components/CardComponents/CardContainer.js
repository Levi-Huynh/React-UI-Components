import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
 import CardContent from './CardContent';

// import CardContentOrg from './CardContentOrg';

const CardContainer = (props) => {
    return <a href="https://www.reactjs.org" className="CardContainer">
     <CardBanner/>
    <CardContent/>
    </a>
}


export default CardContainer;
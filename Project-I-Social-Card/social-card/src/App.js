import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import CardContainer from './components/CardComponents/CardContainer';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';
import CardContentPar from './components/CardComponents/CardContentPar';
import CardContentOrg from './components/CardComponents/CardContentOrg';

const App = (props) => {
  return (
    <div>
    <HeaderContainer/>
    <ImageThumbnail/>
    <HeaderTitle/>
    <HeaderContent/>
    <CardContainer/>
    <CardBanner/>
    <CardContent/>
    <CardContentPar/>
    <CardContentOrg/>
    </div>
  );
};

export default App;

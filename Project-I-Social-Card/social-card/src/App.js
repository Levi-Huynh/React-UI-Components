import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';

// import CardContentOrg from './components/CardComponents/CardContentOrg';

const App = (props) => {
  return (
    <div className="Container">
    <HeaderContainer/>
    <CardContainer/>
    </div>
  );
};

export default App;

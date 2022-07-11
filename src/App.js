import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Container, Col, Row} from 'react-bootstrap'
import AboutDescription from './components/AboutDescription/AboutDescription';
import Footer from './components/Footer/Footer';
import PageTop from './components/PageTop/PageTop';
import LeftSide from './components/SideBar/LeftSide';
import RightSideTop from './components/SideBar/RightSideTop';
import TopBanner from './components/TopBanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';
import AppRouter from './router/AppRouter';
import ContentComponent from './components/CategoryComponent/ContentComponent.js';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;

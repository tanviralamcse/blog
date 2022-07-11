import React, { Component } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopBanner from '../components/TopBanner/TopBanner';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

export default class HomePage extends Component {
  render() {
    return (
        <div>
        <TopNavigation></TopNavigation>
        <TopBanner></TopBanner>
        <Services></Services>
        <Footer></Footer>
        </div>
    )
  }
}

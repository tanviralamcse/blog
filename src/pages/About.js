import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopBanner from '../components/TopBanner/TopBanner'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <PageTop pageTitle='About Us'></PageTop>
        <AboutDescription/>
        <Footer/>
      </Fragment>
    )
  }
}

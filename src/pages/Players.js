import React, { Component, Fragment } from 'react'
import ContentComponent from '../components/CategoryComponent/ContentComponent.js'
import TopNavigation from '../components/TopNavigation/TopNavigation.js'
import PageTop from '../components/PageTop/PageTop.js'
import Footer from '../components/Footer/Footer.js'

export default class Players extends Component {
  render() {
    return (
        <Fragment>
        <TopNavigation></TopNavigation>
        <PageTop pageTitle="Players"></PageTop>
        <ContentComponent></ContentComponent>

        <Footer/>
    </Fragment>
    )
  }
}

import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Hollywood from '../pages/Hollywood'
import Bollywood from '../pages/Bollywood'
import TvCelebrity from '../pages/TvCelebrity'
import Players from '../pages/Players'
import Movies from '../pages/Movies'
import PageTop from '../components/PageTop/PageTop'
import About from '../pages/About'

export default class AppRouter extends Component {
  render() {
    return (
        <Fragment>
            <Routes>
                <Route path ="/" element = {<HomePage/>}/>
                <Route path ="/hollywood" element = {<Hollywood/>}/>
                <Route path ="/bollywood" element = {<Bollywood/>}/>
                <Route path ="/tv-celebrity" element = {<TvCelebrity/>}/>
                <Route path ="/movies" element = {<Movies/>}/>
                <Route path ="/players" element = {<Players/>}/>
                <Route path ="/about" element = {<About/>}/>


            </Routes>
        </Fragment>
    )
  }
}

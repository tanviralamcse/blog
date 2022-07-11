import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RightSideTop from '../SideBar/RightSideTop'

export default class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col sm='12' lg='8' md='6'>
                            <h1>About Us</h1>
                            <hr />
                            <h3>The Journey: Founded – January 2013 – Bangalore, India</h3>

                            <p>The website, StarsUnfolded was founded in January 2013 by a team of movie buffs from Bangalore, India. The aim of the website was to provide authentic information about Indian celebrities and people who are in the news.</p>

                            <h3>Who manages the content?:</h3>

                            <p>The content of the website is managed by our team of 30+ members who are experts in their respective categories in which they work.</p>

                            <h3>What are our data collection sources?:</h3>
                            <ul>
                                <li>Authentic internet sources. Example: Times of India, The Hindu et cetera.</li>
                                <li>Newspapers, Magazines</li>
                                <li>Interviews</li>
                                <li>Telephonic interviews with the celebrities conducted by our team</li>
                                <li>Getting information directly from the celebrities via email</li>
                            </ul>
                            <h3>Contact email:</h3>

                        <p>admin@starsunfolded.com
                        </p>
                    </Col>
                    <Col sm='12' md='6' lg='4'>
                    <RightSideTop/>
                    </Col>
                </Row>
            </Container>
      </Fragment >
    )
    }
}

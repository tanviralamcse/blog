import React, { Component, Fragment } from 'react';
import {Row, Col, Container} from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (

      <Fragment>
        <div className='footerOverlay'>
            <hr/>
        <Container className='text-center '>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <h2>Follow Us</h2>        <hr/>

                    <p>Facebook</p>
                    <p>Youtube</p>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <h2>Address</h2>        <hr/>

                    <p>Bockheimer Landstr. 135</p>
                    <p>Frankfurt am Main</p>
                    <p>60325 Hesse, Germany</p>
                    <p>+49 15739061235</p>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <h2>Popular Pages</h2>
                    <hr/>

                    <p>Home</p>
                    <p>Hollywood</p>
                    <p>Bollywood</p>
                    <p>Movies</p>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <h2>Legal</h2>        <hr/>

                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Privacy</p>
                </Col>
            </Row>
        </Container>
        <hr/>
        </div>
        <Container className='copyRight'>
                <p className='text-center'>Copy Right Protected @2022 | <a href='/'>Celebrity Life</a> | All rights reserved.</p>
        </Container>
      </Fragment>
    )
  }
}

import React, { Component, Fragment } from 'react'
import PageTop from '../PageTop/PageTop'
import TopNavigation from '../TopNavigation/TopNavigation'
import { Container, Row, Col } from 'react-bootstrap'
import RightSideTop from '../SideBar/RightSideTop'

export default class ContentComponent extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
          <Row>
            <Col sm='12' lg='8' md='6'>
              <p>
                Content goes here
              </p>
            </Col>
            <Col sm='12' md='6' lg='4'>
              <RightSideTop />
            </Col>
          </Row>
        </Container>
      </Fragment >
    )
  }
}

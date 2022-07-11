import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class RightSideTop extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div>
            <div className='card mt-4'>
            <h2>About Me</h2>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>

          </div>
          <div class="card mt-4">
            <h3>Popular Post</h3>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>
        </Container>
      </Fragment>
    )
  }
}

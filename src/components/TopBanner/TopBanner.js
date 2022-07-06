import React, { Component, Fragment } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/custom.css';
import Container from 'react-bootstrap/Container';
import {Row, Col, Button} from 'react-bootstrap';
class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className='topBannerOverlay'>
                        <Container className='topContent'>
                            <Row>
                                <Col className='text-center'>
                                    <h1 className='topTitle'>CELEBRITY GOSSIPS</h1>
                                    <h4 className='topSubTitle'>Biography and News</h4>
                                    <Button variant="primary">Visit Top Ten Lists</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;
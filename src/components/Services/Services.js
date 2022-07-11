import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                           <div className="serviceCard text-center">
                               <h2 className="serviceName">Popular Posts</h2>
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                           </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center " >
                                <h2 className="serviceName">Latest Posts</h2>
                                <p className="serviceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p><hr />
                                <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <h2 className="serviceName">Birthday Today</h2>
                                <p  className="serviceDescription">I desing modern user interface and other graphical components for your business and instiution.</p><hr />
                                <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                               <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p><hr />
                            </div>
                        </Col>


                    </Row>
                </Container>


                
            </Fragment>
        );
    }
}

export default Services;
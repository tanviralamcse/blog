import React, { Component, Fragment } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/custom.css';
import whiteLogo from '../../assets/images/logoWhite.png';
import blueLogo from '../../assets/images/logoBlue.png';
import {Link} from 'react-router-dom';

class TopNavigation extends Component {
    constructor()
    {
        super();
        this.state={
            navBarTitle:'navTitle',
            navBarLogo:[whiteLogo],
            navLogoScroll:'navLogo',
            nabBarBack:'navBackgroundColor',
            navBarText:'navBarMenu'
        };
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                this.setState({navBarTitle:'navScrollTitle'});
                this.setState({navBarLogo:[blueLogo]});
                this.setState({navLogoScroll:'navLogoScroll'});
                this.setState({nabBarBack:'navBackgroundScroll'});
                this.setState({navBarText:'navBarMenuScroll'})
            }
            else{
                this.setState({navBarTitle:'navTitle'});
                this.setState({navBarLogo:[whiteLogo]});
                this.setState({navLogoScroll:'navLogo'});
                this.setState({nabBarBack:'navBackgroundColor'});
                this.setState({navBarText:'navBarMenu'})
            }
        });
    }

    render() {
        return (
            <Fragment>
                <Navbar className={this.state.nabBarBack} collapseOnSelect expand="lg" variant="dark" fixed='top'>
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle}><img alt="  " className={this.state.navLogoScroll} src={this.state.navBarLogo}></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="ms-auto">
                        </Nav>
                            <Nav>
                                <Nav.Link><Link className={this.state.navBarText} to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link className={this.state.navBarText} to="/hollywood">Hollywood</Link></Nav.Link>
                                <Nav.Link> <Link className={this.state.navBarText} to="/bollywood">Bollywood</Link></Nav.Link>
                                <Nav.Link> <Link className={this.state.navBarText} to="/tv-celebrity">TV Celebrity</Link></Nav.Link>
                                <Nav.Link> <Link className={this.state.navBarText} to="/movies">Movies</Link></Nav.Link>
                                <Nav.Link><Link className={this.state.navBarText} to="/players">Players</Link></Nav.Link>
                                <Nav.Link> <Link className={this.state.navBarText} to="/about">About</Link></Nav.Link>
                                <Nav.Link><Link className={this.state.navBarText} to="/contact">Contact</Link></Nav.Link>

                            </Nav>  
                        </Navbar.Collapse>    
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation;

import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Col, Row, Image } from 'react-bootstrap';

class Topnav extends Component {
  render() {
    return(
      <div className="topnav" id="topnav">
  <Navbar inverse collapseOnSelect>
            <Col xs={4} md={4}>
              <Image id="photo" src="http://res.cloudinary.com/jkarlin929/image/upload/v1520212509/20141101_172558_delcg6.png" circle responsive />
            </Col>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#topnav">Jason Karlin</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
  <Navbar.Collapse>
      <Nav>
          <NavItem eventKey={1} href="#about">
            About
          </NavItem>
          <NavItem eventKey={2} href="https://www.linkedin.com/in/jason-karlin/"> LinkedIn
          </NavItem>
          <NavItem eventKey={3} href="#footer">
          Contact
          </NavItem>
      <NavDropdown eventKey={4} title="Projects" id="basic-nav-dropdown">
          <MenuItem eventKey={4.1}> <a className="navLinks" href="https://citibikers.herokuapp.com/">Citibike Locator
          </a> </MenuItem>
          <MenuItem eventKey={4.2}> <a className="navLinks" href="https://thank-heaven.herokuapp.com"> Thank Heaven: Children's Boutique </a> </MenuItem>
          <MenuItem eventKey={4.3}> <a className="navLinks" href="https://astronobject.herokuapp.com/">Astronmer's Guide
          </a> </MenuItem>
          <MenuItem eventKey={4.4}> <a className="navLinks" href="https://hellish-word-game.herokuapp.com/index.html">Word Guessing Game
          </a> </MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
    )
  }
}

export default Topnav;
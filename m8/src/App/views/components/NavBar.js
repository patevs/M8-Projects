
/*
  src/App/views/components/NavBar.js
*/

// import react component lib
import React, { Component } from 'react';

// import reactstrap component libs
import {  Navbar,  NavbarBrand } from 'reactstrap';
//Collapse, NavbarToggler, Nav, NavItem, NavLink

// import evergreen-ui component libs
import { Pane, majorScale, Heading } from 'evergreen-ui';
//Button,

// NavBar component class
class NavBar extends Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="NavBar">
        <Pane border="default" marginTop={majorScale(-8)}>
          <Navbar color="light" light>

            <NavbarBrand href="/" className="mr-auto">
              <Heading className="text-success">
                M8s {this.props.name}
              </Heading>
            </NavbarBrand>

          </Navbar>
        </Pane>
      </div>
    );
  }
}

export default NavBar;

/*

<NavbarToggler onClick={this.toggleNavbar} className="mr-2" disabled />

<Collapse isOpen={!this.state.collapsed} navbar>

  <hr className="my-2" />

  <Nav navbar>

    <NavItem className="float-left" >
      <NavLink href="/login/" className="float-left" >
        <Button
          marginLeft={majorScale(2)}
          marginTop={4}
          appearance="primary"
          intent="success"
        >
          Login
        </Button>
      </NavLink>
      <NavLink href="/register/" className="float-left">
        <Button
          marginLeft={majorScale(2)}
          appearance="primary"
          intent="none"
          height={40}
        >
          Register
        </Button>
      </NavLink>
    </NavItem>

  </Nav>
</Collapse>


*/

import React from 'react';
import '../App.css';
import { Navbar , Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonContainer, ButtonWishlist} from './CartNWishlist/Button'
import {Link} from 'react-router-dom';

class nav extends React.Component {
  
  LogoutFn = () => {
    localStorage.clear();
    window.location.href = '/login'
  }

    myProfile = () => {
        window.location.href = "/profile/"+localStorage.getItem('uid');
    }

    feedback = ()=> {
        window.location.href = "/feedback/"+localStorage.getItem('uid');
    }

  render() {
    if(localStorage.getItem('email')){
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >Fashion Store</Navbar.Brand>
                <NavItem>
                    <Link to="/prdcts" className="nav-link text-light">Purchase</Link>
                </NavItem>
            <NavItem>
                <Link to="/products" className="nav-link text-light">Purchase and Orders</Link>
            </NavItem>
    
          <Navbar.Collapse class="collapse navbar-collapse">
            <Nav class="navbar-nav ml-auto">

              <Link to="/cart">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus mr-2"/>
                      my cart
                  </ButtonContainer>
              </Link>

              <Link to="/wishlist">
                <ButtonWishlist>
                    <i className="fas fa-heart mr-2"/>
                    my wishlist
                </ButtonWishlist>
              </Link>
                <Nav.Link onClick={ this.feedback } >Feedback</Nav.Link>
                <Nav.Link onClick={ this.myProfile } className="text-light"> <small> {localStorage.getItem('name')}</small></Nav.Link>
                <Nav.Link onClick={ this.LogoutFn } >Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }else{
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >Fashion Store</Navbar.Brand>

            <NavItem>
                <Link to="/prdcts" className="nav-link text-light">Purchase</Link>
            </NavItem>
    
          <Navbar.Collapse class="collapse navbar-collapse">
            <Nav class="navbar-nav ml-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }

  }
}

export default nav;

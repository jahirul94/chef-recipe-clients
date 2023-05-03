import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import './Header.css'

const Header = () => {
  const { logOut , user } = useContext(AuthContext);
  const location = useLocation();
  
  const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error =>{
        console.log(error.message);
      })
  }
  console.log(user?.displayName);

  return (
    <Navbar className="mx-2" collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand>American Chef's Recipes </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mt-2">
              <Link className={location.pathname == '/' ? "activeLink" : 'inActiveLink' } to='/'>Home</Link>
              <Link className={location.pathname == '/blog' ? "activeLink" : 'inActiveLink' } to='/blog'>Blog</Link>
              { user ? <Link className="inActiveLink" onClick={handleLogOut}>Log Out</Link> :
              <Link className={location.pathname == '/login' ? "activeLink" : 'inActiveLink' } to='/login'>Login</Link>}
               {
                user && <img className="userPic" style={{width:'40px' , height : '40px' , borderRadius :'50%'}} src={user.photoURL}></img>
               }
              {/* <Link className="me-4 text-decoration-none text-white" to='/register'>Register</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

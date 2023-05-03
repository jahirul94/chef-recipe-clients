import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { logOut , user } = useContext(AuthContext);
  const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error =>{
        console.log(error.message);
      })
  }
  console.log(user?.displayName);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>American Chef's Recipes </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
              <Link className="me-4 text-decoration-none text-white" to='/'>Home</Link>
              <Link className="me-4 text-decoration-none text-white" to='/blog'>Blog</Link>
              { user ? <Link className="me-4 text-decoration-none text-white" onClick={handleLogOut}>Log Out</Link> :
              <Link className="me-4 text-decoration-none text-white" to='/login'>Login</Link>}
               {
                user && <img style={{width:'40px' , height : '40px' , borderRadius :'50%'}} src={user.photoURL}></img>
               }
              {/* <Link className="me-4 text-decoration-none text-white" to='/register'>Register</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

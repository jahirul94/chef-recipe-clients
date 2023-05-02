import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login( email , password )
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error.message);
    })
  
  
  
  }

  return (
    <Container className="mx-auto w-25 mt-4">
         <h4 className="mb-4 fw-bold">Please Login</h4>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email"  required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
   <div className="mt-2">
       Don't Have An Account ? <Link to='/register' className="text-danger text-decoration-none"> Register </Link>
   </div>
   <div className="d-flex" style={{marginTop :'30px' , marginBottom : '100px'}}>
         <button type="button" class="btn btn-outline-secondary me-2 d-flex align-items-center">Connect with <FaGoogle className="ms-2"></FaGoogle></button>
         <button type="button" class="btn btn-outline-secondary d-flex align-items-center">Connect With <FaGithub className="ms-2"></FaGithub></button>
   </div>
</Container>
  );
};

export default Login;

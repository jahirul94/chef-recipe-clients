import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import './Login.css'

const Login = () => {
  const { login , loginWithGithub , loginWithGoogle } = useContext(AuthContext);
  const [ error , setError ] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

   
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    login( email , password )
    .then(result =>{
      console.log(result.user);
      navigate(from , { replace : true });
      form.reset();
    })
    .catch(error =>{
      setError(error.message);
    })
  }

  const handleLoginWithGoogle = () =>{
      loginWithGoogle()
      .then(result =>{
        console.log(result.user);
        navigate(from , { replace : true });
      })
      .catch(err =>{
        setError(err.message);
      })

  }

  const handleLoginWithGithub = () =>{
      loginWithGithub()
      .then(result =>{
        console.log(result.user);
        navigate(from , { replace : true });
      })
      .catch(err =>{
        setError(err.message);
      })

  }

  return (
    <Container className="mx-auto width">
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
           <div className="h-4 text-danger ps-2">
               <p>{error}</p>
           </div>
          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
   <div className="mt-2">
       Don't Have An Account ? <Link to='/register' className="text-primary text-decoration-none"> Register </Link>
   </div>
   <div className="d-flex" style={{marginTop :'30px' , marginBottom : '100px'}}>
         <button onClick={handleLoginWithGoogle} type="button" className="btn btn-outline-secondary me-2 d-flex align-items-center">Connect with <FaGoogle className="ms-2"></FaGoogle></button>
         <button onClick={handleLoginWithGithub} type="button" className="btn btn-outline-secondary d-flex align-items-center">Connect With <FaGithub className="ms-2"></FaGithub></button>
   </div>
</Container>
  );
};

export default Login;

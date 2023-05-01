import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
       
    
    }


  return (
    <Container className="mx-auto w-25 mt-4 mb-4">
       <h4 className="mb-4 fw-bold">Register your account</h4>
     <Form onSubmit={handleRegister}>
         <Form.Group className="mb-3" controlId="formBasicName">
         <Form.Label className='fw-bold'>You're Name</Form.Label>
         <Form.Control type="text" name="name" placeholder="Put You're name"  required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPhoto">
         <Form.Label className='fw-bold'>Photo Url</Form.Label>
         <Form.Control type="text" name="photo" placeholder="Put You're Photo Url"  required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className='fw-bold'>Email address</Form.Label>
         <Form.Control type="email" name="email" placeholder="Enter email"  required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label className='fw-bold'>Password</Form.Label>
         <Form.Control type="password" name="password" placeholder="Password" required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>

         <Button className="w-100" variant="primary" type="submit">
         Login
         </Button>
     </Form>
     <div className="mt-2">
         Already Have An Account ? <Link to='/login' className="text-primary text-decoration-none"> Login </Link>
     </div>
</Container> 
  );
};

export default Register;

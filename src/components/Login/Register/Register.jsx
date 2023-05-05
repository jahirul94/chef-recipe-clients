import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [ error , setError ] = useState('');
    const { createUser } = useContext(AuthContext)

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // validation 
        setError('')
        if( password !== confirm ) {
             setError("Password Don't Match")
             return 
        }
        else if (password.length < 6 ) {
             setError('Please Enter 6 digit or larger Password')
             return
        }
        // create User 
        setError('');
        createUser( email , password )
        .then(result =>{
             const user = result.user ;
             form.reset();
             updateData(user , name , photo)
             toast("User Created Successfully!");
        })
        .catch(error =>{
           setError(error.message);
        })
       
    // update user data 
    const updateData = ( user , name , photo) =>{
          updateProfile(user , {
              displayName: name , photoURL: photo
          }).then(()=>{}).catch(err=>setError(err.message))
     }



    }


  return (
    <Container className="mx-auto width">
       <h4 className="mb-4 fw-bold">Register your account</h4>
     <Form onSubmit={handleRegister}>
         <Form.Group className="mb-3" controlId="formBasicName">
         <Form.Label className='fw-bold'>You're Name</Form.Label>
         <Form.Control type="text" name="name" placeholder="You're name"  required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPhoto">
         <Form.Label className='fw-bold'>Photo Url</Form.Label>
         <Form.Control type="text" name="photo" placeholder="You're Photo Url"  required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label className='fw-bold'>Email address</Form.Label>
         <Form.Control type="email" name="email" placeholder="Enter email"  required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label className='fw-bold'>Password</Form.Label>
         <Form.Control type="password" name="password" placeholder="Password" required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicConfirm">
         <Form.Label className='fw-bold'>Confirm Password</Form.Label>
         <Form.Control type="password" name="confirm" placeholder="Confirm Password" required />
         </Form.Group>
          <p className="text-danger mb-2 ps-2"> {error}</p>

         <Button className="w-100" variant="primary" type="submit">
          Register
         </Button>
     </Form>
     <div style={{marginBottom:'100px'}} className="mt-2">
         Already Have An Account ? <Link to='/login' className="text-primary text-decoration-none"> Login </Link>
     </div>
     <ToastContainer/>
</Container> 
  );
};

export default Register;

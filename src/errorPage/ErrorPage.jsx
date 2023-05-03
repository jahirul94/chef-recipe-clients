import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Container style={{marginBottom:'150px'}} className='d-flex'>
             <div className='w-50'>
                 <h2 style={{marginTop:'150px'}} className='fs-1 text-warning fw-bold pe-4'>Sorry ,</h2>
                 <p className='fs-2 fw-bold pe-4 text-info'>We can't find a Page You're Looking For .</p>
                 <Link to='/'><Button className='d-flex align-items-center mt-4'><FaArrowLeft className='me-2'></FaArrowLeft> Go Back Home</Button></Link>
             </div>
             <img className='w-50 ps-4 ms-4' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1683043550~exp=1683044150~hmac=02a2f5477861223fa5bf1c48b88c64867698a130f44d1d94d1d01b2fc6581739" alt="" />
        </Container>
    );
};

export default ErrorPage;
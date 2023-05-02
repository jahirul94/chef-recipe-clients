import React from 'react';
import { useLoaderData } from "react-router-dom";
import Cart from './Cart';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';


const Home = () => {
    const data = useLoaderData();
    return (
        <Container>
            <Card style={{marginBottom :'50px' , marginTop : '20px'}}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                <Card.ImgOverlay className='ms-4 text-info' style={{marginTop:'200px'}}>
                        <h2 className='fs-1 fw-bold'>Welcome to SocialChef!</h2>
                        <p className='fs-5 fw-semibold'>SocialChef is the ultimate cooking social community, where recipes come to life. By joining us you will join a robust foodie community and where you will get to share your recipes and food ideas with hundreds of other like-minded members.</p>
                        <p className='fs-5 fw-semibold'>You will also get a chance to win awesome prizes, make new friends and share delicious recipes.</p>
                </Card.ImgOverlay>
            </Card>
            <div className='my-4' style={{display:'grid' , gridTemplateColumns :'1fr 1fr 1fr' , gap: '20px'}}>
               {
                data.map(sd => <Cart key={sd.id} chef = {sd}></Cart>)
               }
            </div>
        </Container>
    );
};

export default Home;
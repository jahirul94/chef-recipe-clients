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
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/burger_1339-1577.jpg?w=740&t=st=1683040823~exp=1683041423~hmac=05dcff08edf15edd6d192aeec6f93f516f4d17d3a71cec72a8aa6a06f17bd2a9" />
                <Card.ImgOverlay className='ms-4 d-flex text-black' style={{marginTop:'200px'}}>
                       <div className='w-50'>
                           <h2 className='fs-1 fw-bold'>Welcome to American Chef's Recipes!</h2>
                            <p className='fs-5 fw-semibold'>
                             Welcome to American Chef's Recipes , your go-to source for all things delicious and American cuisine! Our team of food experts is led by the talented and experienced Chef , they has dedicated there career to showcasing the best of American culinary traditions</p>
                            <p className='fs-5 fw-semibold'>You will also get a chance to win awesome chef , make new friends and share delicious recipes.</p>
                       </div>
                </Card.ImgOverlay>
            </Card>
            
             <div style={{marginTop:'150px' , marginBottom: '50px' , textAlign: 'center'}}>
                 <h2 className='fw-bold'>Explore Our awesome Chefs and Their Recipes!</h2>
             </div>


            <div className='my-4' style={{display:'grid' , gridTemplateColumns :'1fr 1fr 1fr' , gap: '20px'}}>
               {
                data.map(sd => <Cart key={sd.id} chef = {sd}></Cart>)
               }
            </div>
        </Container>
    );
};

export default Home;
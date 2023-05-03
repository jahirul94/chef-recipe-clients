import React from 'react';
import { useLoaderData } from "react-router-dom";
import Cart from './Cart';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';


const Home = () => {
    const data = useLoaderData();
    return (
        <Container>
            <Card style={{marginBottom :'50px' , marginTop : '20px'}}>
            <LazyLoad>
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/burger_1339-1577.jpg?w=740&t=st=1683040823~exp=1683041423~hmac=05dcff08edf15edd6d192aeec6f93f516f4d17d3a71cec72a8aa6a06f17bd2a9" />
            </LazyLoad>
                <Card.ImgOverlay className='ms-4 d-flex text-black'>
                       <div className='w-50'>
                           <h2 className='text-large'>Welcome to American Chef's Recipes!</h2>
                            <p className='text-small'>
                             Welcome to American Chef's Recipes , your go-to source for all things delicious and American cuisine! Our team of food experts is led by the talented and experienced Chef , they has dedicated there career to showcasing the best of American culinary traditions</p>
                            <p className='text-small'>You will also get a chance to win awesome chef , make new friends and share delicious recipes.</p>
                       </div>
                </Card.ImgOverlay>
            </Card>
            
             <section >
                 <Card style={{paddingTop:'50px' ,paddingBottom: '50px' , textAlign: 'center'}}>
                    <Card.Body>
                        <Card.Title className='fw-bold fs-2 mb-4'>Explore Our awesome Chefs and Their Recipes!</Card.Title>
                        <Card.Text className='fw-semibold'>
                            Explore Our Awesome Chefs and Their Recipes is a website dedicated to showcasing talented chefs and their unique recipes. Our platform provides food lovers with an opportunity to discover and learn from some of the most innovative and creative culinary experts from around the world. Whether you're an aspiring chef or just a food enthusiast, our website is the perfect place to explore new cuisines and expand your culinary knowledge. Join us on a journey of gastronomic delight and discover the delicious world of food through our exceptional chefs and their mouth-watering recipes.
                        </Card.Text>
                    </Card.Body>
                </Card>
             </section>


            <div className='my-4 grid'>
               {
                data.map(sd => <Cart key={sd.id} chef = {sd}></Cart>)
               }
            </div>
        </Container>
    );
};

export default Home;
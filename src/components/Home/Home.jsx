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
                <Card.Img variant="top" src="https://img.freepik.com/premium-photo/homemade-hamburger-close-up-with-beef-tomato-lettuce-cheese-onion-wooden-table_96727-1158.jpg?w=900" />
            </LazyLoad>
                <Card.ImgOverlay>
                       <div className='main-card'>
                           <h2 className='text-large'>Welcome to American Chef's Recipes!</h2>
                            <p className='text-small'>
                             Welcome to American Chef's Recipes , your go-to source for all things delicious and American cuisine! Our team of food experts is led by the talented and experienced Chef , they has dedicated there career to showcasing the best of American culinary traditions.</p>
                       </div>
                </Card.ImgOverlay>
            </Card> 
            
             <section>
                 <Card style={{ backgroundColor:'#E1E8ED' , paddingTop:'50px' ,paddingBottom: '50px' , textAlign: 'center'}}>
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
                data?.map(sd => <Cart key={sd.id} chef = {sd}></Cart>)
               }
            </div>
             <Card style={{ backgroundColor:'#E1E8ED'}} className='my-4'>
                  <div className='text-center pt-4'>
                      <h3 className='fs-1 fw-bold'>Our Services </h3>
                  </div>
                   <div className='ourServiceResponsive d-flex justify-content-around mb-2'>
                        <Card className='m-2'>
                            <Card.Body style={{ backgroundColor:'#E1E8ED'}}>
                                <Card.Title className='fw-bold'>Recipe sharing</Card.Title>
                                <Card.Text className='fw-semibold ps-2'>
                                  We can offer a platform for chefs to share their favorite recipes with the world. These recipes can be categorized based on cuisine, ingredients, dietary requirements, and other factors.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='m-2'>
                            <Card.Body style={{ backgroundColor:'#E1E8ED'}}>
                                <Card.Title className='fw-bold'>Cooking tips and techniques</Card.Title>
                                <Card.Text className='fw-semibold ps-2'>
                                    We can offer helpful tips and techniques for cooking, such as how to properly cooked, how to season meat, how to cook the perfect steak, and more.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='m-2'>
                            <Card.Body style={{ backgroundColor:'#E1E8ED'}}>
                                <Card.Title className='fw-bold'>Personal chef services</Card.Title>
                                <Card.Text className='fw-semibold ps-2'>
                                    Our website can offer personal chef services where a chef can cook for clients in their home or prepare meals for them to take away.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                   </div>
             </Card>
        </Container>
    );
};

export default Home;
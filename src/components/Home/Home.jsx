import React from 'react';
import { useLoaderData } from "react-router-dom";
import Cart from './Cart';
import Container from 'react-bootstrap/Container';


const Home = () => {
    const data = useLoaderData();
    return (
        <Container>
            {
                data.map(sd => <Cart key={sd.id} chef = {sd}></Cart>)
            }
        </Container>
    );
};

export default Home;
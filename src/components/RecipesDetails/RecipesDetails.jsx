import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipesDetailsCard from './RecipesDetailsCard';
import { Container } from 'react-bootstrap';

const RecipesDetails = () => {
    const detailsData = useLoaderData();
    return (
        <Container className='my-4 grid'>
             {
                detailsData.map( sd => <RecipesDetailsCard key={sd.id} data ={sd}></RecipesDetailsCard>)
             } 
        </Container>
    );
};

export default RecipesDetails;
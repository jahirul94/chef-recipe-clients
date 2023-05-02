import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipesDetailsCard from './RecipesDetailsCard';
import { Container } from 'react-bootstrap';

const RecipesDetails = () => {
    const detailsData = useLoaderData();
    return (
        <Container style={{display : 'grid' , gridTemplateColumns: '1fr 1fr 1fr', gap:'10px' }}>
             {
                detailsData.map( sd => <RecipesDetailsCard key={sd.id} data ={sd}></RecipesDetailsCard>)
             } 
        </Container>
    );
};

export default RecipesDetails;
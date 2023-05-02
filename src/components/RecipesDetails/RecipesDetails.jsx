import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipesDetails = () => {
    const detailsData = useLoaderData();
    console.log(detailsData);
    return (
        <div>
              
        </div>
    );
};

export default RecipesDetails;
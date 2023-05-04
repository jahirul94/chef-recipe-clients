import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipesDetailsCard from './RecipesDetailsCard';
import { Card, Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const RecipesDetails = () => {
    const [ userDetails , setUserDetails ] = useState({});
    const {name , picture , experience , likes , recipes , bio_data } = userDetails ;
    // console.log(userDetails);
    const detailsData = useLoaderData();
    const {id} = useParams();
    useEffect(()=>{
         fetch(`https://assignment-ten-server-seven.vercel.app/user/${id}`)
         .then(res=>res.json())
         .then(data => setUserDetails(data))
    },[])
    return (
        <Container>
             <div className='mt-4 me-2'>
                 <Card style={{ width: '500px' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                    <Card.Title className="fs-4 fw-bold my-2">{name}</Card.Title>
                    <div className='my-2'><small>{bio_data}</small></div>
                     <div><span className="fw-semibold m-0">Years of experience : </span>{experience}</div>
                     <div><span className="fw-semibold m-0">Numbers of recipes : </span>{recipes}</div>
                     <div><span className="fw-semibold m-0"><FaHeart></FaHeart> Likes : </span>{likes}</div>
                    </Card.Body>
                </Card>
             </div>
              <Card style={{marginTop:'50px' , padding :'20px 0px'}} className='text-center mb-2'>
                   <h2 className='fw-bold'>Explore My Recipe</h2>
                    <p className='fw-semibold'>Choosing The Good Food Is The best Investment in You . Explore My <br /> Recipe and Test that I belive that's can change You're Mood</p>
              </Card>
             <div className='my-4 grid'>
                {
                   detailsData.map( sd => <RecipesDetailsCard key={sd.id} data = {sd}></RecipesDetailsCard>)
                } 
             </div>
        </Container >
    );
};

export default RecipesDetails;
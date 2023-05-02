import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaArrowRight, FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Cart = ({ chef }) => {
  return (
    <Card>
      <Card.Img className="p-2 h-75 img-fluid" variant="top" src={chef.picture} />
      <Card.Body>
        <Card.Title className="fs-2 fw-bold">{chef.name}</Card.Title>
         <div className="mt-4 ps-2 pb-4">
              <p className="fw-semibold m-0">Years of experience : {chef.experience} </p>
              <p className="fw-semibold m-0">Numbers of recipes : {chef.recipes} </p>
              <p className="fw-semibold m-0"><FaHeart></FaHeart> Likes : {chef.likes} </p>
         </div>
         <Link to={`/${chef.id}`}><Button className="w-100" variant="secondary">View Recipes<FaArrowRight className="ms-4"></FaArrowRight></Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Cart;

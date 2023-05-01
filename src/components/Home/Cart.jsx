import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cart = ({ chef }) => {
  console.log(chef);
  return (
    <Card className="w-50">
      <Card.Img variant="top" src={chef.picture} />
      <Card.Body>
        <Card.Title>{chef.name}</Card.Title>
         <div>
              <h5>Years of experience : {chef.experience} </h5>
              <h5>Numbers of recipes : {chef.recipes} </h5>
              <h5>Likes : {chef.likes} </h5>
         </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Cart;

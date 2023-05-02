import React from "react";
import { Card } from "react-bootstrap";

const RecipesDetailsCard = ({ data }) => {
  const { name, recipe, picture } = data;
  return (
    <Card className="mt-4">
      <Card.Img variant="top" className="img-fluid" src = {picture}/>
      <Card.Body>
        <Card.Title className="fs-4 fw-bold">{name}</Card.Title>
        <Card.Text>
          <span className="fs-5 fw-semibold">Recipes : </span><span className="fs-6 fw-semibold">{recipe}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecipesDetailsCard;

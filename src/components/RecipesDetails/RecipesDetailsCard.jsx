import React from "react";

const RecipesDetailsCard = ({ data }) => {
  const { name, recipe, picture } = data;
  return (
      <div className="p-2 h-100" style={{border : '1px solid gray'}}>
            <img style={{height : '60%' , width : '100%'}} className="img-fluid" src={picture} alt="" />
             <h2>{name}</h2>
             <div>
                  <span>Recipe : </span>{recipe}
             </div>
      </div>
  );
};

export default RecipesDetailsCard;

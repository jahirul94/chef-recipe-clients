import React from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaStar } from "react-icons/fa";


const RecipesDetailsCard = ({ data }) => {
  const { name, recipe, picture , rating } = data;
  return (
      <div className="p-2" style={{border : '1px solid gray' , height:'600px'}}>
            <img style={{height : '60%' , width : '100%'}} className="img-fluid" src={picture} alt="" />
             <h2>{name}</h2>
             <div>
                   <span className="fs-5 fw-semibold">Recipe : </span>{recipe}<br/>
                   <div className="py-4 ps-2">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h6>Overall Rating</h6>
                                <div className="d-flex">
                                <span className="me-2">{rating}</span>
                                  <Rating
                                      style={{ maxWidth: 100 }}
                                      value={rating}
                                      readOnly
                                    />
                                </div>
                            </div>
                            <div className="pt-2">
                               <button type="button" className="btn btn-outline-secondary d-flex align-items-center">Add to Favorite<FaStar className="ms-2 text-warning"></FaStar></button>
                            </div>
                        </div>
                  </div>
             </div>
      </div>
  );
};

export default RecipesDetailsCard;

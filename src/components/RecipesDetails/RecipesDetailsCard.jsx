import React, { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from "react-lazy-load";
import { Card } from "react-bootstrap";


const RecipesDetailsCard = ({ data }) => {
  const { name, ingredients, picture , rating , cooking_method } = data;
  const [ Favorite , setFavorite ] = useState(false);

  const handleTost = () =>{
     toast("You're Recipe added On Favorite Items!")
     setFavorite(!Favorite)
  }
  return (
      <Card className="p-4" style={{border : '1px solid gray' , height:'100%' , backgroundColor:'#595D95' , color : "white"}}>
         <LazyLoad>
              <img style={{height : '300px' , width : '100%'}} className="img-fluid mb-2" src={picture} alt="" />
         </LazyLoad>
             <h2>{name}</h2>
             <div>
                   <span className="fs-5 fw-semibold">Ingredients : </span>{ingredients}<br/>
                   <p className="mt-2"><span className="fs-5 fw-semibold">Cooking method :</span> <small>{cooking_method}</small></p>
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
                               <button type="button" className="btn btn-outline-warning d-flex align-items-center" onClick={handleTost} disabled={Favorite}>Add to Favorite<FaStar className="ms-2 text-warning"></FaStar></button>
                               <ToastContainer />
                            </div>
                        </div>
                  </div>
             </div>
      </Card>
  );
};

export default RecipesDetailsCard;

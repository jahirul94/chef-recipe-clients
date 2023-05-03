import React, { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipesDetailsCard = ({ data }) => {
  const { name, recipe, picture , rating } = data;
  const [ Favorite , setFavorite ] = useState(false);

  const handleTost = () =>{
     toast("You're Recipe added On Favorite Items!")
     setFavorite(!Favorite)
  }

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
                               <button type="button" className="btn btn-outline-secondary d-flex align-items-center" onClick={handleTost} disabled={Favorite}>Add to Favorite<FaStar className="ms-2 text-warning"></FaStar></button>
                               <ToastContainer />
                            </div>
                        </div>
                  </div>
             </div>
      </div>
  );
};

export default RecipesDetailsCard;

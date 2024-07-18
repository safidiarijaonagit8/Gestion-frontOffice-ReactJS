import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({titre,soustitre, sary, artist, idarticle}) {
  const imageUrl = `http://localhost:8080/images/${sary}`;

  return (
    <Link to={`/detailArticle/${idarticle}`}> 
    <div className="card">
      <div className={`image ${artist && "artist"}`}>
      <div className= "saryCard">
        <img src={imageUrl} alt="" />
          </div>
      
     
      </div>
      <div className="text">
        <h4 className="card-title">{titre}</h4>
        <h5 className="card-subtitle">{soustitre}</h5>
      </div>
    </div>
    </Link> 
  );
}

export default Card;

import React from "react";
import "./RectCard.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function RectCard({ title, sary, idarticle }) {
 
  const imageUrl = `http://localhost:8080/images/${sary}`;
 

  return (
    <div className="rect-card">
      <div className="rect-card-left">
        <img src={imageUrl} alt="" />
      </div>
      <div className="rect-card-right">
        <h5>{title}</h5>
        <Link to={`/detailArticle/${idarticle}`}> 
        <button className="play-btn" >
          <ion-icon name="play-circle"></ion-icon>

        </button>
        </Link> 
      </div>
        
    </div>
  );
}

export default RectCard;

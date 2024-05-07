import React from "react";
import "./RectCard.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RectCard({ title, image, idarticle,setIdArticle }) {
  setIdArticle(idarticle);

  return (
    <div className="rect-card">
      <div className="rect-card-left">
        <img src={image} alt="" />
      </div>
      <div className="rect-card-right">
        <h4>{title}</h4>
        <Link to="/detailArticle" > 
        <button className="play-btn">
          <ion-icon name="play-circle"></ion-icon>

        </button>
        </Link> 
      </div>
        
    </div>
  );
}

export default RectCard;


import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import RectCard from "../RectCard/RectCard";
import "./DetailArticle.scss";
import { topLists, sections } from "../../database/data";

import Sidebar from "../Sidebar/Sidebar";

function DetailArticle(propss){
    useEffect(() => {
        const scrollContainer = document.querySelector(".home"),
          navbar = document.querySelector(".navbar");
    
        if (scrollContainer) {
          scrollContainer.addEventListener("scroll", () => {
            let scroll = scrollContainer.scrollTop;
            let opacity = scroll / 200;
            navbar.style.background = `rgba(29, 13, 70, ${opacity})`;
          });
        }
      });
    
      /* Responsive Style */
      let [cardNum, setCardNum] = useState(6);
    
      const getCardsNum = () => {
        const width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
    
        if (width > 1500) {
          setCardNum(6);
        } else if (width > 1300) {
          setCardNum(5);
        } else if (width > 972) {
          setCardNum(4);
        } else if (width > 772) {
          setCardNum(3);
        } else if (width > 540) {
          setCardNum(2);
        } else {
          setCardNum(0);
        }
      };
    
      useEffect(() => {
        getCardsNum();
        window.addEventListener("resize", () => {
          getCardsNum();
        });
      }, []);
    
    return (
      
      
            <div className="app">
    <div className="main">
    <Sidebar active="news"/>
        <div className="home">
          <div className="home-inside">
            <Navbar home={true} />
    
            <div className="home-container">
              <section className="section-1" key={0}>
              <h1>{propss.idarticle}</h1>
               
              </section>
    
             
            </div>
          </div>
        </div>
        </div>
        </div>

       
      );

}
export default DetailArticle;
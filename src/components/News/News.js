
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import RectCard from "../RectCard/RectCard";
import "./News.scss";
import { topLists, sections } from "../../database/data";

import Sidebar from "../Sidebar/Sidebar";

function News(){
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
                <div className="heading">
                  <h1>Tongasoa</h1>
                </div>
               
              </section>
    
              {sections.map((section, index) => (
                <section key={index + 1}>
                  <div className="heading">
                    <h2>
                      <a href="">{section.category}</a>
                    </h2>
                    <p>
                      <a href="">SEE ALL</a>
                    </p>
                  </div>
                  <div className="content">
                    {section.playlists
                      .slice(0, cardNum || section.playlists.length)
                      .map((playlist, index) => (
                        <Card
                          key={index}
                          title={playlist.title}
                          subtitle={playlist.subtitle}
                          image={playlist.image}
                          artist={playlist.artist}
                        />
                      ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
        </div>
        </div>

       
      );

}
export default News;
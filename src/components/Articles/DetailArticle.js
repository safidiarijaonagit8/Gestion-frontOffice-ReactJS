
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import RectCard from "../RectCard/RectCard";
import "./DetailArticle.scss";
import { topLists, sections } from "../../database/data";
import { useParams } from 'react-router-dom';

import Sidebar from "../Sidebar/Sidebar";
import ArticlesApiServices from '../../services/ArticlesApiServices';

function DetailArticle(){
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
      const {idarticle} = useParams();
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

      const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const articlesApiServices = new ArticlesApiServices();

  useEffect(() => {
    const fetchArticle = async (id) => {
      try {
        const data = await articlesApiServices.getDetailArticle(id);
        setArticle(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

   
      fetchArticle(idarticle);
    
  }, [idarticle]);
if(article){
  var imageUrl = article.sary ? `http://localhost:8080/images/${article.sary}` : '';
}  
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
};

  return (
      
      
            <div className="app">
    <div className="main">
    <Sidebar active="news"/>
        <div className="home">
          <div className="home-inside">
            <Navbar home={true} />
    
            <div className="home-container">
              <section className="section-1" key={0}>
              {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {article && (
                  <div className="article-container">
                    <h2>{article.titre}</h2>
                    <h3>{article.soustitre}</h3>
                    <br />  <br /> 
                    {imageUrl && <img src={imageUrl} alt="" />}
                    <br />  
                    <h5 className="date-publication">{formatDate(article.datepublication)}</h5>
                    <br />  <br />
                    <p className="article-content" dangerouslySetInnerHTML={{ __html: article.contenus }} />
                    
                    
                  </div>
                )}
               
              </section>
              
    
             
            </div>
          </div>
        </div>
        </div>
        </div>

       
      );

}
export default DetailArticle;
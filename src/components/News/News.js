
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import RectCard from "../RectCard/RectCard";
import "./News.scss";
import { topLists, sections } from "../../database/data";

import Sidebar from "../Sidebar/Sidebar";
import ArticlesApiServices from '../../services/ArticlesApiServices';
import CategoriesApiServices from '../../services/CategoriesApiServices';

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

      const[articles, setArticles] = useState([]);
      const[categories, setCategories] = useState([]);
      const [articlesByCategory, setArticlesByCategory] = useState([]);

    

    

      useEffect(() => {
        const fetchData = async () => {
          const categorieService = new CategoriesApiServices();
          const articlesService = new ArticlesApiServices(); // Assuming you have an Articles API service
      
          try {
            const listCategories = await categorieService.getListCategories();
            setCategories(listCategories);
      
            // Fetch latest articles for each category and organize them by category ID
            const articlesByCategory = {};
            await Promise.all(
              listCategories.map(async (category) => {
                const articles = await articlesService.getLatest10ArticlesByCategory(category.id); // Adjust API call as per your backend
                articlesByCategory[category.id] = articles;
              })
            );
      
            setArticlesByCategory(articlesByCategory);
          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error state here if needed
          }
        };
      
        fetchData();
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
                  <h1>Nos Actualités</h1>
                </div>
               
              </section>
    
              {categories.map((category, categoryIndex) => (
                <section key={categoryIndex + 1}>
                  <div className="heading">
                    <h2>
                      <a href="">{category.nomCategorie}</a>
                    </h2>
                    <p>
                    <a href={`/newsparcategorie/${category.id}`}>Voir tout</a> 
                    </p>
                  </div>
                  <div className="content">
                  {(articlesByCategory[category.id] || [])
                    .map((article, articleIndex) => (
                                <Card
                                    key={articleIndex}
                                    titre={article.titre}
                                    soustitre={article.soustitre}
                                    sary={article.sary}
                                    artist={''}
                                    id={article.id}
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
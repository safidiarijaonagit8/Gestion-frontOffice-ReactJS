
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import RectCard from "../RectCard/RectCard";
import "./NewsParCategorie.scss";
import CategoriesApiServices from '../../services/CategoriesApiServices';

import Sidebar from "../Sidebar/Sidebar";
import Pagination from "../Pagination/Pagination";
import ArticlesApiServices from '../../services/ArticlesApiServices';
import { useParams } from 'react-router-dom';

function NewsParCategorie(){

    const { idCategorie } = useParams();

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
     
      const [currentPage, setCurrentPage] = useState(1); // Note: 0-based page index
     const [totalPages, setTotalPages] = useState(0);
     const[categories, setCategories] = useState([]);
     const [categoryName, setCategoryName] = useState('');


     useEffect(() => {
        const fetchArticles = async () => {
          const articlesService = new ArticlesApiServices();
          try {
            const response = await articlesService.getArticlesByCategory(idCategorie, currentPage, 1);
            setArticles(response.content); // Assuming the backend returns a Page object
            setTotalPages(response.totalPages);
          } catch (error) {
            console.error('Error fetching articles:', error);
          }
        };
    
        fetchArticles();
      }, [idCategorie, currentPage]);

      const handlePageChange = (page) => {
        setCurrentPage(page); // Convert to 0-based index
      };


      const fetchCategories = async () => {
        const categoriesService = new CategoriesApiServices();
        try {
          const categories = await categoriesService.getListCategories();
          const category = categories.find(cat => cat.id === parseInt(idCategorie));
          if (category) {
            setCategoryName(category.nomCategorie);
          }
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };

      useEffect(() => {
        fetchCategories();
        
      }, [idCategorie]);

     
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
                  <h2>{categoryName}</h2>
                </div>
               
              </section>
    
             
                <section key={idCategorie}>
                
                  <div className="content">
                  {articles.map((article) => (
                                <Card
                                    key={article.id}
                                    titre={article.titre}
                                    soustitre={article.soustitre}
                                    sary={article.sary}
                                    artist={''}
                                    id={article.id}
                                />
                            ))}
                  </div>
                  <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
                </section>
             
            </div>
          </div>
        </div>
        </div>
        </div>

       
      );

}
export default NewsParCategorie;
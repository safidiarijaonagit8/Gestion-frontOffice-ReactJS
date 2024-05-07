import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import RectCard from "../RectCard/RectCard";
import "./Home.scss";
import { topLists, sections } from "../../database/data";
import Sidebar from "../Sidebar/Sidebar";
import ArticlesApiServices from '../../services/ArticlesApiServices';

function Home(propss) { 
const[articles, setArticles] = useState([]);

  const [imageSrc, setImageSrc] = useState('');

  /* Navbar - background changes with scroll */
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

useEffect(() => {
  const fetchData = async () => {
    const dataService = new ArticlesApiServices(); // Create an instance of the service
    try {
      const result = await dataService.getListArticles(); // Call the fetchData method
      setArticles(result);
     // setLoading(false);
    } catch (error) {
     // setError(error.message);
     // setLoading(false);
    }
  };

  fetchData(); // Invoke fetchData function

}, []);



/*useEffect(() => {
  const fetchImage = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/image'); //maka list ana sary ato
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImageSrc(imageUrl);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  fetchImage();
}, []);*/


   const getObjectURL = async (sary) => {
  try {
    const response = await fetch('http://localhost:8080/api/sary?sary='+sary); //maka list ana sary ato
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    
  setImageSrc(imageUrl);
  return imageUrl;
   // setLoading(false);
  } catch (error) {
   // setError(error.message);
   // setLoading(false);
  }
 
};




  return (
    <div className="app">
    <div className="main">
    <Sidebar active="home" />
    <div className="home">
      <div className="home-inside">
        <Navbar home={true} />

        <div className="home-container">
          <section className="section-1" key={0}>
            <div className="heading">
              <h1>Tongasoa</h1>
            </div>
            <h3>Dernières Actualités</h3>
            <br />
            <div className="content">

          
            {articles.slice(0, 6).map((article, index) => (
              
             
            //  getObjectURL(article.sary),
             
             
              <RectCard
              key={index}
              title={article.titre}
              //image={article.sary}
            image={''} /*imageSrc*/
              idarticle={article.id}
              setIdArticle={propss.setIdArticle}
            />
    
              ))}
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

export default Home;

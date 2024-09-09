import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import RectCard from "../RectCard/RectCard";
import "./Home.scss";
import { topLists, sections } from "../../database/data";
import Sidebar from "../Sidebar/Sidebar";
import ArticlesApiServices from '../../services/ArticlesApiServices';
import EvenementsApiServices from '../../services/EvenementsApiServices';


function Home() { 
const[articles, setArticles] = useState([]);
const[events, setEvents] = useState([]);


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
    const apiArticleService = new ArticlesApiServices(); // Create an instance of the service
    const apiEventService = new EvenementsApiServices();
    try {
      const result = await apiArticleService.getLatestArticles(); // Call the fetchData method
      setArticles(result);
      const listEventsLatest = await apiEventService.getLatestEvents();
      setEvents(listEventsLatest);

     // setLoading(false);
    } catch (error) {
     // setError(error.message);
     // setLoading(false);
    }
  };

  fetchData(); // Invoke fetchData function

}, []);










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
           
            <br />
            <div className="heading">
                <h2>
                  <h3>Dernières Actualités</h3>
                </h2>
                <p>
                  <a href="/news">Voir tout</a>
                </p>
              </div>
            <div className="content">

          
            {articles.map((article, index) => (
              
              <RectCard
              key={index}
              title={article.titre}
              
              sary={article.sary}
              idarticle={article.id}
             
            />
    
              ))}
            </div>
          </section>
          <section className="section-1" key={0}>
            <div className="heading">
              
            </div>
           
            <br />
            <div className="heading">
                <h2>
                  <h3>Derniers Evènements</h3>
                </h2>
                <p>
                  <a href="/news">Voir tout</a>
                </p>
              </div>
            <div className="content">

          
            {events.map((event, index) => (
              
            
            <Card
            key={index}
            titre={event.titre}
            soustitre={event.soustitre}
            sary={event.sary}
            artist={""}
            id={event.id}
          />
    
              ))}
            </div>
          </section>

       {/*   {sections.map((section, index) => (
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
                      titre={playlist.title}
                      soustitre={playlist.subtitle}
                      sary={playlist.image}
                      artist={playlist.artist}
                    />
                  ))}
              </div>
            </section>
          ))}*/}
        </div>
      </div>
    </div>
    </div>
    </div>
  );

}

export default Home;

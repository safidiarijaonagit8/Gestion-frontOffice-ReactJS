import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Track from "./components/Track/Track";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import NewsParCategorie from "./components/NewsParCategorie/NewsParCategorie";
import DetailArticle from "./components/Articles/DetailArticle";
import { useEffect, useState } from "react";

function App() {
  
 // const [idarticle, setIdArticle] = useState('');

  return (
    <div >
      <div>
      
        <Routes>
     
      <Route path="/" element={<Home/>} />
				<Route path="/news" element={<News />} />
        <Route path="/detailArticle/:idarticle" element={<DetailArticle />} />
        <Route path="/newsparcategorie/:idCategorie" element={<NewsParCategorie/>} />
			</Routes>

      </div>
      
      {<Track />}
    </div>
  );
}

export default App;

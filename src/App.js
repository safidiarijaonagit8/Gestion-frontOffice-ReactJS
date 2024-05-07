import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Track from "./components/Track/Track";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import DetailArticle from "./components/Articles/DetailArticle";
import { useEffect, useState } from "react";

function App() {
  
  const [idarticle, setIdArticle] = useState('');

  return (
    <div >
      <div>
      
        <Routes>
     
      <Route path="/" element={<Home setIdArticle={setIdArticle}/>} />
				<Route path="/news" element={<News />} />
        <Route path="/detailArticle" element={<DetailArticle idarticle={idarticle} />} />
			
			</Routes>

      </div>
      
      {/*<Track />*/}
    </div>
  );
}

export default App;

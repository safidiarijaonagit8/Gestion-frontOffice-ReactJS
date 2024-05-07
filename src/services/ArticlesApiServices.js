import { useState, useEffect } from "react";
const ARTICLES_REST_API = 'http://localhost:8080/api/articles';
class ArticlesApiServices {    
   
getListArticles() {
    return fetch(ARTICLES_REST_API)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        throw new Error('There was a problem fetching data:', error);
      });
  }



    
}



export default ArticlesApiServices;
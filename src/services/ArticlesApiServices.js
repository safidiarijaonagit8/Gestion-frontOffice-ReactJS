
//const ARTICLES_REST_API = 'http://localhost:8080/api/articles';


class ArticlesApiServices {    
   
/*getListArticles() {
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
  }*/

  getLatestArticles() {
    return fetch(`http://localhost:8080/articles/api/latest-articles`)
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

  
  getLatest10ArticlesByCategory(idcategorie) {
    return fetch(`http://localhost:8080/articles/api/latest-articles-by-category/${idcategorie}`)
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
  getDetailArticle(id) {
    return fetch(`http://localhost:8080/articles/api/articles/${id}`)
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

  async getArticlesByCategory(categoryId, page, size) {
    const response = await fetch(`http://localhost:8080/articles/api/articles/category/${categoryId}?page=${page}&size=${size}`);
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    return await response.json();
  }

    
}



export default ArticlesApiServices;
class CategoriesApiServices {    
   
   
    
      getListCategories() {
        return fetch(`http://localhost:8080/articles/api/categories`)
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
    
    
    
    export default CategoriesApiServices;
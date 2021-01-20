 import domUpdates from './DOMUpdates.js'
 let apiCalls = {
     loadData(type) {
         return fetch(`http://localhost:3001/api/v1/${type}`)
             .then(response => response.json())
             .catch(domUpdates.displayErrorMessage())
     },

     postData(objToPost) {
         return fetch(`http://localhost:3001/api/v1/trips`, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(objToPost)
             })
             .then(response => response.json())
             // .catch(error => console.log(error))
     }

 }

 export default apiCalls
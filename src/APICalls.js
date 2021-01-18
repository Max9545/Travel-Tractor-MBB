let apiCalls = {
    loadData(type) {
        return fetch(`http://localhost:3001/api/v1/${type}`)
            .then(response => response.json())
            .catch('Error in apiCalls')
    },

    // postData(objToPost) {
    //     fetch(`http://localhost:3001/api/v1/${type}`, {
    //             method: 'POST',
    //         })
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }

}

export default apiCalls
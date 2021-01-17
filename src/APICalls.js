// const users = fetch('http://localhost:3001/api/v1/getTrips() {
// fetch('http://localhost:3001/api/v1/destinations')
//     .then(response => response.json())

// }
// ')
//     .then(response => response.json())
//     .then(data => console.log(data))


// const trips = fetch('http://localhost:3001/api/v1/trips')
//     .then(response => response.json())
//     .then(data => console.log(data))

// const destinations = fetch('http://localhost:3001/api/v1/destinations')
//     .then(response => response.json())
//     .then(data => console.log(data))


let apiCalls = {
    loadData(url) {
        return fetch(url)
            .then(response => response.json())
            // .then(data => data.data)
            // .then(data => )
    },
    getTrips() {
        return fetch('http://localhost:3001/api/v1/trips')
            .then(response => response.json())

    },
    getTravelers() {
        return fetch('http://localhost:3001/api/v1/travelers')
            .then(response => response.json())

    },
    getDestinations() {
        return fetch('http://localhost:3001/api/v1/destinations')
            .then(response => response.json())

    }
    // postData() {

    // }
    // console.log('sdfhsdofhd')
    //     fetch('http://localhost:3001/api/v1/travelers')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }
}
export default apiCalls
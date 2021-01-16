const users = fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json())
    .then(data => console.log(data))


const trips = fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
    .then(data => console.log(data))
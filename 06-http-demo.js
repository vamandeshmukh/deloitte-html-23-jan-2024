
// HTTP Demo 

const url = 'https://jsonplaceholder.typicode.com/users/2';

fetch(url)

    .then((res) => { return res.json(); })

    .then((resp) => { 
        console.log(resp.username); 
        console.log(resp.email); 
    })

    .catch((err) => { console.log(err); });

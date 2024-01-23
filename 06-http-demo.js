
// HTTP Demo 

const url = 'https://jsonplaceholder.typicode.com/users/2';

fetch(url)
    .then((resp) => { console.log(resp); })
    .catch((err) => { console.log(err); });

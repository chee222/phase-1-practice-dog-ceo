console.log('%c HI', 'color: firebrick')
const imgUrl= Dog

fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(data => {
    // Handle the response data here
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
  });
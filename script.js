// fetch('http://restcountries.com/v3.1/all')
// .then((res) => res.json())
// .then((data) =>{
//     console.log(data)
// })

// fetch('https://restcountries.com/v3.1/all')
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok ' + res.statusText);
//     }
//     return res.json();
//   })
//   .then((data) => {
//     data.forEach((country) => {
        
//     })
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

const countryContainer = document.querySelector('.country-container');
const countryCard = document.createElement('a');
countryCard.classList.add('country-card');

// const cardImg = document.createElement('img');
// cardImg.src = "http://flagcdn.com/is.svg"


const cardHTML =`
<img src="http://flagcdn.com/is.svg" alt="flag">
                
               
                <div class="card-text">
                    <h3 class="card-title">Island</h3>
                    <p><b>Population: </b>81,770,900</p>
                    <p><b>Region: </b>Europe</p>
                    <p><b>Capital: </b>Berlian</p>
                </div>
`

countryCard.innerHTML =cardHTML;
// countryCard.append(cardImg);
// console.log(countryCard);

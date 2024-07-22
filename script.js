// // fetch('http://restcountries.com/v3.1/all')
// // .then((res) => res.json())
// // .then((data) =>{
// //     console.log(data)
// // })

// // fetch('https://restcountries.com/v3.1/all')
// //   .then((res) => {
// //     if (!res.ok) {
// //       throw new Error('Network response was not ok ' + res.statusText);
// //     }
// //     return res.json();
// //   })
// //   .then((data) => {
// //     data.forEach((country) => {
        
// //     })
// //   })
// //   .catch((error) => {
// //     console.error('Error:', error);
// //   });

// // const countryContainer = document.querySelector('.country-container');
// // const countryCard = document.createElement('a');
// // countryCard.classList.add('country-card');

// // const cardImg = document.createElement('img');
// // cardImg.src = "http://flagcdn.com/is.svg"


// // const cardHTML =`
// // <img src="http://flagcdn.com/is.svg" alt="flag">
                
               
// //                 <div class="card-text">
// //                     <h3 class="card-title">Island</h3>
// //                     <p><b>Population: </b>81,770,900</p>
// //                     <p><b>Region: </b>Europe</p>
// //                     <p><b>Capital: </b>Berlian</p>
// //                 </div>
// // `

// // countryCard.innerHTML =cardHTML;
// // countryCard.append(cardImg);
// // console.log(countryCard);


const countriesContainer = document.querySelector('.countries-container')


fetch('https://restcountries.com/v3.1/all')
  .then((res) =>  res.json())
    
  .then((data) => {
    // console.log(data );
    data.forEach((country) => {
        // console.log(country);
        const countryCard = document.createElement('a')
        countryCard.classList.add('country-card')
        countryCard.href = `/country.html?name=${country.name.common}`
        countryCard.innerHTML = ` 
            <img src="${country.flags.svg}" alt="flag" />
            <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital?.[0]}</p>
            </div>
    `
        countriesContainer.append(countryCard)
    })
  })




  // const p = new Promise((resolve , reject) => {
  //   resolve("promise Resolved value!!")
  // });
// async function always return promise

// await is the keyboard that has only used inside async function
// async function getdata(){
//   return "Namstay";

// }

// const dataPromise = getdata();
// // console.log(data);

// dataPromise.then((res) => console.log(res))


// async and await both are use handle promises
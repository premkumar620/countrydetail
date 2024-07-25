const countryName = new URLSearchParams(location.search).get('name')

const flagImage = document.querySelector('.country-detail img')

const countryheading =document.querySelector('.country-detail h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.T-population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')


const tdomain = document.querySelector('.L-Domain')
const curr = document.querySelector('.currencies')
const capital = document.querySelector('.capital')
const lang = document.querySelector('.lang')
console.log(flagImage)

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json())
.then(([country]) =>{
    
    console.log(country);
    flagImage.src=country.flags.svg

    countryheading.innerText=country.name.common;

    population.innerText=country.population.toLocaleString('en-IN')
    region.innerText=country.region;
    subRegion.innerText = country.subregion
    // tdomain.innerText=country
    curr.innerText= country.currencies

    capital.innerText=country.capital
    lang.innerText= country.languages
    if(country.name.nativeName){
        nativeName.innerText=Object.values(country.name.nativeName)[0].common  
    }
    else{
        nativeName.innerText =country.name.common;
    }
      
})





const countryName = new URLSearchParams(location.search).get('name')

const flagImage = document.querySelector('.country-details img')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json())
.then((data) =>{
    console.log(data[0])
    flagimage.src=data[0].flags.svg;
})
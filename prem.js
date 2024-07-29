const div = document.createElement('div');
div.className = 'prem';
div.innerHTML = 'prem kumar';

const section = document.createElement('section');

// Append the div to the section
div.appendChild(section);

// Append the section to the body (or any other container element)
// document.body.appendChild(section);
const img = document.createElement('img');
img.append('prem.jpge')
section.appendChild(img);


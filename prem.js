const div = document.createElement('div');
div.className = 'prem';
div.innerHTML = 'prem kumar';

const section = document.createElement('section');

// Append the div to the section
section.appendChild(div);

// Append the section to the body (or any other container element)
document.body.appendChild(section);

//console.log('append js');

// 1. where to add 
const placesList = document.getElementById('places-list');
//console.log(placesList);

// 2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3. add the child
placesList.appendChild(li);

// 1. where to add 
const mainContainer = document.getElementById('main-container');
//console.log(mainContainer);

// 2. what to be added
const section = document.createElement('section');

const h1 = document.createElement('section');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li.innerText = 'biryani';
ul.appendChild(li1);

//const ul = document.createElement('ul');
const li2 = document.createElement('li');
li.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li.innerText = 'salad';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);

// Set innerHTML directly

section.innerHTML = `
    <h1>My Dress Section</h1>
    <ul>
        <li>T-shirt</li>
        <li>Lungi</li>
        <li>Sando-gengi</li>
    </ul>
`
mainContainer.appendChild(sectionDress);
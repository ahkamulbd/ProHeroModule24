const sections = document.querySelectorAll('section');
//console.log(sections);

for (const section of sections) {
    //console.log(section);
    section.style.border = '2px solid lightblue';
    section.style.marginBottom = '5px';
    section.style.margin = '20px';
    section.style.borderRadius = '15px';
    section.style.padding = '15px';
    section.style.backgroundColor = 'lightgreen';
}

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow';

placesContainer.classList.add('yellow-bg');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');
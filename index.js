const techList = [
    ['HTML','html5.svg'],
    ['CSS', 'css3.svg'],
    ['JavaScript', 'js.svg'],
    ['React', 'react.svg'],
    ['MySQL', 'mysql.svg'],
    ['MongoDB', 'mongodb.svg'],
    ['Firebase', 'firebase.svg'],
    ['Flutter', 'flutter.svg'],
    ['Django', 'django.svg'],
    ['Express', 'express.svg'],
    ['NodeJS', 'nodejs.svg'],
    // ['Git', 'git.svg'],
    // ['Docker', 'docker.svg'],
    ['GraphQL', 'graphql.svg'],
    ['Scikit-Learn','sklearn.svg'],
    ['Keras', 'keras.svg'],
    ['Figma', 'figma.svg'],
    ['Photoshop', 'ps.svg']
]

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

const techListElement = document.getElementById('tech-list');

techList.forEach(([techName, techUrl]) => {
    const tech = document.createElement('img');
    tech.src = `images/technologies/${techUrl}`;
    tech.setAttribute('data-toggle', 'tooltip');
    tech.setAttribute('data-placement', 'bottom');
    tech.setAttribute('title', techName);
    techListElement.appendChild(tech);
})
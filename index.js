const techList = [
    ["HTML", "html5.svg"],
    ["CSS", "css3.svg"],
    ["JavaScript", "js.svg"],
    ["React", "react.svg"],
    ["MySQL", "mysql.svg"],
    ["MongoDB", "mongodb.svg"],
    ["Firebase", "firebase.svg"],
    ["Flutter", "flutter.svg"],
    ["Django", "django.svg"],
    ["Express", "express.svg"],
    ["NodeJS", "nodejs.svg"],
    // ['Git', 'git.svg'],
    // ['Docker', 'docker.svg'],
    ["GraphQL", "graphql.svg"],
    ["Scikit-Learn", "sklearn.svg"],
    ["Keras", "keras.svg"],
    ["Figma", "figma.svg"],
    ["Photoshop", "ps.svg"],
];

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

const techListElement = document.getElementById("tech-list");

techList.forEach(([techName, techUrl]) => {
    const tech = document.createElement("img");
    tech.src = `images/technologies/${techUrl}`;
    tech.setAttribute("data-toggle", "tooltip");
    tech.setAttribute("data-placement", "bottom");
    tech.setAttribute("title", techName);
    tech.alt = techName;
    techListElement.appendChild(tech);
});

// Contact form stuff

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
        })
        .catch((error) => {
            status.innerHTML = "Oops! There was a problem submitting your form";
        });
}
form.addEventListener("submit", handleSubmit);

// Back to top button
$(document).ready(function () {
    // scroll body to 0px on click
    $("#back-to-top").click(function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            400
        );
        return false;
    });
});

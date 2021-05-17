//menu mobile
const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('nav-bar');

toggleButton.addEventListener('click', show);

function show() {
    navbar.classList.toggle('active');
}


//animation du texte avec la librairie : https://unpkg.com/typewriter-effect@latest/dist/core.js
const textAnim = document.querySelector('.titre');
new Typewriter(textAnim,{
loop: true,  //pour faire la boucle
deleteSpeed: 70 //temps d'écriture
}) 
.changeDelay(150) //pour changer la vitesse entre les textes
.typeString('Fashion Clothes') //le texte qui va être animé
//.typeSring('Des vêtements top')
.pauseFor(800)
.deleteChars(15) //sert à supprimer le texte
.typeString('<span style="color : red">Des vêtements fashion</span>')
.pauseFor(800)
.start()



//Card animée
const card1 = document.querySelector('.card_inner1');
const card2 = document.querySelector('.card_inner2');
const card3 = document.querySelector('.card_inner3');
const card4 = document.querySelector('.card_inner4');
const card5 = document.querySelector('.card_inner5');
const card6 = document.querySelector('.card_inner6');


card1.addEventListener('mouseenter', function () {
    card1.classList.toggle('is-flipped');
});

card2.addEventListener('mouseenter', function () {
    card2.classList.toggle('is-flipped');
    });

    card3.addEventListener('mouseenter', function () {
        card3.classList.toggle('is-flipped');
        });

        card4.addEventListener('mouseenter', function () {
            card4.classList.toggle('is-flipped');
            });

            card5.addEventListener('mouseenter', function () {
                card5.classList.toggle('is-flipped');
                });

                card6.addEventListener('mouseenter', function () {
                    card6.classList.toggle('is-flipped');
                    });


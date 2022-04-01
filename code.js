const menu=document.getElementById("menu");

function closemenu(){
    menu.style.top ="-100vh";
} 

function openmenu(){
    menu.style.top ="0";
}

let lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    $('header').addClass('scrollVersBas');
    $('texte').addClass('scrollVersBas');
   } else {
    $('header').removeClass('scrollVersBas');
    $('texte').removeClass('scrollVersBas');
   }
   if (st > 0){
    $('header').addClass('couleurScroll');
    $('texte').addClass('couleurScroll');
   } else {
    $('header').removeClass('couleurScroll');
    $('texte').removeClass('couleurScroll');
   }
   lastScrollTop = st;  
});

/** Ici la méthode addEventListener est appliquée à l'élément qui a pour ID 'survol' */
document.getElementById('ImageGmail').addEventListener('mouseenter',
/** cette méthode comprends la détection de l'événement ici onmouseenter pour un survol et une fonction qui va déterminenr l'action à effectuer lorsque l'événement est détecté*/
function(){
/* cette fonction indique de changer le style par l'attribut style de la balise concernnée- ici l'élément ayant pour id 'change'*/
document.getElementById('texteGmail').setAttribute('style', 'color:white;opacity:1;position:absolute;top:17vw;font-size:1.5vw;left:36vw');

}
,false);

document.getElementById('ImageGmail').addEventListener('mouseout',
function(){
    document.getElementById('texteGmail').setAttribute('style', 'color:white;opacity:0;position:absolute;top:17vw;font-size:1.5vw;left:36vw');
}
,false);


document.getElementById('ImageDiscord').addEventListener('mouseenter',
function(){
document.getElementById('texteDiscord').setAttribute('style', 'color:white;opacity:1;position:absolute;top:17vw;font-size:1.5vw;left:49.5vw');
}
,false);

document.getElementById('ImageDiscord').addEventListener('mouseout',
function(){
    document.getElementById('texteDiscord').setAttribute('style', 'color:white;opacity:0;position:absolute;top:17vw;font-size:1.5vw;left:36vw');
}
,false);

const form=document.querySelector(".contact_form");

function envoieMessage(e){
    e.preventDefault();
    const mail=document.querySelector(".mail");
    const msg=document.querySelector(".msg");

    Email.send({
        SecureToken : "34f8ae09-796b-4320-88ea-ff825d4379ac",
        To : 'anthonyverdon10@gmail.com',
        From : email.value,
        Subject : "message portfolio",
        Body : msg.value
    }).then(
    message => alert(message)
);
}

form.addEventListener('boutonSuggestion',envoieMessage)
/* fonction pour ouvrir le menu */

const menu=document.getElementById("menu");

function closemenu(){
    menu.style.top ="-100vh";
} 

function openmenu(){
    menu.style.top ="0";
}


/* fonction pour changer la couleur de la barre menu */


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


/* fonction traduction site en français */


function traductionFrancais(){
    //texte
    const texteAnglais=document.getElementsByClassName("anglais");
    $(texteAnglais).removeClass('affiche');
    $(texteAnglais).addClass('efface');
    const texteFrançais=document.getElementsByClassName("francais");
    $(texteFrançais).removeClass('efface');
    $(texteFrançais).addClass('affiche');

    //bouton
    const drapeauAnglais=document.getElementsByClassName("drapeauAnglais");
    const drapeauAnglaisAssombri=document.getElementsByClassName("drapeauAnglaisAssombri");
    $(drapeauAnglais).removeClass('affiche');
    $(drapeauAnglais).addClass('efface');
    $(drapeauAnglaisAssombri).removeClass('efface');
    $(drapeauAnglaisAssombri).addClass('affiche');
    const drapeauFrançais=document.getElementsByClassName("drapeauFrançais");
    const drapeauFrançaisAssombri=document.getElementsByClassName("drapeauFrançaisAssombri");
    $(drapeauFrançaisAssombri).removeClass('affiche');
    $(drapeauFrançaisAssombri).addClass('efface');
    $(drapeauFrançais).removeClass('efface');
    $(drapeauFrançais).addClass('affiche');
}


/* fonction traduction site en anglais */
 

function traductionAnglais(){
    const texteAnglais=document.getElementsByClassName("anglais");
    $(texteAnglais).removeClass('efface');
    $(texteAnglais).addClass('affiche');
    const texteFrançais=document.getElementsByClassName("francais");
    $(texteFrançais).removeClass('affiche');
    $(texteFrançais).addClass('efface');

    //bouton
    const drapeauAnglais=document.getElementsByClassName("drapeauAnglais");
    const drapeauAnglaisAssombri=document.getElementsByClassName("drapeauAnglaisAssombri");
    $(drapeauAnglaisAssombri).removeClass('affiche');
    $(drapeauAnglaisAssombri).addClass('efface');
    $(drapeauAnglais).removeClass('efface');
    $(drapeauAnglais).addClass('affiche');
    const drapeauFrançais=document.getElementsByClassName("drapeauFrançais");
    const drapeauFrançaisAssombri=document.getElementsByClassName("drapeauFrançaisAssombri");
    $(drapeauFrançais).removeClass('affiche');
    $(drapeauFrançais).addClass('efface');
    $(drapeauFrançaisAssombri).removeClass('efface');
    $(drapeauFrançaisAssombri).addClass('affiche');
}

traductionFrancais()//on fait un appel pour que, quand on charge la page, on soit sur la version française


/* fonctions pour l'affichage du discord et du mail dans le footer */


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


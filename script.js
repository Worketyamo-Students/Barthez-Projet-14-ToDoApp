/* -------------------- RECUPERATION DES CONSTANTES HTML -------------------- ** -------------------------------------------------------------------------- */
const containeur = document.querySelector(".containeur");
const lightMode = document.querySelector("#lightMode");
const inputForm = document.querySelector("#input");
const inputBox = inputForm.querySelector("input");
const listTache = document.querySelector("#list");
const liItems = listTache.querySelectorAll("li");
const SortTools = document.querySelector("#SortTools");
const leftNb = SortTools.querySelector("#nbs");
const selectAll = SortTools.querySelector(".all");
const selectActive = SortTools.querySelector(".active");
const selectCompleted = SortTools.querySelector(".copleted");
const clearAll = SortTools.querySelector(".clear");
const completedAll = SortTools.querySelector(".completedAll");


/* ------------- DEFINITION DES VARIABLES ET CONSTANTES GLOBALES ------------ */


/* ------------------------- GESTION DES EVENEMENTS ------------------------- ** -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', ()=>{
    const taches = JSON.parse(localStorage.getItem('taches')) || [];
    taches.forEach(tache => {
        AjouterTacheAListe(tache);
    });
    leftNb.innerHTML = taches.length;
});

inputForm.addEventListener("submit", ()=>{
    let tache = inputBox.value;
    AjouterTacheTableau(tache);
    window.location.reload();
})

/*
liItems.forEach((item)=>{
    const completeItem = item.querySelector("#completeBtn");
    const deleteItem = item.querySelector("#deleteBtn");

    completeItem.addEventListener("click", ()=>{
        item.classList.toggle("completed");
    })
})
*/

//  VIDER LA LISTE DES TACHES AVEC LE BOUTON CLEAR
clearAll.addEventListener('click', ()=>{
    emptyTaches();
    emptyList();
})


//  CHANGER LE LIGHT ET LE DARK MODE
lightMode.addEventListener('click', ()=>{
    changeLightMode();
})


/* ------------------------ DEFINITION DES FONCTIONS ------------------------ ** -------------------------------------------------------------------------- */

// Ajouter une tache a l'element de liste
function AjouterTacheTableau(tache){
    if(tache.length > 0){
        inputBox.value = '';
        
        // sauvegarder les taches dans le localStorage
        const taches = JSON.parse(localStorage.getItem('taches')) || [];
        taches.unshift(tache);
        localStorage.setItem('taches', JSON.stringify(taches));
    }
}

// AJouter une tache a la liste;
function AjouterTacheAListe(texte){
    const listItem = document.createElement('li');
    listItem.classList = "item";
    listItem.innerHTML = `<div class="left">
                <button class="btn" id="completeBtn"> 
                    <img src="./tick.png" alt="">
                </button>
                <span class="text">
                    ${texte}
                </span>
            </div>
           
            <button class="right" id="deleteBtn">
                <img src="./delete.svg" alt="">
            </button>
    `;

    listTache.appendChild(listItem);
}

function emptyTaches(){
    taches = [];
    localStorage.setItem('taches', JSON.stringify(taches));
    window.location.reload();
}

function changeLightMode(){
    containeur.classList.toggle("dark");
}
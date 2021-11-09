// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//const id pagina
const numPag = document.getElementById("num-gen");
const cont = document.getElementById("container");


//generaione 5 numeri non ripeturi
const numeri = [];
while(numeri.length < 5){
    const numGen = Math.floor(Math.random() * 100) + 1;

    let verifica = numeri.includes(numGen);
    if (verifica == false){
        numeri.push(numGen)
    }    
}
numPag.innerHTML += numeri;
console.log("i numeri generati sono: ",numeri);

setTimeout(() => {
    cont.style.display = "none"
}, 800)

//delay di 30 secondi
setTimeout(() => {
    
    const numUser = [];
    //inserimento dei numeri da parte di user
    numeri.forEach((userIn) => {
        //apparizione promt
        userIn = parseInt(prompt("inserire uno dei 5 numeri mostrati"));
        numUser.push(userIn)
    });
    console.log("l'array di numeri dell'utente è: ",numUser);
    //confronto dei numeri inseriti e quelli generati
    const risult = numeri.filter((base) => {
        if(numUser.includes(base)){
            return base;
        }
    });
    //risultato 
    cont.style.display = "block";
    numPag.innerHTML = risult ,",";
    console.log("i numeri che combaciano sono: ",risult);
}, 1000)

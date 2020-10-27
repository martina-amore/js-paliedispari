// CHIEDO ALL'UTENTE DI SCEGLIERE TRA PARI O DISPARI
var podUtente = prompt("Scegli pari o dispari: scrivi 1 se scegli dispari, 2 se scegli pari");
// SE L'UTENTE NON INSERISCE 1 O 2 PER SCEGLIERE, IL PROGRAMMA NON VA AVANTI E CONTINUA A CHIEDERE ALL'UTENTE DI INSERIRE 1 O 2
while (podUtente < 1 || podUtente > 2) {
    podUtente = parseInt(prompt("Hai inserito un numero non valido. Scrivi 1 se scegli dispari, 2 se scegli pari:"));
}

// SE L'UTENTE INSERISCE PARI, LA CONDIZIONE E' VERA, ALTRIMENTI E' FALSA
var podIsEven;
if (podUtente % 2 == 0) {
    podIsEven = true;
}
else {
    podIsEven = false;
}

// CHIEDO ALL'UTENTE DI SCEGLIERE UN NUMERO TRA 1 E 5
var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 5:"));
// SE L'UTENTE NON INSERISCE UN NUMERO TRA 1 E 5, IL PROGRAMMA NON VA AVANTI E CONTINUA A CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO TRA 1 E 5
while (numeroUtente < 1 || numeroUtente > 5) {
    numeroUtente = parseInt(prompt("Hai inserito un numero non valido. Inserisci un numero compreso tra 1 e 5:"));
}

// STAMPO IL NUMERO SCELTO
document.getElementById("utente").innerHTML = "Hai scelto il numero " + numeroUtente;

// FUNZIONE PER CREARE UN NUMERO CASUALE
function numeroRandom(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FACCIO LA SOMMA TRA IL NUMERO UTENTE E IL NUMERO CASUALE, RICHIAMANDO LA FUNZIONE, E LA STAMPO
var somma = numeroUtente + numeroRandom(1, 5);
document.getElementById("totale").innerHTML = "La somma del numero che hai scelto e del numero generato dal computer è " + somma;

// FUNZIONE PER STABILIRE SE LA SOMMA E' PARI O DISPARI
var sumIsEven;
function pariODispari(val1) {
    // SE LA SOMMA E' PARI, IL VALORE E' VERO, ALTRIMENTI FALSO
    if (val1 % 2 == 0) {
        sumIsEven = true;
    }
    else {
        sumIsEven = false;
    }
    return sumIsEven;
}

// RICHIAMO LA FUNZIONE DELLA SOMMA PARI O DISPARI
pariODispari(somma);

// SE L'UTENTE HA SCELTO PARI E LA SOMMA E' PARI, STAMPO CHE L'UTENTE HA VINTO
if (podIsEven == true && sumIsEven == true) {
    document.getElementById("finale-pod").innerHTML = "Hai scelto pari e la somma è pari, quindi hai vinto!";
}
// SE L'UTENTE HA SCELTO DISPARI E LA SOMMA E' PARI, STAMPO CHE IL COMPUTER HA VINTO
else if (podIsEven == false && sumIsEven == true) {
    document.getElementById("finale-pod").innerHTML = "Hai scelto dispari e la somma è pari, quindi ha vinto il computer";
}
// SE L'UTENTE HA SCELTO PARI E LA SOMMA E' DISPARI, STAMPO CHE IL COMPUTER HA VINTO
else if (podIsEven == true && sumIsEven == false) {
    document.getElementById("finale-pod").innerHTML = "Hai scelto pari e la somma è dispari, quindi ha vinto il computer";
}
// SE L'UTENTE HA SCELTO DISPARI E LA SOMMA E' DISPARI, STAMPO CHE L'UTENTE HA VINTO
else {
    document.getElementById("finale-pod").innerHTML = "Hai scelto dispari e la somma è dispari, quindi hai vinto!";
}

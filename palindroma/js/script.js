// // PRIMO METODO: SPLIT-REVERSE-JOIN
// // CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
// var parola = prompt("Inserisci una parola");
// var risultato;
//
// // CREO UNA FUNZIONE PER CAPIRE SE LA PAROLA E' PALINDROMA
// function palindroma(word) {
//     // DIVIDO LA PAROLA IN CARATTERI
//     var splitParola = word.split("");
//     // SISTEMO I CARATTERI AL CONTRARIO
//     var reverseParola = splitParola.reverse();
//     // UNISCO I CARATTERI AL CONTRARIO IN UN'UNICA PAROLA
//     var joinParola = reverseParola.join("");
//     // STABILISCO LA CONDIZIONE PER CUI, SE LA PAROLA INIZIALE
//     // E' UGUALE ALLA PAROLA FORMATA DAI CARATTERI AL CONTRARIO, QUINDI SE E'
//     // PALINDROMA, LA CONDIZIONE RISULTA VERA, ALTRIMENTI FALSA
//     if (word == joinParola) {
//         risultato = true;
//     }
//     else {
//         risultato = false;
//     }
//     return risultato;
// }
//
// // RICHIAMO LA FUNZIONE
// palindroma(parola);
//
// // STABILISCO LA CONDIZIONE PER CUI, SE LA PAROLA E' PALINDROMA,
// // STAMPO CHE LO E', ALTRIMENTI CHE NON LO E'
// if (risultato == true) {
//     document.getElementById("risultato").innerHTML = parola + " è una parola palindroma";
// }
//
// else {
//     document.getElementById("risultato").innerHTML = parola + " non è una parola palindroma";
// }


// SECONDO METODO: CICLO FOR
// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
var parola = prompt("Inserisci una parola");

// CREO UNA FUNZIONE PER CAPIRE SE LA PAROLA E' PALINDROMA
var risultato;
function palindroma(word) {
    // DEFINISCO LA VARIABILE REVERSE COME VUOTA
    var reverseParola = "";
    // INSTAURO UN CICLO FOR CHE VA AVANTI FINO A QUANDO NON ESAURISCO I CARATTERI DELLA PAROLA
    for (var i = word.length - 1; i >= 0; i--){
        reverseParola += word[i];
    }
    // STABILISCO LA CONDIZIONE PER CUI, SE LA PAROLA INIZIALE
    // E' UGUALE ALLA PAROLA FORMATA DAI CARATTERI AL CONTRARIO, QUINDI SE E'
    // PALINDROMA, LA CONDIZIONE RISULTA VERA, ALTRIMENTI FALSA
    if (word == reverseParola) {
        risultato = true;
    }
    else {
        risultato = false;
    }
    return risultato;
}

// RICHIAMO LA FUNZIONE
palindroma(parola);

// STABILISCO LA CONDIZIONE PER CUI, SE LA PAROLA E' PALINDROMA,
// STAMPO CHE LO E', ALTRIMENTI CHE NON LO E'
if (risultato == true) {
    document.getElementById("risultato").innerHTML = parola + " è una parola palindroma";
}

else {
    document.getElementById("risultato").innerHTML = parola + " non è una parola palindroma";
}

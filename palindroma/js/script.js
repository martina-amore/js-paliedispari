// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
var parola = prompt("Inserisci una parola")

// CREO UNA FUNZIONE PER CAPIRE SE LA PAROLA E' PALINDROMA
function palindroma() {
    // DIVIDO LA PAROLA IN CARATTERI
    var splitParola = parola.split("");
    // SISTEMO I CARATTERI AL CONTRARIO
    var reverseParola = splitParola.reverse();
    // UNISCO I CARATTERI AL CONTRARIO IN UN'UNICA PAROLA
    var joinParola = reverseParola.join("");
    // STABILISCO LA CONDIZIONE PER CUI, SE LA PAROLA INIZIALE
    // E' UGUALE ALLA PAROLA FORMATA DAI CARATTERI AL CONTRARIO,
    // VIENE STAMPATO UN MESSAGGIO CHE DICE CHE LA PAROLA E' PALINDROMA,
    // ALTRIMENTI NON LO E'
    if (parola == joinParola) {
        document.getElementById("risultato").innerHTML = parola + " è una parola palindroma"
    }
    else {
        document.getElementById("risultato").innerHTML = parola + " non è una parola palindroma"
    }
}

// RICHIAMO LA FUNZIONE
palindroma ();

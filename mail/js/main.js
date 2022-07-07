let email = (prompt('Inserisci la tua email'));

let trovato = 'no';
const indirizzo = ['ste.morgia@gmail.com', 'ciao@gmail.com', 'pluto93@gmail.com', 'jacopotoptutor@libero.it', 'alessiobosstutor@hotmail.it'];

for ( let i = 0; i < indirizzo.length; i++) {
    
    if (email == indirizzo[i]) {
        
        trovato = 'si'
    }
    console.log("<--- ciclo " + i + " start ---->");
    console.log("email:" + email + " indirizzo[i]:"  + indirizzo[i] + " trovato " + trovato);  
    console.log("<--- ciclo " + i + " end ---->");
    console.log(" ");
}
if ( trovato = 'no') {
    alert('non trovato')
} else {
    alert('trovata')
}


// giro 1

// giro 2
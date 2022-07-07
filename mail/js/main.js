let email = (prompt('Inserisci la tua email'));
console.log(email);
const indirizzo = ['ste.morgia@gmail.com', 'ciao@gmail.com', 'pluto93@gmail.com', 'jacopotoptutor@libero.it', 'alessiobosstutor@hotmail.it'];
console.log(indirizzo[0]);
for ( let i = 0; i < indirizzo.length; i++) {
    console.log(indirizzo[i]);
    if (email == indirizzo[i]) {
        alert('La mail inserita è corretta')
    } else {
        alert('Non sei invitato alla mensa del Signore')
    }
}

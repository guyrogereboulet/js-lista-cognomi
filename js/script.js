// 1) Chiedi all’utente il cognome,
var cognome = prompt("Digita il tuo cognome")
// 2) inseriscilo in un array con altri cognomi,
var listaCognomi = ["rossi","ferrari","orlandi","clementi","fabi","distefano","altamura"]
listaCognomi.push(cognome)
// ordinamento
listaCognomi.sort();
// 3) stampa la lista ordinata alfabeticamente (in html ul > li).
for (var i = 0; i < listaCognomi.length; i++) {
  console.log(listaCognomi[i]);
  document.getElementById('lista').innerHTML += '<li>' + listaCognomi[i] + '</li>';
}
// 4) Scrivi anche la posizione della lista in cui il nuovo utente si trova.
 // var ordineLista = (indexOf(cognome) + 1);
console.log(listaCognomi.indexOf(cognome)+1);
document.getElementById('risultato').innerHTML = "la posizione del tuo cognome è " + (listaCognomi.indexOf(cognome)+1);

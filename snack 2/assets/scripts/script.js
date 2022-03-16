let word1 = prompt("Inserisci la prima parola");
let word2 = prompt("Inserisci la seconda parola");

if(word1.length > word2.length){
    alert(`La parola più lunga è "${word1}". La parola più corta è "${word2}"`);
}
else if(word1.length < word2.length){
    alert(`La parola più lunga è "${word2}". La parola più corta è "${word1}"`);
}
else{
    alert(`Le parole "${word1}" e "${word2}" hanno la stessa lunghezza`);
}
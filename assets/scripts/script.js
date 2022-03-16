let num1 = prompt("Inserisci il primo numero");
let num2 = prompt("Inserisci il secondo numero");

if (isNaN(num1) || isNaN(num2)) {
    alert("Non hai inserito dei numeri");
}
else {
    if (num1 > num2) {
        alert(`Il numero più grande è il primo (${num1})`);
    }
    else if (num1 < num2) {
        alert(`Il numero più grande è il secondo (${num2})`);
    }
    else {
        alert("I due numeri sono uguali!");
    }
}
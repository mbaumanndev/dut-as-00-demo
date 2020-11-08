var maVariable = "mon texte";

maVariable = 1;

console.log(maVariable);

for (i = 0; i < 10; i++) {

}

var var1 = 1;
var var2 = "1";

console.log(var1 == var2) // true
console.log(var1 === var2) // false

var madiv = document.getElementById('madiv');
madiv.innerText = "Mon contenu JS";

var paragraph = document.createElement('p');
paragraph.innerHTML = "Mon texte <b>avec du HTML</b>";

paragraph.addEventListener("click", function click() {
    var texte = prompt("Quel est ton nom ?", "Michel");
    alert("Bonjour " + texte + " !")
})

document.body.appendChild(paragraph)

var input = document.getElementById("input")
input.addEventListener("blur", function blur() {
    alert(input.value)
})

var p2 = document.createElement("p")
p2.innerText = "Click";
p2.addEventListener("click", function click() {
    if (!p2.classList.contains("clicked"))
        p2.classList.add("clicked")
    else
        p2.classList.remove("clicked");
})
document.body.appendChild(p2)

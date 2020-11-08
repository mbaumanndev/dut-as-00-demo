window.addEventListener("load", function load() {
    const form = document.getElementById("form")
    const login = document.getElementById("login")
    const loginhint = document.getElementById("loginhint")
    const email = document.getElementById("email")
    const emailhint = document.getElementById("emailhint")
    const pass = document.getElementById("pass")
    const passhint = document.getElementById("passhint")
    const verif = document.getElementById("verif")
    const verifhint = document.getElementById("verifhint")
    const submit = document.getElementById("submit")
    const reset = document.getElementById("reset")

    // On ne place pas les événements sur les boutons,
    // directement sur le formulaire 
    form.addEventListener("submit", function submit(e) {
        if (login.value.length < 3) {
            e.preventDefault();
            loginhint.innerText = "Le login doit faire plus de 3 caractères";
        }

        if (email.value.length === 0) {
            e.preventDefault();
            emailhint.innerText = "Veuillez saisir un email";
        }

        if (pass.value.length === 0) {
            e.preventDefault()
            passhint.innerText = "Saisissez un pass";
        }

        if (verif.value !== pass.value) {
            e.preventDefault()
            verifhint.innerText = "Les pass sont différents"
        }
    });

    form.addEventListener("reset", function reset() {
        loginhint.innerText = null
        emailhint.innerText = null
        passhint.innerText = null
        verifhint.innerText = null
    })
});

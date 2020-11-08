window.addEventListener("load", function load() {
    var form = document.getElementById("form");
    var count = document.getElementById("count");
    var message = document.getElementById("body"); // textarea message
    var maxSize = 10;

    count.innerText = maxSize;

    message.addEventListener("keyup", function keyup(e) {
        count.innerText = Math.max(maxSize - message.value.length, 0);
    })

    form.addEventListener("reset", function reset() {
        count.innerText = maxSize;
    })

    form.addEventListener("submit", function submit(e) {
        // par classe
        // var fields = form.getElementsByClassName("field")
        // console.log(fields)

        var cc = document.getElementById("cc");

        if (cc.value === '') {
            e.preventDefault();
            return false;
        }

        if (message.value === '') {
            e.preventDefault();
            return false;
        }

        if (maxSize - message.value.length < 0) {
            e.preventDefault();
            return false;
        }
    })
});

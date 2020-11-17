$(function() {
    const $form = $('#form')
    const $login = $('#login')
    const $loginhint = $('#loginhint')
    const $email = $('#email')
    const $emailhint = $('#emailhint')
    const $pass = $('#pass')
    const $passhint = $('#passhint')
    const $verif = $('#verif')
    const $verifhint = $('#verifhint')
    const $submit = $('#submit')
    const $reset = $('#reset')
    const $hints = $('.hint')
    
    $hints.hide();

    $form.on('submit', function submit(e) {
        if ($login.val().length < 3) {
            e.preventDefault();
            $loginhint
                .text("Le login doit faire plus de 3 caractères")
                .show(2000, function complete() {
                    $submit.attr('disable', 'disable')
                });
        }

        if ($email.val() === '') {
            e.preventDefault();
            $emailhint.text("Veuillez saisir un email");
        }

        if ($pass.val() === '') {
            e.preventDefault()
            $passhint.text("Saisissez un pass");
        }

        if ($verif.val() !== $pass.val()) {
            e.preventDefault()
            $verifhint.text("Les pass sont différents");
        }
    })

    $form.on("reset", function reset() {
        $loginhint.text('');
        $emailhint.text('');
        $passhint.text('');
        $verifhint.text('');
        $hints.hide();
    })

    $('a').on('click', function click(e) {
        e.preventDefault();

        const $div = $('<div style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; color: white; background: black;">Mon contenu dynamique</div>');
        $div.hide();

        $('body').append($div);
        $('body').css({position: 'relative'});

        $div.show();

        $div.on('click', function click() {
            $div.remove();
        })
    })
});
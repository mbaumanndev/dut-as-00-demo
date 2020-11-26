import $ from 'jquery';

$(function () {
    $('.no-js').removeClass('no-js');

    const $abort = $('#abort');
    const $next = $('#next');
    const $step1 = $('#step1');
    const $step2 = $('#step2');
    const $abortpart2 = $('#abortpart2')
    const $prev = $('#prev');
    const $register = $('#register')

    function doesMandatoryFieldsHaveErrors() {
        let hasErrors = false;

        $step1.find('.hint').hide();

        $step1.find('input').each(function () {
            // Si erreur -> hasErrors = true
            const $this = $(this);

            if ($this.attr('data-minlength') && $this.val().length < $this.attr('data-minlength')) {
                hasErrors = true;
                $this.next('[data-hint=minlength]').show();
            }

            if ($this.attr('data-equalsto') && $this.val() !== $('#' + $this.attr('data-equalsto')).val()) {
                hasErrors = true;
                $this.nextAll('[data-hint=equalsto]').show();
            }

            if ($this.attr('data-maxyear') && $this.val() && $this.val().split('-')[0] > $this.attr('data-maxyear')) {
                hasErrors = true;
                $this.nextAll('[data-hint=maxyear]').show();
            }
        })

        return hasErrors;
    }

    function goOnFirstForm() {
        $step2.hide();
        $step1.show();
    }

    $register.on('submit', function (e) {
        e.preventDefault();

        if (!doesMandatoryFieldsHaveErrors()) {
            alert('Bienvenue sur notre site !');
        } else {
            goOnFirstForm();
        }

        return false;
    })

    $abort.on('click', function(e) {
        e.preventDefault();

        $step1.find('input').val(undefined);

        return false;
    });
    $abortpart2.on('click', function (e) {
        e.preventDefault();

        $step2.find('input,select').val(undefined);

        return false;
    })

    $next.on('click', function (e) {
        e.preventDefault();

        if (!doesMandatoryFieldsHaveErrors()) {
            $step1.hide();
            $step2.show();
        }

        return false;
    })
    $prev.on('click', function (e) {
        e.preventDefault();

        goOnFirstForm();

        return false;
    })
});

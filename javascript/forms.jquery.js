import $ from 'jquery'; // On charge jQuery depuis les dépendances NPM

// On attend le chargement de la page pour éxécuter le code
$(function () {
    // On retire la classe "no-js" pour rétablir le comportement CSS standard
    $('.no-js').removeClass('no-js');

    // On garde une référence sur chaque élément nous intéressant
    const $abort = $('#abort');
    const $next = $('#next');
    const $step1 = $('#step1');
    const $step2 = $('#step2');
    const $abortpart2 = $('#abortpart2')
    const $prev = $('#prev');
    const $register = $('#register')

    /**
     * Vérifie si les champs obligatoires contiennents des erreurs
     */
    function doesMandatoryFieldsHaveErrors() {
        let hasErrors = false;

        // On cache les hints
        $step1.find('.hint').hide();

        // Pour chaque champ, on déroule le code de vérification
        $step1.find('input').each(function () {
            // Si erreur -> hasErrors = true
            const $this = $(this);

            // On check l'attribut data-minlength du champ courant
            if ($this.attr('data-minlength') && $this.val().length < $this.attr('data-minlength')) {
                hasErrors = true;

                // Si on a une erreur, on prend le noeud de même niveau ayant un
                // attribut data-hint valant minlength situé directement après le champ
                // pour l'afficher
                $this.next('[data-hint=minlength]').show();
            }

            if ($this.attr('data-equalsto') && $this.val() !== $('#' + $this.attr('data-equalsto')).val()) {
                hasErrors = true;
                $this.nextAll('[data-hint=equalsto]').show();
            }

            if ($this.attr('data-maxyear') && $this.val() && $this.val().split('-')[0] > $this.attr('data-maxyear')) {
                hasErrors = true;
                
                // Si on a une erreur, on prend le noeud de même niveau ayant un
                // attribut data-hint valant maxyear situé maxyear ou non après le champ
                // pour l'afficher
                $this.nextAll('[data-hint=maxyear]').show();
            }
        })

        return hasErrors;
    }

    function goOnFirstForm() {
        $step2.hide();
        $step1.show();
    }

    // On déclenche un événement au submit du formulaire
    $register.on('submit', function (e) {
        e.preventDefault();

        // Si on a une seule erreur sur un champ obligatoire, on affiche la première étape
        // Sinon c'est que l'inscription est bien prise en compte
        if (!doesMandatoryFieldsHaveErrors()) {
            alert('Bienvenue sur notre site !');
        } else {
            goOnFirstForm();
        }

        return false;
    })

    // Pour le bouton annuler de la premmière étape,
    // on remet les inputs à une valeur non définie
    $abort.on('click', function(e) {
        e.preventDefault();

        $step1.find('input').val(undefined);

        return false;
    });
    // Pour la seconde étape, il faut prendre en compte les select
    // Mais on pourrait être plus exhaustifs en rajoutant d'autres champs
    $abortpart2.on('click', function (e) {
        e.preventDefault();

        $step2.find('input,select').val(undefined);

        return false;
    })

    // Pour passer à la seconde partie du formulaire, il faut
    // déjà que la première soit valide en tout points
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

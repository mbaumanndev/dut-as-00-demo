$(function () {
    const $body = $('body');

    if ($.cookie('modal-closed') === undefined) {
        let modal = '<div class="modal-overlay">';
        modal += '<div class="modal">';
        modal += '<button type="button">Fermer</button>';
        modal += '<p>Notre contenu pour inciter à s\'inscrire</p>';
        modal += '</div>';
        modal += '</div>';

        const $modal = $(modal).appendTo($body);
        const $button = $modal.find('button');

        function hideModal(e) {
            if (e.target === $modal.get(0) || e.target === $button.get(0)) {

                $.cookie('modal-closed', true)

                $modal.remove();
            }
        }

        $modal.on('click', hideModal);
        $button.on('click', hideModal);
    }
})
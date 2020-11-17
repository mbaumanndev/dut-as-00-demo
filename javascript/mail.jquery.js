$(function () {
    var $form = $('#form');
    var $count = $('#count');
    var $message = $('#body')
    var maxSize = 150;

    $count.text(maxSize);

    $message.on('keyup', function keyup(e) {
        $count.text(Math.max(maxSize - $message.val().length, 0));
    });

    $form.on('reset', function reset() {
        $count.text(maxSize)
    })

    $form.on('submit', function submit(e) {
        // par classe
        // var $fields = $form.find('.field')
        // console.log($fields)

        var $cc = $('#cc')

        if ($cc.val() === '') {
            e.preventDefault();
            return false;
        }

        if ($message.val() === '') {
            e.preventDefault();
            return false;
        }

        if (maxSize - $message.val().length < 0) {
            e.preventDefault();
            return false;
        }
    })
});

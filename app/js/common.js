/*
 * Set active / non-active items
 */

const $toggle_class_items = $('.toggle-class-js');

function toggleClass($element, classes) {
    $element.toggleClass(classes);
};

$toggle_class_items.on( 'click', function () {
    toggleClass($(event.currentTarget), $(event.currentTarget).data('js-toggleclass'));
});

/*
 * Flash Messages
 */

const $flash_message = $('#flash-modal');

function customizeFlashMessage(type, msg) {
  $flash_message.find('.js-insert-text-here').text(msg);
  $flash_message.find('.js-change-img')[0].src = `../../img/icons/modal_${type}_icon.png`;
};

function toggleFlashMessage(type, msg) {

  customizeFlashMessage(type, msg);

  $flash_message.modal('toggle');

    setTimeout(function(){
        $flash_message.modal('hide');
    }, 3500);
};


/*
 * Insert URL on modal
 */

var $modals_insert_url = $('.modal-insert-url');

$modals_insert_url.on('show.bs.modal', function (event) {

    $(this).find('.btn')[0].href = event.relatedTarget.getAttribute('data-url');

});

/*
 * Flash Messages
 */

const flashMessage = {

  element: $(document.getElementById('flash-modal')),

  init: function(type, msg) {
    document.getElementsByClassName('js-flash-modal-text')[0].innerText = msg;
    document.getElementsByClassName('js-flash-modal-img')[0].src        = `../../img/icons/modal_${type}_icon.png`;
    this.show();
  },

  show: function() {
    this.element.modal('toggle');
    this.remove();
  },

  remove: function() {
    setTimeout(function(){
        this.element.modal('hide');
    }, 3500);
  }

};


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
 * Insert URL on modal
 */

var $modals_insert_url = $('.modal-insert-url');

$modals_insert_url.on('show.bs.modal', function (event) {

    $(this).find('.btn')[0].href = event.relatedTarget.getAttribute('data-url');

});

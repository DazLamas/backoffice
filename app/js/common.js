/*
 * Flash Messages
 */

const flashMessage = {

  element: document.getElementById('js-flash-msg'),

  init: function(type, msg) {
    this.element.innerText = msg;
    this.element.classList.add(`alert-${type}`);
    this.show();
  },

  show: function() {
    this.element.classList.add('show');
    this.remove(this.element);
  },

  remove: function(flashMsg) {
    setTimeout(function(){
        flashMsg.classList.remove('show');
    }, 3000, flashMsg);
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

/*
 * Flash Messages
 */
const flashMessage = {

  element : document.getElementById('js-flash-msg'),
  message : undefined,
  type    : undefined,

  init: function(type, msg) {
    this.message = msg;
    this.type    = type;
    this.create();
  },

  create: function() {
    this.element.innerText = this.message;
    this.element.classList.add(`alert-${this.type}`);
    this.show();
  },

  show: function() {
    this.element.classList.add('show');
    this.remove(this);
  },

  remove: function(thisObject) {
    setTimeout(function(){
        thisObject.element.classList.remove('show');
        thisObject.element.classList.remove(`alert-${thisObject.type}`);
    }, 2500, thisObject);
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

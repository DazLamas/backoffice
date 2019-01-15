/*
 * Menu Custom JS
 */

/*  Secondary Menu
 *  Close other submenus
 */
var $all_submenu_triggers = $('.js_submenu_trigger');

$all_submenu_triggers.click(function (e) {

  $('.js_submenu').not(this.getAttribute("href")).removeClass('show');

});

/*  Sidebar
 *  Add Collapsed styles
 *  @see https://getbootstrap.com/docs/4.0/components/collapse/
 */

$('.subsection_links').on('show.bs.collapse', function () {
    $(this).prev('.nav-item').removeClass('collapsed');
})

$('.subsection_links').on('hide.bs.collapse', function () {
    $(this).prev('.nav-item').addClass('collapsed');
})
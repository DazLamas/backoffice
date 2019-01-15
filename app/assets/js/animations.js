// /*
//  * * Additional code at _custom-animation.scss
//  */
//
// function applyAnimationsWithDelay($items, duration, delay, animation) {
//
//   animation = animation ? animation : {opacity:1};
//
//   for (var i = 0; i < $items.length; i++) {
//     $($items[i]).delay( i*delay ).animate(animation, duration, 'swing');
//   };
//
// };
//
// /*
//  * Navigation Sidebar
//  */
//
//   applyAnimationsWithDelay($('.menuItemsAnimation'), 400, 160);
//
// /*
//  * Content Animation
//  */
//
// function getAllContentBoxElements() {
//
//   var header_elements     = $('.content_wrapper > header > *');
//   var content_box         = $('.content_wrapper > .content');
//   var elements_to_animate = [];
//
//   for (var i = 0; i < header_elements.length; i++) {
//
//     elements_to_animate.push(header_elements[i]);
//
//   };
//
//   for (var i = 0; i < content_box.length; i++) {
//
//     elements_to_animate.push(content_box[i]);
//
//   };
//
//   applyAnimationsWithDelay(elements_to_animate, 750, 250);
//
// }
//
// getAllContentBoxElements();
//
//
// /*
//  * Content's List Animation ***************************************
//  *
//  * data-animation:  data.has-list
//  * list wrapper:    class.listAnimationCont & empty rule
//  * list items:      class.listAnimationItem
//  */
//
// function displayListItemsWithANimation() {
//
//   if (document.getElementsByClassName('main_container')[0] && document.getElementsByClassName('main_container')[0].dataset.animation == 'has_list') {//Prevent JS error with double condition
//
//     var listsWithItems = $('.listAnimationCont').not('.empty');
//
//     //Check if list has elements
//     if(listsWithItems.length) {
//
//       //Apply animation to each list
//       for (var i = 0; i < listsWithItems.length; i++) {
//
//         applyAnimationsWithDelay($(listsWithItems[i]).find('.listAnimationItem'), 300, 150);
//
//       }
//     }
//   }
// }
//
// function callListanimationAfterContentAppears() {
//   setTimeout(
//     function() {
//
//       displayListItemsWithANimation();
//
//     }, 1000);
// }
//
// callListanimationAfterContentAppears();
//
//
// /*
//  * Animation for numbers ******************************************
//  */
//
// // Change number format after thousend
// const numberWithDots = (x) => {
//   var parts = x.toString().split(".");
//   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//   return parts.join(".");
// }
//
// //Apply counter animation
// function displayNumberAsCounter($numberContainer) {
//
//     jQuery({ Counter: 0 }).animate({ Counter: $numberContainer.text() }, {
//       duration: 1000,
//       easing: 'swing',
//       step: function () {
//         $numberContainer.css('opacity', '1');
//         $numberContainer.text(numberWithDots(Math.ceil(this.Counter)));
//       }
//     });
// };
//
// function callCounterAfterContentAppears() {
//   setTimeout(
//     function() {
//
//     $('.js-counter').each(function () {
//       displayNumberAsCounter($(this));
//     });
//
//     }, 1000);
// };
//
// callCounterAfterContentAppears();
//
//
// /*
//  * Animation Submenus *********************************************
//  */
//
// var $collapse_parents = $('[id^="collapse"]');
//
// $collapse_parents.on('show.bs.collapse', function () {
//     applyAnimationsWithDelay($(this).children(), 430, 200);
// });
//
// $collapse_parents.on('hide.bs.collapse', function () {
//
//   var $items = $(this).children();
//
//   for (var i = 0; i < $items.length; i++) {
//     $items[i].style.opacity = 0;
//   }
//
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

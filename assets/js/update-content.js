/*
 * Update text with inputs value
 */

var $input;
var $text_displayer;


function updateText(input_text, $text_displayer){

  $text_displayer.text(input_text);

}

$('.js-watch-value').bind('input', function(event){

  $input              = $(this);
  $text_displayer     = $(".js-update-text").filter("." + $input.data('js-related'));

  updateText($input.val(), $text_displayer);




});



/*
 * Update background image
 */
var input_file = $('.js-watch-value-file')[0];

input_file.addEventListener('change', readURL, true);

function readURL(event){

  var getImagePath = URL.createObjectURL(event.target.files[0]);

  $('.js-set-image').css('background-image', 'url(' + getImagePath + ')');
}
















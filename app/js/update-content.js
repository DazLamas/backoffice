/*
 * Update text with inputs value
 */

let $input;
let $text_displayer;
const $value_watched = $('.js-watch-value');

function updateText(input_text, $text_displayer){

  $text_displayer.text(input_text);

}

//Events Listeners:
$value_watched.bind('input', function(event){

  $input              = $(this);
  $text_displayer     = $(".js-update-text").filter("." + $input.data('js-related'));

  updateText($input.val(), $text_displayer);

});



/*
 * Update background image
 */
const input_file      = $('.js-watch-value-file')[0];
const image_container = $('.js-set-image');

function readURL(event){
  image_container.css('background-image', 'url(' + URL.createObjectURL(event.target.files[0]) + ')');
};

//Events Listeners:
input_file.addEventListener('change', readURL, true);

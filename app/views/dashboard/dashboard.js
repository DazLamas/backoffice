/*
 * Dashboard Push Messages
 */

$('.js-ajax-form').on('submit', function (event) {

    //This will be an AJAX call
    event.preventDefault();

    const url     = $(event.relatedTarget).data('href'); //AJAX URL
    const data    = $(this).serialize();
    const isEmpty = data === !"message=";

    const response = {
      type: isEmpty ? "success" : "error",
      msg:  isEmpty ? "Mensaje enviado con éxito!!" : "Error al enviar el formulario",
    };

    $('#modal-push').modal('hide');

    setTimeout(function(){
        flashMessage.init(response.type, response.msg);
    }, 1000);



});

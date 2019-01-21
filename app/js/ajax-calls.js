/*
 * AJAX
 * @page my-app/custom-message
 */

$('#new-message').on('show.bs.modal', function (event) {

    var $button = $(event.relatedTarget);
    var href    = $button.data('href');
    var $modal  = $(this);

    $modal.find('#ajaxContainer').first().load(href, function() {
        $modal.find('form[name=my_app_custom_message_form]').data('target', '#new-message');
    });

});

$('#edit-message').on('show.bs.modal', function (event) {
    var $button = $(event.relatedTarget);
    var href = $button.data('href');
    var $modal = $(this);
    $modal.find('#ajaxContainer').first().load(href, function() {
        $modal.find('form[name=my_app_custom_message_form]').data('target', '#edit-message');
    });
});

$('body').on('submit', 'form[name=my_app_custom_message_form]', function (event){
    var $form = $(this);
    var $modal = $($form.data('target'));
    var $modalContent = $modal.find('#ajaxContainer');

    $.post($form.attr('action'), $form.serialize(), function (html, status, xhr) {
        if (201 === xhr.status) {
            // created
            $modal.modal('toggle');
            location.reload(true);
        } else if (204 === xhr.status) {
            // updated
            $modal.modal('toggle');
            location.reload(true);
        } else {
            $modalContent.html(html);
        }
    });

    $modalContent.find('button, input').attr('disabled', 'disabled').addClass('disabled');

    return false;
});

$('body').on('submit', 'form[name=push_notification_form]', function (event){
    var $form = $(this);
    var $modal = $($form.data('target'));
    var $modalContent = $modal.find('#ajaxContainer');

    $.post($form.attr('action'), $form.serialize(), function (html, status, xhr) {
        if (201 === xhr.status) {
            // created
            $modal.modal('toggle');
            location.reload(true);
        } else if (204 === xhr.status) {
            // updated
            $modal.modal('toggle');
            location.reload(true);
        } else {
            $modalContent.html(html);
        }
    });

    $modalContent.find('button, input').attr('disabled', 'disabled').addClass('disabled');

    return false;
});

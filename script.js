$(document).ready(function() {
    $('.portfolio-item').click(function() {
        var title = $(this).data('title');
        var description = $(this).data('description');
        
        $('#modal-title').text(title);
        $('#modal-description').text(description);
        $('#modal').css('display', 'block');
    });

    $('.close').click(function() {
        $('#modal').css('display', 'none');
    });

    $(window).click(function(event) {
        if ($(event.target).is('#modal')) {
            $('#modal').css('display', 'none');
        }
    
        
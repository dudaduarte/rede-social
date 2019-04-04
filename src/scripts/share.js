$('#user-message').keyup(function() {

    if( $(this).val().length > 0 ) {
            
        $('#btn-share').attr('disabled', false);
               
    }
    
    else {
            
        $('#btn-share').attr('disabled', true);
            
    }
            
});


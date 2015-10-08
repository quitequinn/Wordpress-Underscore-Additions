jQuery( document ).ready( function( $ ) {    
    /* When all updates button is clicked */
    $( '.dashboard-item-choice' ).on( 'change', '#all_updates_on', function( e ) {
       input_var = 'on';
       if ( 'checked' == $( this ).attr( 'checked' ) ) {
           input_var = 'on';
        } else {
            input_var = 'off';   
        }
        $.post( ajaxurl, { action: 'mpsum_disable_updates', new_val: input_var, _ajax_nonce: $( '#_mpsum' ).val() }, function( response ) {
            if ( response.length > 0 ) {
                 $.each( response, function( key, value ) { 
                     $input_checkbox = $( '#' + value );
                    if ( 'checked' == $input_checkbox.attr( 'checked' ) ) {
                        $input_checkbox.removeAttr( 'checked' );
                    }
                 } );
            } else {
                $.each( jQuery( 'input.update-option' ), function() {
                    $element = jQuery( this );
                    $before = $element.siblings(':first' )
                    is_checked = $before.val();
                    if ( '' == is_checked ) {
                        $element.removeAttr( 'checked' );
                        return;
                    }
                    $element.attr( 'checked', $before.val() );
                } );
            }
            
        }, 'json');
    } );
    
    /* For when other button is clicked */
    $( "#dashboard-form" ).on( 'change', 'input', function( e ) {
         $checkbox = jQuery( this );
         checkbox_id = $checkbox.attr( 'id' );
         if ( checkbox_id == 'all_updates_on' ) {
            return;    
         }  
         
         $.each( $checkbox, function() {
             data_context = jQuery( this ).data( 'context' );
             data_action = jQuery( this ).data( 'action' );
             data_checked = jQuery( this ).attr( 'checked' );
             data_val = jQuery( this ).val();
             if ( data_checked == '' || undefined == data_checked ) {
                 data_checked = 'off';
              } else {
                data_checked = "on";  
              }
              
              $.post( ajaxurl, { action: 'mpsum_ajax_action', context: data_context, data_action: data_action, _ajax_nonce: $( '#_mpsum' ).val(), checked: data_checked, val: data_val }, function( response ) {
            } );
             
         } );
     } );
    
    
    /* Plugin / Theme Tabs */
    $( '.dashboard-plugin-theme-updates' ).on( 'click', 'a', function( e ) {
        e.preventDefault();
        tag_action = jQuery( this ).attr( 'data-tab-action' );
        if ( tag_action == 'plugins' ) {
            $( '.dashboard-tab-themes' ).removeClass( 'active' ).addClass( 'inactive' );
            $( '.dashboard-tab-plugins' ).removeClass( 'inactive' ).addClass( 'active' );   
            $( '.dashboard-tab-header-plugin' ).addClass( 'active' );
            $( 'dashboard-tab-header-theme' ).removeClass( 'active' );
        } else {
             $( '.dashboard-tab-plugins' ).removeClass( 'active' ).addClass( 'inactive' );
            $( '.dashboard-tab-themes' ).removeClass( 'inactive' ).addClass( 'active' );
            $( '.dashboard-tab-header-theme' ).addClass( 'active' );
            $( '.dashboard-tab-header-plugin' ).removeClass( 'active' );
            
        }
    } ); 
    
} );
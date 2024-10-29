(function( $ ) {
    "use strict";
    jQuery( document ).ready(function() {

        jQuery( "#awc_dialog" ).dialog({
            modal: true, title: 'Subscribe Now', zIndex: 10000, autoOpen: true,
            width: '500', resizable: false,
            position: {my: "center", at:"center", of: window },
            dialogClass: 'dialogButtons',
            buttons: {
                Yes: function () {
                    // $(obj).removeAttr('onclick');
                    // $(obj).parents('.Parent').remove();
                    var email_id = $('#txt_user_sub_awc').val();

                    var data = {
                        'action': 'add_plugin_user_awc',
                        'email_id': email_id
                    };

                    // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
                    jQuery.post(ajaxurl, data, function(response) {
                        $('#awc_dialog').html('<h2>You have been successfully subscribed');
                        $(".ui-dialog-buttonpane").remove();
                    });


                },
                No: function () {
                    var email_id = $('#txt_user_sub_awc').val();

                    var data = {
                        'action': 'hide_subscribe_awc',
                        'email_id': email_id
                    };

                    // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
                    $.post(ajaxurl, data, function(response) {

                    });

                    $(this).dialog("close");

                }
            },
            close: function (event, ui) {
                $(this).remove();
            }
        });

        jQuery("div.dialogButtons .ui-dialog-buttonset button").addClass("button-primary woocommerce-save-button");
        jQuery("div.dialogButtons .ui-dialog-buttonpane .ui-button").css("width","80px");
        jQuery("div.dialogButtons .ui-dialog-buttonpane .ui-button").css("margin-right","14px");
        jQuery("div.dialogButtons .ui-dialog-buttonset button").removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only");

    });
})( jQuery );

// JavaScript Document
(function ($) {


  $(document).ready( function() {
    
        // When site loaded, load the Popupbox First
        $('#custom-add-block-jq').hide();
        $('#custom-add-block-close').hide();
    
        $('#popupBoxClose').click( function() {            
            unloadPopupBox();
        });
        
        $('#custom-add-block-close').click( function() {
            unloadPopupBox();
        });

        $('#custom-add-block-load').click( function() {
            $('#custom-add-block-jq').slideToggle().animate({ height: "auto" }, "fast");
            $('#custom-add-block-close').toggle();
        });

        function unloadPopupBox() {    // TO Unload the Popupbox
            $('#custom-add-block-jq').slideUp("slow");
            $('#custom-add-block-close').hide();
        }    
        
        function loadPopupBox() {    // To Load the Popupbox       
          $('#custom-add-block-jq').slideDown().animate({ height: "auto" }, "fast");
          $('#custom-add-block-close').show();
        }        
    });

})(jQuery);
 
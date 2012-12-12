(function ($) {
/**
 * Provide the toggle features for the custom_add_block_jquery
 */
Drupal.behaviors.customAddBlockJquery = {

  attach: function(context, settings) {
    $('#block-custom-add-block-custom-add-block-jquery').once('custom_add_block', function () {
      // When site loaded, hide the Popupbox First
      $('#custom-add-block-jq').hide();
      $('#custom-add-block-jq').addClass('hidden');
      $('#custom-add-block-close').hide();

      $('#custom-add-block-close').click(function() {
        unloadPopupBox();
      });

      $('#custom-add-block-load').click(function() {
        $('#custom-add-block-jq').slideToggle().animate({ height: "auto" }, "fast");
        $('#custom-add-block-close').toggle();
      });

      function unloadPopupBox() {
        // TO Unload the Popupbox
        $('#custom-add-block-jq').slideUp("slow");
        $('#custom-add-block-close').hide();
      }

      function loadPopupBox() {
        // To Load the Popupbox
        $('#custom-add-block-jq').slideDown().animate({ height: "auto" }, "fast");
        $('#custom-add-block-close').show();
      }
    });
  }
}
})(jQuery);

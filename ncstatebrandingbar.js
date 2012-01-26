Drupal.behaviors.ncstatebrandingbar = function(context) {

	jQuery(document).ready(function() {
		
		if (!$('#ncstate-branding-bar-module').length) {
			return;
		}
	
		// show the nc state branding bar after the tag (which is configured on the module settings page)
		jQuery("#ncstate-branding-bar-module").show();        $(ncstatebrandingbar_append_to_tag).filter(':first').prepend(jQuery("#ncstate-branding-bar-module"));
	});

};
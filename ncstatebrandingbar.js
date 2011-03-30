$(document).ready(function() {
    if ($('#ncstate-branding-bar-module').length > 0) {
        return;
    }

    // show the nc state branding bar after the tag (which is configured on the module settings page)
    jQuery("document").ready(function() {
        jQuery("#ncstate-branding-bar-module").show();
        $(ncstatebrandingbar_append_to_tag).filter(':first').prepend(jQuery("#ncstate-branding-bar-module"));
    });
});
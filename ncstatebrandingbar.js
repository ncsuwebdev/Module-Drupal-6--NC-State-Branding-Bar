$(document).ready(function() {
  if (!$('#ncstate-branding-bar-module').length) {
    return;
  }

  jQuery("document").ready(function() {
	  jQuery("#ncstate-branding-bar-module").show();
	  jQuery("body").prepend(jQuery("#ncstate-branding-bar-module"));
  });
  
  
});

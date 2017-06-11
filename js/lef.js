/* μήνυμα Growl
   χρησιμοποιεί bootstrap notify http://bootstrap-notify.remabledesigns.com/
   animate.css για εφφε http://daneden.github.io/animate.css */
function mynima( $mynima, $typos, $eikona, $wra )
{
//	echo "<script> 
	$.notify({
		// options
		message: $mynima,
		icon: $eikona 
	},{
		// settings
		type: $typos,
		delay: $wra * 1000,
	animate: {
		enter: 'animated bounceInDown',
		exit: 'animated bounceOutUp'
	},
	placement: {
		from: "top",
		align: "center"
	}
	});
//	</script>";
}
// αυτόματο κλείσιμο bootstrap alert

function validateEmail(email) 
{
    var result = /\S+@\S+\.\S+/;
    return result.test(email);
}

function validateURL(url)
{
	var myRegExp =/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
	
	if (!myRegExp.test(url))
	{
		return false;
	}
	else
	{
		return true;
	}
}
	
$(document).ready(function () {
 
	window.setInterval(function() {
    //	$(".alert").fadeTo(1500, 0).slideUp(500, function(){
    	$("#fadebox").fadeTo(1000, 0).slideUp(500, function(){
       	 $(this).remove(); 
  	  });
	}, 1500);
 
});


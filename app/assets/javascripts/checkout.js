
/* Settings For Checkout */

function hideBilling() {
	document.getElementById("billing").onclick = function() {
		if (document.getElementById("billing").checked) {
			//hide billinginfo form
			document.getElementById("billinginfo").style.display = "none";
		} else {
			//show billinginfo form
			document.getElementById("billinginfo").style.display = "block";
		}
	};		
			//default billingfo form setting
			document.getElementById("billinginfo").style.display = "none";
}

document.ready =  function() {
	hideBilling();
};
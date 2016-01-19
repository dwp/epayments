$(document).ready(function() {
  $('form').parsley({
      trigger: 'focusout', // What listen event shall trigger the validation
      successClass: "success", // Success class name
      errorClass: "error", // Error class name that will be applied on the element returned in the classHandler
      classHandler: function (el) {
          return el.$element.parent('.form-group');
      }, // classHandler returns the element where successClass and errorClass are applied
      errorsContainer: function (el) {
          return el.$element.parent().find('.error-container');
      }, // This tells the script which element we want to display the error message
      errorsWrapper: '<span class="error-message" aria-hidden="true"></span>', // This will wrap around our errorTemplate
      errorTemplate: '<span></span>' // The error message will be displayed within this HTML element
  });
  /*$.listen('parsley:field:error', function(){
      var amount = $('#amount-number').val();
      if (amount > 99999.99) {
        $('#amount-number').attr('data-parsley-error-message', 'ddd');
      };
  });*/
});

function completeAndRedirect(){
  location.href = "worldpay1?refID="+document.getElementById('ni-number').value+"&Amount="+document.getElementById('amount-number').value;
}

function postDetails(){
  var nino, amt;
  nino = $('#ni-number').val();
  amt = $('#amount-number').val();

  location.href = "worldpay1?refID="+nino+"&Amount="+amt;
};

$(function() {
	// Mobile specific - Nav
	$('.helper-mobile a').click(function(){
		$( ".left-col" ).slideToggle(0);
		$(this).toggleClass("open-helper")
		return true;
	});
});

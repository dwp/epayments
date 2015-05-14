$(document).ready(function() {
  $('form').parsley({
      trigger:      'change',
      successClass: "success",
      errorClass: "error",
      classHandler: function (el) {
          return el.$element.closest('.form-group'); //working
      },
      errorTemplate: '<span class="error-message" aria-hidden="true"></span>',
  });
});

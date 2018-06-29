let invalid = function() {
  document.getElementById("choixChat").style = "border: 1px solid red";
};
//submit the data
$(document).ready(function() {
  $("#cat-form").submit(function(event) {

      event.preventDefault();

      if ($("#choixChat").val() && $("#raisonChat").val().length >= 15) {
        $(this).fadeOut(400);
        $("#success").fadeIn(1500);
      }

    });
      if ($("#raisonChat").val().length >= 15) {
      $(this).css("border", "1px solid #0000");
    };

//end submit
//for the properties of the form
$("#raisonChat").change(function() {
  if ($(this).val().length <= 15) {
    $(this).css("border", "1px solid #FF0000");
  }
});

$("#choixChat").change(function() {
  if ($(this).val()) {
    $(this).css("border", "1px solid #ccc");
  }
}); $("#raisonChat").focus(function() {
  if ($(this).val().length < 15) {
    $(this).css("border", "1px solid #FF0000");
  }

});

 $("#raisonChat").keyup(function() {
  if ($(this).val().length < 15) {
    $(this).css("border", "1px solid #ccc");
  }
});
});

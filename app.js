$(document).ready(function () {
  $("#dropDown1").on("click", () => {
    $("#hidden1").slideToggle(500);
  });
  $("#dropDown2").on("click", () => {
    $("#hidden2").slideToggle(500);
  });
});

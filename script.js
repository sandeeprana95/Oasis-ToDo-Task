$(document).ready(function () {
    $(".add").click(function () {
      let text = $("input").val();
      if(text != ""){
          $("ul").append(
              "<li class='task'>" +
                text +
                "<i class='fas fa-check'></i> <i class='fas fa-trash'></i></li>"
            );
          $("input").val('');
      }
      else{
          alert("Please write something..")
      }
    });
    $("ul").on("click", ".fa-trash", function () {
      $(this).parent("li").fadeOut(300);
    });
    $("ul").on("click", ".fa-check", function () {
      $(this).parent("li").toggleClass("active");
    });
  });
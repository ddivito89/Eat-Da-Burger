$(function() {
  $("#add_burger").on("click", function(event) {
    event.preventDefault();

    console.log($("#burger_name").val().trim())

    var new_burger = {
      "burger_name": $("#burger_name").val().trim(),
    };


    $.ajax("/api/addBurger", {
      type: "POST",
      data: new_burger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".change-devoured").on("click", function(event) {
    event.preventDefault();

    var updateId = {
      "updateId": $(this).attr('data-id'),
    };

    $.ajax("/api/eatBurger", {
      type: "PUT",
      data: updateId
    }).then(
      function() {
        console.log("devoured new burger");
        location.reload();
      }
    );
  });
})

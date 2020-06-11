//code to send to server once button is clicked
$(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log("Burger devoured!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var  burger_name =  $("#name")
  
      // Send the POST request.
      $.ajax("/burgers", {
        type: "POST",
        data: burger_name
      }).then(
        function() {
          console.log("created new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
})
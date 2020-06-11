$(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log("changed burger to devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

})
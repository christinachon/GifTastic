//api key: qN5lX7Krpj8pqRVhhFxT83JsvWXo2R5B

var foods = ["taco", "ramen", "nachos", "pizza", "hotdog"];
$(document).ready(function(){
    renderButtons();
})

function displayGifs() {
    $("#gifs-go-here").empty();
    var food = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      food + "&api_key=qN5lX7Krpj8pqRVhhFxT83JsvWXo2R5B&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var foodImage = $("<img>");
          foodImage.attr("src", results[i].images.fixed_height.url);
          gifDiv.prepend(p);
          gifDiv.prepend(foodImage);
          $("#gifs-go-here").prepend(gifDiv);
          console.log(response)
        }
      });

}

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < foods.length; i++) {
        var a = $("<button>");
        a.addClass("food btn btn-sm m-1");
        a.attr("data-name", foods[i]);
        a.text(foods[i]);
        $("#buttons-view").append(a);
            }
}

$("#add-food").on("click", function (event) {
    event.preventDefault();
    var food = $("#food-input").val().trim();
    foods.push(food);
    renderButtons();
    $("#food-input").val(" ");
});

$(document).on("click", ".food", displayGifs);
renderButtons();
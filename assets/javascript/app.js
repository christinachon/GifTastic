//api key: qN5lX7Krpj8pqRVhhFxT83JsvWXo2R5B
var foods = ["taco", "ramen", "nachos", "pizza", "hotdog"];
var saved = ["these are saved gifs", "more gifs"];

$(document).ready(function () {
  renderButtons();
})

function displayGifs() {
  $("#gifs-go-here").empty();
  var food = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    food + "&api_key=qN5lX7Krpj8pqRVhhFxT83JsvWXo2R5B&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var favButton = $('<button>').text("Save").addClass("save-btn btn");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var foodImage = $("<img>");
        gifDiv.prepend(favButton);
        gifDiv.prepend(p);
        foodImage.attr("src", results[i].images.fixed_height_still.url);
        foodImage.attr("data-state", "still");
        foodImage.attr("data-still", results[i].images.fixed_height_still.url);
        foodImage.attr("data-animate", results[i].images.fixed_height.url);
        foodImage.addClass("gif")
        gifDiv.prepend(foodImage);
        gifDiv.addClass("column")
        $("#gifs-go-here").prepend(gifDiv);
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

function animateGifs() {
  var state = $(this).attr('data-state')
  still = $(this).attr('data-still')
  animate = $(this).attr('data-animate')

  if (state === "still") {
    $(this).attr('src', animate);
    $(this).attr('data-state', "animate");
  }
  if (state === "animate") {
    $(this).attr('src', still)
    $(this).attr('data-state', "still");
  }
};

$("#add-food").on("click", function (event) {
  event.preventDefault();
  var food = $("#food-input").val().trim();
  foods.push(food);
  renderButtons();
  $("#food-input").val(" ");
});

$(".collapsible").on("click", function () {
  var display = $(".favorite").attr("display")
  if (display === "show") {
    $(".favorite").hide();
    $(".favorite").attr("display", "hide");
  } else {
    $(".favorite").show();
    $(".favorite").attr("display", "show");
  }
})

function saveGifs(){
  var gifImg = $(this).siblings(".gif")[0].dataset.animate;
  var savedImage = $("<img>");
  savedImage.attr("src", gifImg);
  savedImage.addClass("column");
  $('.favorite').prepend(savedImage);
  }




$(document).on("click", ".food", displayGifs);
$(document).on("click", ".gif", animateGifs);
$(document).on("click", ".save-btn", saveGifs);
renderButtons();

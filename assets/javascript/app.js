//api key: qN5lX7Krpj8pqRVhhFxT83JsvWXo2R5B

var foods = ["taco", "ramen", "nachos", "pizza", "hotdog"];
$(document).ready(function(){
    renderButtons();
})

function alertFoodName() {
    alert($(this).attr("data-name"));
}

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < foods.length; i++) {
        var a = $("<button>");
        a.addClass("food btn btn-info btn-sm m-1");
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

$(document).on("click", ".food", alertFoodName);
renderButtons();

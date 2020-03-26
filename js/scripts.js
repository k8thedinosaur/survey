// bs logic




// ui logic
$(document).ready(function() {
  $("#survey form").submit(function() {
  var responses = ["name", "cat-name", "date", "type", "purr", "meow", "color"];

  responses.forEach(function(answer) {
    var userInput = $("input#" + answer).val();
    $("." + answer).text(userInput).val();
  })

  $("#result").show();

  event.preventDefault();
});

// // text input
// var name = $("name").val();
// var catName = $("cat-name").val();

// // date
// var date = $("#date").val();

// // select box (list)
// var type = $("#type").val();

// // radio buttons
// var purr = $("input:radio[name=purr]:checked").val();
// var meow = $("input:radio[name=meow]:checked").val();

// // color
// var color = $("#color").val();

$(document).ready(function() {
  $("#blanks form").submit(function() {
    // alert('Got to beginning of form submit!');
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      // console.log(userInput);
      $("." + blank).text(userInput).val();      
    });

    $("#story").show();
    // alert('Got to end of form submit!');

    event.preventDefault();
  });
});


// Business logic:

  var add = function (number1, number2) {
    return number1 + number2;
  };

  var subtract = function (number1, number2) {
    return number1 - number2;
  };

  var multiply = function (number1, number2) {
    return number1 * number2;
  };

  var divide = function (number1, number2) {
    return number1 / number2;
  };


//Everything below this line is user interface logic:
$(document).ready(function() {
  $("#clickme").click(function() {
    $("#cal").animate({
      opacity: 0.25,
      left: "+=50",
      height: "swing"
    }, 5000, function() {
      //Animation complete.
    });
  });

  $("#addbtn").click(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());

  var result = add(number1, number2);
  $("#output").text(result);

  });
  $("#subtbtn").click(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());

  var result = subtract(number1, number2);
  $("#output").text(result);

  });

  $("#multiplybtn").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());

    var result = multiply(number1, number2);
    $("#output").text(result);
  });

  $("#dividebtn").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });

});

$(document).ready(function(){

  // calls function to start the game
  startGame();

  // random values in boxes; insert values and add classnames
  function startGame() {

    // define the size of the array and it's values
    var puzzleValues = [1, 2, 3, 4, 5, 6, 7, 8, ""],
        $puzzleBoard = $(".puzzleBoard");
    $puzzleBoard.html("");

    // loop through the array and apply each div element
    for (var i=0; i<9; i++) {
      var newDiv = $("<div>");
      var num = random(puzzleValues);
      newDiv.html(num);
      newDiv.addClass("items item"+num);
      $puzzleBoard.append(newDiv);
    }

    // applies the blank css to the random tile
    $(".item").css("background-image", "none");
    $puzzleItems = $(".items");

    // calls the function move which checks tiles for legal moves
    move();
  }

  // on each move taken, check to see if the game has been won
  function check() {
    // create a comparison array
    var checkArr = [];
    // loop to run through each items in the array
    for (var i=0; i<9; i++) {
      if ($(".items").eq(i).hasClass("item"+(i+1))) {
        checkArr.push(i+1);
        // outputs which tiles are in the correct place
        console.log(checkArr);
      }
    }

    // if the array is the correct order alert the player he has won
    if (checkArr.length === 8) {
      $(".item").css("background-image", "url(https://static1.squarespace.com/static/53e4ea80e4b0a79b40480ad4/t/58ee5afb20099ef86fedc583/1492015878387/Rick_and_morty_dan_mumford4.jpg?format=original)");

      // sets a timeout period for the alert
      setTimeout(function() {
        alert("You won !");
      }, 2000);
    }
  }

  // takes a random box and remove it to create empty box
  function random(arr) {
    var rng = Math.floor(Math.random() * arr.length);
    var toReturn = arr[rng];
    // remove 1 value from the array
    arr.splice(rng, 1);
    return toReturn;
  }

  // swap 2 tiles if all checks are passed in the move function
  function swapTiles(tile1, tile2) {
    var temp = $("<div>");
    tile1.before(temp);
    tile2.before(tile1);
    temp.before(tile2);
    temp.remove;
  }

  // on click, move the selected box into the position that is free after checking if the move is legal
  // compares 'class items to class item'
  // items are the moveable pieces and item is the blankspace
  function move() {
    $(".items").on("click", function(e) {
      // item 0
      // each statement checks the local neighbourhood for a tile with the item class
      if ($(this).is($(".items").eq(0))) {
        if ($(".items").eq(1).hasClass("item")) {
          swapTiles($(this), $(".items").eq(1));
        }
        else if ($(".items").eq(3).hasClass("item")) {
          swapTiles($(this), $(".items").eq(3));
        }
      }

      // item 1
      else if ($(this).is($(".items").eq(1))) {
        if ($(".items").eq(0).hasClass("item")) {
          swapTiles($(this), $(".items").eq(0));
        }
        else if ($(".items").eq(2).hasClass("item")) {
          swapTiles($(this), $(".items").eq(2));
        }
        else if ($(".items").eq(4).hasClass("item")) {
          swapTiles($(this), $(".items").eq(4));
        }
      }

      // item 2
      else if ($(this).is($(".items").eq(2))) {
        if ($(".items").eq(1).hasClass("item")) {
          swapTiles($(this), $(".items").eq(1));
        }
        else if ($(".items").eq(5).hasClass("item")) {
          swapTiles($(this), $(".items").eq(5));
        }
      }

      // item 3
      else if ($(this).is($(".items").eq(3))) {
        if ($(".items").eq(0).hasClass("item")) {
          swapTiles($(this), $(".items").eq(0));
        }
        else if ($(".items").eq(4).hasClass("item")) {
          swapTiles($(this), $(".items").eq(4));
        }
        else if ($(".items").eq(6).hasClass("item")) {
          swapTiles($(this), $(".items").eq(6));
        }
      }

      // item 4
      else if ($(this).is($(".items").eq(4))) {
        if ($(".items").eq(1).hasClass("item")) {
          swapTiles($(this), $(".items").eq(1));
        }
        else if ($(".items").eq(3).hasClass("item")) {
          swapTiles($(this), $(".items").eq(3));
        }
        else if ($(".items").eq(5).hasClass("item")) {
          swapTiles($(this), $(".items").eq(5));
        }
        else if ($(".items").eq(7).hasClass("item")) {
          swapTiles($(this), $(".items").eq(7));
        }
      }

      // item 5
      else if ($(this).is($(".items").eq(5))) {
        if ($(".items").eq(2).hasClass("item")) {
          swapTiles($(this), $(".items").eq(2));
        }
        else if ($(".items").eq(4).hasClass("item")) {
          swapTiles($(this), $(".items").eq(4));
        }
        else if ($(".items").eq(8).hasClass("item")) {
          swapTiles($(this), $(".items").eq(8));
        }
      }

      // item 6
      else if ($(this).is($(".items").eq(6))) {
        if ($(".items").eq(3).hasClass("item")) {
          swapTiles($(this), $(".items").eq(3));
        }
        else if ($(".items").eq(7).hasClass("item")) {
          swapTiles($(this), $(".items").eq(7));
        }
      }

      // item 7
      else if ($(this).is($(".items").eq(7))) {
        if ($(".items").eq(4).hasClass("item")) {
          swapTiles($(this), $(".items").eq(4));
        }
        else if ($(".items").eq(6).hasClass("item")) {
          swapTiles($(this), $(".items").eq(6));
        }
        else if ($(".items").eq(8).hasClass("item")) {
          swapTiles($(this), $(".items").eq(8));
        }
      }

      // item 8
      else if ($(this).is($(".items").eq(8))) {
        if ($(".items").eq(5).hasClass("item")) {
          swapTiles($(this), $(".items").eq(5));
        }
        else if ($(".items").eq(7).hasClass("item")) {
          swapTiles($(this), $(".items").eq(7));
        }
      }

      // perform the check
      check();
    });
  }

});

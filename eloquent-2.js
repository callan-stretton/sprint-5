// 1) Looping a Triangle

for (var i = "#"; i.length < 8; i += "#")
  console.log(i);


// 2) FizzBuzz

for (var i = 1; i < 101; i ++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else {
        if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
}


// 3) Chess Board

var chessify = function (size) {
    var board = " ";

    for (var y = 0; y < size; y++) {

      for (var x = 0; x < size; x++) {
        if ((x + y) % 2 === 0) {
          board += " ";
        } else {
          board += "#";
        }
      }

      board += "\n";
    }
    console.log(board);
};

chessify (8);

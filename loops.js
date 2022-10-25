// Looping a triangle

let hash = "#";

for (let i = hash.length; i <= 7; ++i) {
  console.log(hash);
  hash += "#";
}



// FizzBuzz

let num = 1;
while (num <= 100) {
  if (num % 3 == 0 && num % 5 !== 0) {
  	console.log("Fizz");
  } else if (num % 5 == 0 && num % 3 !== 0) {
  	console.log("Buzz");
  } else if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(num);
  }
  num++;
}


// Chessboard

const size = 8;
let one = " #";
let two = "# ";

for (i = 0; i < size; i++) {
	
	if (i % 2 == 0) {
		
		while (one.length < size) {
			one += one;
		}

		console.log(one);
		
	} else {
		while (two.length < size) {
			two += two;
		}

		console.log(two);
		
	}
	
}
const colorPatternTimes = cols => {
	let pencil = 0;

  cols.forEach((color, index) => {
  	if (index > 0 && cols[index - 1] !== color) {
    	pencil++;
    }
  });
  
  return pencil + cols.length * 2;
}

console.log(colorPatternTimes(["Blue"]))
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]))
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])) 
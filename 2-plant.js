const plant = (type, water, fert, temp) => {
	const w = "-".repeat(water);
  
  // died plant
	if (temp > 30 || temp < 20) {
  	return w.repeat(water) + type;
  }

	// live plant
  let res = "";
  for (let index = 0; index < water; index++) {
    res += (w + type.repeat(fert));
  }
  return res;
}

console.log(plant("@", 3, 3, 25))
console.log(plant("#", 1, 5, 30))
console.log(plant("&", 5, 1, 20))
console.log(plant("&", 3, 3, 15))
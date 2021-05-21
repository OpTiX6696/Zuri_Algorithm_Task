
//******** FAHRENHEIT TO CELSIUS **********//


const convertFahrToCelsius = tempInF => {
  if (isNaN(tempInF)) {

    console.log(`${tempInF} is not a valid number but a/an ${typeof tempInF}.`);

    return `${tempInF} is not a valid number but a/an ${typeof tempInF}.`;
  } else {

    const tempInC = (tempInF - 32) * (5/9);
    console.log(tempInC.toFixed(4));
    return tempInC.toFixed(4);  
  }
  
}


//******** YU-GI-OH ************//


const checkYuGiOhEach = num => {
  res = []
  if (num % 2 == 0) {
    res.push('yu');
  }
  if (num % 3 == 0) {
    res.push('gi');
  }
  if (num % 5 == 0) {
    res.push('oh');
  }
  if (res.length > 0) {
    console.log(res.join('-'));
    return res.join('-');
  }

};

const checkYuGiOh = n => {

  if (isNaN(n)) {
    console.log(`invalid parameter: ${n}`);
    return `invalid parameter: ${n}`;
  } else {
    const n_array = [];
    for(let i = 1; i < n + 1; i++) {
      n_array.push(i);
    }

    n_array.forEach(checkYuGiOhEach);
  }
  
};


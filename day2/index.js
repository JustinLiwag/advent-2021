const { data } = require('./data');

const submarineOrders = (data) => {
  let horizontal = 0;
  let vertical = 0;

  for (points of data) {
    const order = points.split(' ')[0];
    const movement = parseInt(points.split(' ')[1]);

    if (order === 'forward') horizontal += movement;
    if (order === 'up') vertical -= movement;
    if (order === 'down') vertical += movement;
  }
  console.log(`
  The depth coordinates are: 
  H: ${horizontal}, V: ${vertical}
  The multiplied value is: ${horizontal * vertical}
  `);
};

const workingSubmarineOrders = (data) => {
  let horizontal = 0;
  let vertical = 0;
  let aim = 0;

  for (points of data) {
    const order = points.split(' ')[0];
    const movement = parseInt(points.split(' ')[1]);

    if (order === 'forward') {
      horizontal += movement;
      vertical += movement * aim;
    }
    if (order === 'up') aim -= movement;
    if (order === 'down') aim += movement;
  }
  console.log(`
  The correct and final depth coordinates are: 
  H:${horizontal}, V:${vertical} A: ${aim}
  The multiplied value is: ${horizontal * vertical}
  `);
};

submarineOrders(data);
// The depth coordinates are:
// H: 1940, V: 861
// The multiplied value is: 1670340

workingSubmarineOrders(data);
// The correct and final depth coordinates are:
// H:1940, V:1007368 A: 861
// The multiplied value is: 1954293920

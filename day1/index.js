const { measurementData } = require('./data');

const depthAnalysis = (readings) => {
  let hasIncreased = 0;
  let prev;
  for (reading of readings) {
    prev && reading > prev && hasIncreased++;
    prev = reading;
  }
  console.log(`The depth has increased ${hasIncreased} times`);
};

const detailedDepthAnalysis = (readings, window) => {
  let hasIncreased = 0;
  let prev;
  for (index = 0; index + window <= readings.length; index++) {
    let currentValue = readings
      .slice(index, index + window)
      .reduce((a, b) => a + b);
    prev && currentValue > prev && hasIncreased++;
    prev = currentValue;
  }

  console.log(`The flat averaged depth has increased ${hasIncreased} times`);
};

depthAnalysis(measurementData);
detailedDepthAnalysis(measurementData, 3);

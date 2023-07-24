var data = {};

fetch('http://localhost:3000/temperature')
  .then((response) => response.json())
  .then((json) => {
    data = json;
    var result = [];

    var sensorMap = new Map();

    Object.values(data).forEach(element => {
      var coolerNumber = element.coolerNumber;
      var temperature = element.temperature;

      if (temperature !== undefined) {
        var coolerSensor = new CoolerSensor(coolerNumber, temperature);
        sensorMap.set(coolerNumber, coolerSensor);

        console.log(coolerNumber, temperature);
        result.push(temperature);
      }
    });

    console.log(result);
  });

function getCoolerTemp(coolerNumber) {

  cooler = sensorMap.get(coolerNumber);



  if (cooler && cooler.temperature !== undefined) {
    console.log(cooler.temperature);
  } else {
    console.log("Invalid cooler number or temperature unavailable.");
  }
}


getCoolerTemp("Cooler four");


var data;

var sensorMap = new Map();

fetch('http://localhost:3000/temperature' )
    .then((response) => response.json())
    .then((json) => {
        data = json;
        Object.values(data).forEach(element => {
            var temp = Object.values(element);
            console.log(temp[1], temp[2], temp[3])
            sensorMap.set(temp[0], new CoolerSensor(temp[0], temp[1], temp[2], temp[3]))
        });
    });
    


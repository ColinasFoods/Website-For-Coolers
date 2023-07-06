var data;

var sensorMap = new Map();

fetch('http://localhost:3000/temperature' )
    .then((response) => response.json())
    .then((json) => {
        data = json;
        Object.values(data).forEach(element => {
            var temp = Object.values(element);
            
            sensorMap.set(temp[0], new CoolerSensor(temp[1], temp[2], temp[3], temp[4], temp[5]))
            
         
            console.log(temp[1], temp[2], temp[3])
            sensorMap.set(temp[0], new CoolerSensor(temp[0], temp[1], temp[2], temp[3]))
        });
        const cooler1 = sensorMap.get("64a5957082a0dadb53cdebb6")
        const cooler2 = sensorMap.get("64a5c6d33120c2441148a755")
        const cooler3 = sensorMap.get("64a5c70a3120c2441148a757")
        const cooler4 = sensorMap.get("64a5c7333120c2441148a759")
      
        console.log(cooler1.temp);
        console.log(cooler2.temp);
        console.log(cooler3.temp);
        console.log(cooler4.temp);

    function getCoolerTemp(id){
            cooler = sensorMap.get(id);
            console.log(cooler.temp)
    }
    getCoolerTemp("64a5c7333120c2441148a759")


    
    });
    


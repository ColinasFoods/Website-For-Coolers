class CoolerSensor {
    constructor(id, temp, doorOpen, doorTimeOpen, previousTemps, previousDoors, time) {
        this.id = id;
        this.temp = temp;
        this.doorOpen = doorOpen;
        this.doorTimeOpen = doorTimeOpen;
        this.previousTemps = previousTemps;
        this.previousDoors = previousDoors;
        this.time = time;
    }
    
}
var five = require("johnny-five");
var board = new five.Board();

//create the array to hold sensor generated data
var data = [];

board.on("ready", function() {
    var temp = new five.Temperature({
        pin: "A0",
        controller: "TMP36"
    });
    var sensor = new five.Sensor("A1");

    temp.on("change", function() {
        //console.log("Temp: %d", this.celsius);
        //push temp sensor data into the array
        if(this.celsius !== null){
            data.push({temp:this.celsius});
        }
        if(this.celsius >= 26){
            console.log("Temp: %d", this.celsius);
        }
    });
    sensor.on("change", function(){
        //console.log("Alcohol: ", this.value);
        //push alcohol sensor data into the array
        if(this.value !== null){
            data.push({alcohol:this.value});
        }
        if(this.value >= 155){
            console.log("Alcohol: ", this.value);
        }
    });
    
});
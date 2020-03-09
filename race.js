//convert minutes to seconds
function minToSec(minutes) {
    return Math.floor(minutes * 60);
}
//convert seconds back to minutes
function secToMin(seconds) {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(seconds).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
}


//convert kph to minutes
//function kphToMin() {
//    let speed = Math.floor(60 / parseInt(bikeTime.value));
//}

//show race distance based on event selected
function showEvent() {
    let obj = document.getElementById("triDistance").value;
    document.getElementById("triOutput").innerHTML = obj;
}

//calculate triathlong time
function triFinishTime() {
let sprint = [7.5, 20, 5];
let olympic = [15, 40, 10];
let half = [19, 90, 21.1];
let full = [38, 180.20, 42.2];

let swimMin = parseInt(triSwimMin.value);
let swimSec = parseInt(triSwimSec.value);
let t1Minute = parseInt(t1Min.value);
let t1Second = parseInt(t1Sec.value);
let bike = (60/ parseInt(bikeTime.value));
let t2Minute = parseInt(t2Min.value); 
let t2Second = parseInt(t2Sec.value);
let runMin = parseInt(triRunMin.value);
let runSec = parseInt(triRunSec.value);

    
    let tri = document.getElementById("triDistance")
    if (triDistance.value == ("Swim: 750m, Bike: 20 km, Run: 5 km"))
    {
        let r1 = ((minToSec(swimMin) + swimSec) * sprint[0]) + (minToSec(t1Minute) + t1Second) + (minToSec(bike) * sprint[1]) + (minToSec(t2Minute) + t2Second) + ((minToSec(runMin) + runSec) * sprint[2]);
        let r2 = secToMin(r1);
        document.getElementById("triFinishTime").innerHTML = r2;
    
    }
    else if (triDistance.value == ("Swim: 1,500m, Bike: 40 km, Run: 10 km"))
    {
        let r1 = ((minToSec(swimMin) + swimSec) * olympic[0]) + (minToSec(t1Minute) + t1Second) + (minToSec(bike) * olympic[1]) + (minToSec(t2Minute) + t2Second) + ((minToSec(runMin) + runSec) * olympic[2]);
        let r2 = secToMin(r1);
        document.getElementById("triFinishTime").innerHTML = r2;
    }
    else if (triDistance.value == ("Swim: 1,900m, Bike: 90 km, Run: 21.1 km"))
    {
        let r1 = ((minToSec(swimMin) + swimSec) * half[0]) + (minToSec(t1Minute) + t1Second) + (minToSec(bike) * half[1]) + (minToSec(t2Minute) + t2Second) + ((minToSec(runMin) + runSec) * half[2]);
        let r2 = secToMin(r1);
        document.getElementById("triFinishTime").innerHTML = r2;
    }
    else 
    {
        let r1 = ((minToSec(swimMin) + swimSec) * full[0]) + (minToSec(t1Minute) + t1Second) + (minToSec(bike) * full[1]) + (minToSec(t2Minute) + t2Second) + ((minToSec(runMin) + runSec) * full[2]);
        let r2 = secToMin(r1);
        document.getElementById("triFinishTime").innerHTML = r2;
    }
}

//calculate run time
function runFinishTime() {
    let run = document.getElementById("run");
    if (run.value == "5")
    {
        let q1 = parseInt(runMin.value) * parseInt(run.value);
        let q2 = parseInt(runSec.value) * parseInt(run.value);
        let q3 = (minToSec(q1) + q2);
        let q4 = secToMin(q3);
        document.getElementById("runOutput").innerHTML = q4;
    }
    else if (run.value == "10")
    {
        let q1 = parseInt(runMin.value) * parseInt(run.value);
        let q2 = parseInt(runSec.value) * parseInt(run.value);
        let q3 = (minToSec(q1) + q2);
        let q4 = secToMin(q3);
        document.getElementById("runOutput").innerHTML = q4;
    }
    else if (run.value == "halfRun")
    {
        let q1 = parseInt(runMin.value) * parseInt(run.value);
        let q2 = parseInt(runSec.value) * parseInt(run.value);
        let q3 = (minToSec(q1) + q2);
        let q4 = secToMin(q3);
        document.getElementById("runOutput").innerHTML = q4;
    }
    else if (run.value == "30")
    {
        let q1 = parseInt(runMin.value) * parseInt(run.value);
        let q2 = parseInt(runSec.value) * parseInt(run.value);
        let q3 = (minToSec(q1) + q2);
        let q4 = secToMin(q3);
        document.getElementById("runOutput").innerHTML = q4;
    }
    else
    {
        let q1 = parseInt(runMin.value) * parseInt(run.value);
        let q2 = parseInt(runSec.value) * parseInt(run.value);
        let q3 = (minToSec(q1) + q2);
        let q4 = secToMin(q3);
        document.getElementById("runOutput").innerHTML = q4;
    }
}


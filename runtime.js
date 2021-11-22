const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

let allArrays = {
    "zeroArray": [0],   // For some reason, function below has a ~115 microsecond slowdown for the timer on the first key:value pair, so I added this zeroArray so that important results are not affected
    "tinyArray": tinyArray,
    "smallArray": smallArray,
    "mediumArray": mediumArray,
    "largeArray": largeArray,
    "extraLargeArray": extraLargeArray
}

for (const [key, value] of Object.entries(allArrays)){
    // console.log(`${key}: ${value}`);

    // How long does it take to double every number in a given array? 

    // Try it with doublerAppend function
    perf.start();                     // Starts timer
    doublerAppend(value);
    let resultsAppend = perf.stop();  // Stops timer and save time results

    // Try it with doublerInsert function
    perf.start();
    doublerInsert(value);
    let resultsInsert = perf.stop();

    console.log(`Results for the ${key}:`);
    console.log("- resultsAppend function: ", resultsAppend.preciseWords);
    console.log("- resultsInsert function: ", resultsInsert.preciseWords);
}
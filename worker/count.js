const {parentPort} = require("worker_threads")
function makeIt(){
    let sum =0
    for(let i = 0; i < 100000000000; i++) {
        sum += i
    }
    return sum
}
parentPort.postMessage(makeIt())
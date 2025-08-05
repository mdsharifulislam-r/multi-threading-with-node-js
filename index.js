const express = require('express');
const app = express();
const { Worker } = require('worker_threads');
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/block", (req, res) => {
    const worker = new Worker('./worker/count.js');
    worker.on('message', (message) => {
        res.send(`Sum: ${message}`)
    })
    
})

app.get("/unblock", (req, res) => {
    res.send("Unblocked is come fast")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
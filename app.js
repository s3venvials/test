const express = require("express");
const spawn = require('child_process').spawn;
const path = require('path');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get("/run", (req, res) => {
    const child = spawn('python', ["./test.py"]);

    child.toString('exit', code => {
        console.log(`Exit code is: ${code}`);
    });

    res.redirect('back');
})

app.listen(3000);



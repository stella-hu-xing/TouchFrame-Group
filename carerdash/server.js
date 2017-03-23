var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
console.log("Demonstraion for TouchFrame - CarerDash");
console.log("Server is running on http://localhost:3000");
app.listen(port);

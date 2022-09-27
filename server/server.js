const express = require('express');

const app = express();

//make the server/public folder available to anyone who wants them
app.use(express.static('./server/public'));

 //.listen is a method
app.listen(3000, function() {
    console.log('We\'re live! 🎰')
});

console.log('in server.js 💼 '); 

const twit = require('twit');
const auth = require('./auth.json');

var T = new twit(auth)

T.post('statuses/update',{status:`Hello World 🌎!`},(err,data,Response)=>{
    if(err) console.log(`Something went wrong 😫`)
    else console.log(`It worked 🥳`)
});
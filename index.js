const twit = require('twit');
const auth = require('./auth.json');

var T = new twit(auth)
// console.log(T)
T.get('search/tweets',
    {q:'ian',
    count:1},(err,data,response)=>{
    if(err) throw err;
    console.log(data)
})
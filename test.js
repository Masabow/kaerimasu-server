var db = require('./db/db');
db.authenticate().then(()=>{
    console.log('done');
})
.catch(err=>{
    console.log(err);
})
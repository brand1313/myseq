const app = require('../app');
const syncDB = require('../models/sync-db');

const port = 3000;

syncDB().then(_=>{
    console.log('Syncying DB!');
    app.listen(port, () =>{
        console.log('running at 3000');
    })
})


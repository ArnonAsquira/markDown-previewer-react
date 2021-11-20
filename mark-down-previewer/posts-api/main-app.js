const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors({
    origin: '*',
    methods: '*'
}))

app.use('/', (req, res) => {
    res.send('ok');
})



app.listen(port, (err) => {
    if (!err) {
        console.log(`listening on port ${port}`);
    } else{
        console.log(err);
    }
})
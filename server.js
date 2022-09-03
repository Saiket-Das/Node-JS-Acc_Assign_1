const express = require('express')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const colors = require('colors');
const userRoute = require('./backend/routes/users.routes');


// middleware 
app.use(cors());
app.use(express.json());



app.use("/api/user", userRoute)


app.get('/', (req, res) => {
    res.send('ACC Asignment ONE!')
})


app.all('*', (req, res) => {
    res.send('No route found.')
})

app.listen(port, () => {
    console.log(`ACC Asignment ONE is running on ${port}`.yellow.bold)
})
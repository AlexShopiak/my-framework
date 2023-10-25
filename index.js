const Application = require('./framework/application.js');
const userRouter = require('./src/user-router.js');
const JSONParser = require('./framework/parseJSON.js');
const URLParser = require('./framework/parseURL.js');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = new Application();

app.use(JSONParser);
app.use(URLParser('http://localhost:5000'));
app.addRouter(userRouter);

const start = async() => {
    try {
        await mongoose.connect('mongodb+srv://alex:0000@cluster0.u0awupe.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, () => console.log('Started on:' + PORT));
    } catch(err) {
        console.log(err);
    }
}

start();
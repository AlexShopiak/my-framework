const Application = require('./framework/application.js');
const userRouter = require('./src/user-router.js');
const JSONParser = require('./framework/parseJSON.js');

const PORT = process.env.PORT || 5000;
const app = new Application();

app.use(JSONParser);
app.addRouter(userRouter);
app.listen(PORT, () => console.log('Started on:' + PORT))
//Lab2
//Sam Jackson
//100137493

const calc = require('./calc');
const connect = require('connect');
const app = connect();
app.use(calc);

app.listen(3000, () => {
    console.log('Server is: http://localhost:3000');
  });



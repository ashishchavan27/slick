const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const transactionRoutes = require("./src/routes/transactionRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", transactionRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// curl -X POST -H "Content-Type: application/json" -d '{"key1":"value1", "key2":"value2"}' http://localhost:3000/

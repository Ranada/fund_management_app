const express = require('express')
const app = express()
const port = 3000
const investment_table_router = require("../database/investment_table_routes")

app.use(express.json());
app.use("/investments", investment_table_router);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

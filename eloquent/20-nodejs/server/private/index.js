const express = require("express");
const httpError = require("http-errors");
const morgan = require("morgan");
const fs = require("fs");
const app = express();
const port = 8080;
const files = "./public";
const cors = require("cors");

app.use([
  express.urlencoded({ extended: true }),
  express.json(),
  morgan("tiny"),
  cors(),
]);

app.use(express.static(__dirname));

app.get("/", (res, req) => {
  res.send(files);
  console.log(`${files} were send`);
});

app.use((err, req, res, next) => {
  console.error(err);

  if (!err.status) {
    // const serverError = httpError(500);
    console.log("error 500");
    // res.error(serverError.status, serverError);
  } else {
    res.error(err.status, err);
  }

  return next(err);
});

app.listen(port, () => console.log(`App listening on port ${port}`));

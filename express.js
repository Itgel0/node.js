const express = require("express");

const port = 8000;
const app = express();

app.get("/", (request, response) => {
    response.send("Hello Express Server");
});

app.listen(port, () => {
    `Server is running at localhost:${port}`;
});
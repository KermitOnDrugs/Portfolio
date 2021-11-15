const express = require("express");

const app = express();

app.use(express.static("dist"));

app.get("/", (appReq, appRes) => {
    appRes.sendFile(path.join(__dirname, "dist/index.htm"));
});

app.listen(process.env.PORT, () => {
    console.log("Server running");
});

// deploy
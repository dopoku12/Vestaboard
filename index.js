const express = require("express");
const axios = require("axios");
const app = express();
const characterCodes = require("./chracters.json");

const port = 3030;

const apikey = "c2dc4f5c+f22a+4868+b515+e4fc1cc2af66";
const apisecret = "2ec8479dde4340dca4aedbfd1b18fafc";

app.use(express.json());

app.get("/", (req, res) => {
   console.log(characterCodes);

   axios
      .get("https://rw.vestaboard.com/", {
         headers: {
            "Content-Type": "application/json",
            "X-Vestaboard-Read-Write-Key": apikey,
            //   "x-vestaboard-api-secret":apisecret,
         },
      })
      .then((res) => {
         const data = JSON.parse(res.data.currentMessage.layout);
         const dataArr = Object.values(data);

         console.log(dataArr);
         dataArr.map((i) => {
            console.log(i);
         });
      })
      .catch((err) => {
         console.error("error:", err);
      });
});

app.listen(port, () => {
   console.log(`Listening on port:${port}...`);
});

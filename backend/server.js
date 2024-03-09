import express from "express";
import getEmployee from "./service.js";
import validateEmployee from "./service.js";
import insertEmployeeDetail from "./service.js";

const app = express();
const PORT = process.env.PORT || 9999;

app.post("/onboard", (req, res) => {
  res.contentType("application/json");
  res.send(onboardEmployee(JSON.stringify(req.body)));
  res.end();
});

app.get("/employee/:empId", (req, res) => {
  res.contentType("application/json");
  res.send(JSON.stringify(getEmployee(req.params.empId)));
  res.end();
});

app.get("/validate", (req, res) => {
  res.contentType("application/json");
  res.send(
    JSON.stringify(
      validateEmployee(req.query.email, req.query.empId, req.query.pass)
    )
  );
  res.end();
});

app.listen(PORT, console.log(`Server started on ${PORT}`));

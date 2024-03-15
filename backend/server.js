import express from "express";
import { validateEmployee, getAllEmployee } from "./service.js";

const app = express();
const PORT = process.env.PORT || 9999;

app.get("/validate", (req, res) => {
  res.contentType("application/json");
  const data = validateEmployee(
    req.query.email,
    req.query.empId,
    req.query.pass
  );

  console.log(`validate employee ${data}`);
  console.log(Object.keys(data).length);
  if (data === undefined || Object.keys(data).length === 0) {
    res.statusMessage = "Invalid Credentials";
    res.status(403).end();
  } else {
    res.send(JSON.stringify(data));
    res.end();
  }
});

app.get("/employees", (req, res) => {
  const data = getAllEmployee();
  console.log(JSON.stringify(data));
});

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

app.listen(PORT, console.log(`Server started on ${PORT}`));

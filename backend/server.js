import express from "express";
import {
  validateEmployee,
  getAllEmployee,
  getEmployee,
  getLeaveRecordData,
} from "./service.js";

const app = express();
const PORT = process.env.PORT || 9999;

app.get("/validate", (req, res) => {
  const data = validateEmployee(req.query.email, req.query.empId);

  if (data === undefined || Object.keys(data).length === 0) {
    res.status(403).end();
  } else {
    res.send(JSON.stringify(data)).end();
  }
});

app.post("/onboard", (req, res) => {
  res.send(onboardEmployee(JSON.stringify(req.body))).end();
});

app.get("/employee", (req, res) => {
  res.send(JSON.stringify(getEmployee(req.query.empId))).end();
});

app.get("/employees", (req, res) => {
  res.send(JSON.stringify(getAllEmployee())).end();
});

app.get("/leaves", (req, res) => {
  res.send(JSON.stringify(getLeaveRecordData(req.query.empId))).end();
});

app.listen(PORT, console.log(`Server started on ${PORT}`));

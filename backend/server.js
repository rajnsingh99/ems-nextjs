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
  const data = validateEmployee(
    req.query.email,
    req.query.empId,
    req.query.password
  )[0];
  if (data === undefined || Object.keys(data).length === 0) {
    res.status(403).end();
  } else {
    console.log("validateEmployee " + JSON.stringify(data));
    res.status(200).send(JSON.stringify(data)).end();
  }
});

app.post("/onboard", (req, res) => {
  res.send(onboardEmployee(JSON.stringify(req.body))).end();
});

app.get("/employee", (req, res) => {
  const empDetail = getEmployee(req.query.empId);
  console.log(`empDetail: ${JSON.stringify(empDetail)}`);
  if (empDetail === undefined) {
    res.status(501).send(JSON.stringify(empDetail)).end();
  } else {
    console.log("value send");
    res.send(JSON.stringify(empDetail)).end();
  }
});

app.get("/employees", (req, res) => {
  const empList = getAllEmployee();
  if (empList === undefined) {
    res.status(501).send(JSON.stringify(empList)).end();
  } else {
    res.status(200).send(JSON.stringify(empList)).end();
  }
});

app.get("/leaves", (req, res) => {
  res.send(JSON.stringify(getLeaveRecordData(req.query.empId))).end();
});

app.listen(PORT, console.log(`Server started on ${PORT}`));

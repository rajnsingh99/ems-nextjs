import express from "express";
import { validateEmployee } from "./service.js";

const app = express();
const PORT = process.env.PORT || 9999;

app.get("/validate", (req, res) => {
  res.contentType("application/json");
  const data = validateEmployee(
    req.query.email.replace("@globant.com", ""),
    req.query.empId.replace("@globant.com", ""),
    req.query.pass
  );

  console.log(`validate employee ${data}`);
  if (data === undefined) {
    res.statusMessage = "Current password does not match";
    res.status(403).end();
  } else {
    res.send(JSON.stringify(data));
    res.end();
  }
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

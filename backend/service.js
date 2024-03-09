import db  from "./dbInit.js";

function validateEmployee(email, empId, pass) {
  const statement = db.prepare(`
        SELECT * from AUTH_CRED WHERE email=${email} OR empId=${empId}
    `);

  return statement.run();
}

export function onboardEmployee(data) {
  console.log("onboardEmployee ---> " + data);
  const auth = {
    empId: data.empId,
    role: data.role,
    email: data.email,
    pass: data.pass,
    passHash: data.passHash,
  };

  insertAuth(auth);
  insertEmployeeDetail(data);
}
 
function insertAuth(auth) {
  console.log("insertAuth ---> " + auth);
  const statement = db.prepare(`
        INSERT INTO AUTH_CRED VALUES (
            null,
            ${auth.empId},
            ${auth.role},
            ${auth.email},
            ${auth.pass},
            ${auth.passHash}  
        )
    `);

  console.log("Auth added: " + statement.run().lastInsertRowid);
}

export function insertEmployeeDetail(data) {
  console.log("insertEmployeeDetail ---> " + data);
  const statement = db.prepare(`
        INSERT INTO EMPLOYEE_DETAILS VALUES (
            null,
            ${data.empId},
            ${data.role},
            ${data.email},
            ${data.firstName},
            ${data.lastName},
            ${data.department},
            ${data.country},
            ${data.state},
            ${data.city},
            ${data.dob},
            ${data.doj},
            ${data.photo},
            ${data.address},
            ${data.phoneNo},
            ${data.status},
            ${data.raiting}
        )
    `);

  console.log("Employee detail added: " + statement.run().lastInsertRowid);
}

export default function getEmployee(empId) {
  console.log(`getEmployee ${empId}`);
  const statement = db.prepare(`
        SELECT * FROM EMPLOYEE_DETAILS WHERE empId=${empId}
    `);

  return statement.run();
}


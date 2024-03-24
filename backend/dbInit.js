import Database from "better-sqlite3";
const db = new Database("ems.db", { verbose: console.log });
db.pragma("journal_mode = WAL");

function initAuthCredentials() {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS AUTH_CRED (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       empId INTEGER NON NULL UNIQUE,
       role TEXT NOT NULL,
       email TEXT NOT NULL,
       pass TEXT NOT NULL,
       passHash TEXT NOT NULL
    )
`
  ).run();
  console.log("initAuthCredentials completed");
}

function initEmployeeDetails() {
  db.prepare(
    `
       CREATE TABLE IF NOT EXISTS EMPLOYEE_DETAILS (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        empId INTEGER NON NULL UNIQUE,
        role TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        gender TEXT NOT NULL,
        department TEXT NOT NULL,
        country TEXT NOT NULL,
        state TEXT NOT NULL,
        city TEXT NOT NULL,
        dob TEXT NOT NULL,
        doj TEXT NOT NULL,
        photo TEXT NOT NULL,
        address TEXT,
        phoneNo INTEGER,
        maritalStatus TEXT NOT NULL,
        raiting TEXT NOT NULL,
        personalEmail TEXT,
        employementStatus NOT NULL,
        annualLeaves NOT NULL,
        emergencyLeaves NOT NULL,
        medicalLeaves NOT NULL,
        unpaidLeaves NOT NULL,
        skillSet TEXT NOT NULL 
        )
    `
  ).run();
  console.log("initEmployeeDetails completed");
}

function initLeaveRecords() {
  db.prepare(
    `
       CREATE TABLE IF NOT EXISTS LEAVE_RECORDS (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        empId INTEGER NON NULL,
        leaveType TEXT NOT NULL,
        startDate TEXT NOT NULL,
        endDate TEXT NOT NULL,
        nod INTEGER NOT NULL,
        reason TEXT NOT NULL,
        approver TEXT NOT NULL,
        remark TEXT,
        status TEXT NOT NULL
        )
    `
  ).run();
  console.log("initLeaveRecords completed");
}

// purgeData();
initAuthCredentials();
initEmployeeDetails();
initLeaveRecords();

export default db;

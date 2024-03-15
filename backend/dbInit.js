import Database from "better-sqlite3";
const db = new Database("ems.db", { verbose: console.log });
db.pragma("journal_mode = WAL");

function purgeData() {
  db.prepare("DROP TABLE IF EXISTS AUTH_CRED").run();
  db.prepare("DROP TABLE IF EXISTS EMPLOYEE_DETAILS").run();
  console.log("Purge completed");
}

function initAuthCredentials() {
  const query = db.prepare(
    `CREATE TABLE IF NOT EXISTS AUTH_CRED (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       empId INTEGER NON NULL UNIQUE,
       role TEXT NOT NULL,
       email TEXT NOT NULL,
       pass TEXT NOT NULL,
       passHash TEXT NOT NULL
    )
`
  );

  query.run();
  console.log("initAuthCredentials completed");
}

function initEmployeeDetails() {
  const query = db.prepare(
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
        skillSet TEXT NOT NULL 
        )
    `
  );

  console.log(query.run());
  console.log("initEmployeeDetails completed");
}

function initLeaves() {
  const query = db.prepare(
    `
    CREATE TABLE IF NOT EXISTS LEAVES (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        empId INTEGER NON NULL UNIQUE,
        balance INTEGER NOT NULL,
        )
    `
  );
}

// purgeData();
initAuthCredentials();
initEmployeeDetails();

export default db;

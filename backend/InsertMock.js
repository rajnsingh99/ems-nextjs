import db from "./dbInit.js";
import { AUTH_DATA } from "./AuthMock.js";
import { PROFILE_DETAIL_DATA } from "./ProfileDetailMock.js";
import { LEAVE_RECORDS_DATA } from "./LeaveMock.js";

function insertAuthMock() {
  const statement = db.prepare(`
  INSERT INTO AUTH_CRED VALUES (
    null,
    @empId,
    @role,
    @email,
    @pass,
    @passHash
 )`);

  AUTH_DATA.map((data) => {
    console.log(data.empId);
    statement.run(data);
  });
}

function insertProfileDetailMock() {
  const statement = db.prepare(`
        INSERT INTO EMPLOYEE_DETAILS VALUES (
            null,
            @empId,
            @role,
            @email,
            @firstName,
            @lastName,
            @gender,
            @department,
            @country,
            @state,
            @city,
            @dob,
            @doj,
            @photo,
            @address,
            @phoneNo,
            @maritalStatus,
            @raiting,
            @personalEmail,
            @employementStatus,
            @annualLeaves,
            @emergencyLeaves,
            @medicalLeaves,
            @unpaidLeaves,
            @skillSet
    )`);

  PROFILE_DETAIL_DATA.map((data) => {
    console.log(data.empId);
    statement.run(data);
  });
}

function insertLeaveRecordsMock() {
  const statement = db.prepare(`
        INSERT INTO LEAVE_RECORDS VALUES (
            null,
            @empId,
            @leaveType,
            @startDate,
            @endDate,
            @nod,
            @reason,
            @approver,
            @remark,
            @status
    )`);

  LEAVE_RECORDS_DATA.map((data) => {
    console.log(data.empId);
    statement.run(data);
  });
}

function purgeData() {
  // db.prepare("DROP TABLE IF EXISTS AUTH_CRED").run();
  // db.prepare("DROP TABLE IF EXISTS EMPLOYEE_DETAILS").run();
  // db.prepare("DROP TABLE IF EXISTS LEAVE_RECORDS").run();

  db.prepare("DELETE FROM AUTH_CRED").run();
  db.prepare("DELETE FROM EMPLOYEE_DETAILS").run();
  db.prepare("DELETE FROM LEAVE_RECORDS").run();
  console.log("Purge completed");
}

purgeData();
insertAuthMock();
insertProfileDetailMock();
insertLeaveRecordsMock();

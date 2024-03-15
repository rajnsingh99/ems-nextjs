import db from "./dbInit.js";
import { AUTH_DATA } from "./AuthMock.js";
import { PROFILE_DETAIL_DATA } from "./ProfileDetailMock.js";

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
            @skillSet
    )`);

  PROFILE_DETAIL_DATA.map((data) => {
    console.log(data.empId);
    statement.run(data);
  });
}

insertAuthMock();
insertProfileDetailMock();

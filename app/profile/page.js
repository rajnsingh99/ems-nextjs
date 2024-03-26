"use client";
import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getEmployee } from "../components/Actions";
import { DotLoader } from "react-spinners";

const PERSONAL_INFO = [
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },
  { id: "dob", label: "Date of Birth" },
  { id: "maritalStatus", label: "Marital Status" },
  { id: "country", label: "Country" },
  { id: "state", label: "State" },
  { id: "city", label: "City" },
  { id: "address", label: "Address" },
  { id: "phoneNo", label: "Contact" },
  { id: "personalEmail", label: "Personal Email" },
];

const EMPLOYMENT_INFO_TAB = [
  { id: "empId", label: "Employee Id" },
  { id: "role", label: "Role" },
  { id: "department", label: "Department" },
  { id: "doj", label: "Date of Joining" },
  { id: "employementStatus", label: "Employement Status" },
  { id: "raiting", label: "Raiting" },
];

export default function Profile() {
  const [profileData, setProfileData] = useState({
    empDetail: {},
    isLoading: true,
  });

  useEffect(() => {
    async function getProfileData() {
      const empDetailRes = await getEmployee(50001);
      setProfileData(() => {
        return {
          empDetail: empDetailRes,
          isLoading: false,
        };
      });
    }

    getProfileData();
  }, []);

  return (
    <BaseLayout>
      <main className="ep-base-container">
        {profileData.isLoading ? (
          <DotLoader className="loading-spinner" color="#8e2de2" />
        ) : (
          <form className="profile-form">
            <div className="profile-form-container">
              <section className="profile-form-section">
                <h3>Personal Info</h3>
                {PERSONAL_INFO.map((info) => {
                  return (
                    <div>
                      <h6>{info.label}</h6>
                      <h4>{profileData.empDetail[info.id]}</h4>
                    </div>
                  );
                })}
              </section>
              <section className="profile-form-section">
                <h3>Employment info</h3>
                {EMPLOYMENT_INFO_TAB.map((info) => {
                  return (
                    <div>
                      <h6>{info.label}</h6>
                      <h4>{profileData.empDetail[info.id]}</h4>
                    </div>
                  );
                })}
              </section>
              <section className="profile-form-section-pi">
                <div className="profile-form-userImageContainer">
                  <h4>Employee Image</h4>
                  <div className="profile-userimage-container">
                    <Image
                      src={`/${profileData.empDetail.photo}`}
                      width={200}
                      height={200}
                      alt="Profile Image"
                      className="profile-userimage"
                    />
                  </div>
                </div>
                <div className="profile-form-techStackContainer">
                  <h4>Skill Set</h4>
                  <ul className="profile-form-techStackList">
                    {profileData.empDetail.skillSet
                      .split(",")
                      .map((skill, index) => {
                        return <li key={index}>{skill.replace("-", " ")}</li>;
                      })}
                  </ul>
                </div>
              </section>
            </div>
            <section className="profile-form-action">
              <button>Save Changes</button>
              <button>Cancel</button>
            </section>
          </form>
        )}
      </main>
    </BaseLayout>
  );
}

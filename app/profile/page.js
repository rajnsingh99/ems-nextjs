"user client";

import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import { EMP_INFO_MOCK, EMP_SKILL_SET } from "../utility/MockData.js";

export default function Profile() {
  return (
    <BaseLayout>
      <main className="ep-base-container">
        <form className="profile-form">
          <div className="profile-form-container">
            <section className="profile-form-section">
              <h3>Personal Info</h3>
              <div className="profile-form-section-info">
                <h6>First Name</h6>
                <h4>{EMP_INFO_MOCK[0].first_name}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Last Name</h6>
                <h4>{EMP_INFO_MOCK[0].last_name}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Date of Birth</h6>
                <h4>{EMP_INFO_MOCK[0].dob}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Country</h6>
                <h4>{EMP_INFO_MOCK[0].country}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Martial Status</h6>
                <h4>{EMP_INFO_MOCK[0].maritalStatus}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>State</h6>
                <h4>{EMP_INFO_MOCK[0].state}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>City</h6>
                <h4>{EMP_INFO_MOCK[0].city}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Address</h6>
                <h4>{EMP_INFO_MOCK[0].address}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Contact</h6>
                <h4>{EMP_INFO_MOCK[0].phoneNo}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Personal Mail</h6>
                <h4>{EMP_INFO_MOCK[0].pemail}</h4>
              </div>
            </section>
            <section className="profile-form-section">
              <h3>Employment info</h3>
              <div className="profile-form-section-info">
                <h6>Employee Id</h6>
                <h4>{EMP_INFO_MOCK[0].empId}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Role</h6>
                <h4>{EMP_INFO_MOCK[0].role}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Department</h6>
                <h4>{EMP_INFO_MOCK[0].department}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Date of Joining</h6>
                <h4>{EMP_INFO_MOCK[0].doj}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Status</h6>
                <h4>{EMP_INFO_MOCK[0].status}</h4>
              </div>
              <div className="profile-form-section-info">
                <h6>Rating</h6>
                <h4>{EMP_INFO_MOCK[0].raiting}</h4>
              </div>
            </section>
            <section className="profile-form-section-pi">
              <div className="profile-form-userImageContainer">
                <h4>Employee Image</h4>
                <Image
                  src="/man.png"
                  width={200}
                  height={200}
                  alt="Profile Image"
                  className="profile-userimage"
                />
              </div>
              <div className="profile-form-techStackContainer">
                <h4>Skill Set</h4>
                <ul className="profile-form-techStackList">
                  {EMP_SKILL_SET.map((stack, index) => {
                    return <li key={index}>{stack}</li>;
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
      </main>
    </BaseLayout>
  );
}

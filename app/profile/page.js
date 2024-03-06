"user client";

import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import { EMP_INFO_PLACEHOLDERS } from "../utility/ProfileUtils.js";
import { EMP_INFO_MOCK } from "../utility/MockData.js";

export default function Profile() {
  return (
    <BaseLayout>
      <form className="profile-form">
        <div className="profile-form-container">
          <section className="profile-form-section">
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
              <h3>{EMP_INFO_MOCK[0].dob}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Country</h6>
              <h3>{EMP_INFO_MOCK[0].country}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Martial Status</h6>
              <h3>{EMP_INFO_MOCK[0].maritalStatus}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>State</h6>
              <h3>{EMP_INFO_MOCK[0].state}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>City</h6>
              <h3>{EMP_INFO_MOCK[0].city}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Address</h6>
              <h3>{EMP_INFO_MOCK[0].address}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Contact</h6>
              <h3>{EMP_INFO_MOCK[0].phoneNo}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Personal Mail</h6>
              <h3>{EMP_INFO_MOCK[0].pemail}</h3>
            </div>
          </section>
          <section className="profile-form-section">
            <div className="profile-form-section-info">
              <h6>Employee Id</h6>
              <h3>{EMP_INFO_MOCK[0].empId}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Role</h6>
              <h3>{EMP_INFO_MOCK[0].role}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Department</h6>
              <h3>{EMP_INFO_MOCK[0].department}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Date of Joining</h6>
              <h3>{EMP_INFO_MOCK[0].doj}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Status</h6>
              <h3>{EMP_INFO_MOCK[0].status}</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Rating</h6>
              <h3>{EMP_INFO_MOCK[0].raiting}</h3>
            </div>
          </section>
          <section className="profile-form-section">
            <h5>PROFILE IMAGE</h5>
            <Image
              src="/man.png"
              width={200}
              height={200}
              alt="Profile Image"
              className="profile-userimage"
            />
          </section>
        </div>
        <section className="profile-form-action">
          <button>Save Changes</button>
          <button>Cancel</button>
        </section>
      </form>
    </BaseLayout>
  );
}

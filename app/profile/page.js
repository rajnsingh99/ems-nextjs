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
              <h3>EMP_INFO_MOCK.first_name</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Last Name</h6>
              <h3>Singh</h3>
            </div>
            <div className="profile-form-section-info">
              <h6>Last Name</h6>
              <h3>Singh</h3>
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

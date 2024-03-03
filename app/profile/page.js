"user client";

import BaseLayout from "../components/BaseLayout";
import Image from "next/image";

export default function Profile() {
  return (
    <BaseLayout>
      <form className="profile-form">
        <div className="profile-form-container">
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

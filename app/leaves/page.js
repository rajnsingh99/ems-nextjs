import BaseLayout from "../components/BaseLayout";
import Image from "next/image";

export default function Leaves() {
  return (
    <BaseLayout>
      <div className="base-container">
        <div className="leaves-employee-container">
          <section className="leaves-employee-info-section">
            <Image src="/boy.png" width={80} height={80} alt="Employee Image" />
            <section className="leaves-employee-info-sub-section">
              <h3> Raj Singh</h3>
              <ul className="leaves-employee-info-sub-section-contanct-list">
                <li>
                  <Image src="/boy.png" width={20} height={20} alt="Icon" />
                  <p>rajnayans99@gmail.com</p>
                </li>
                <li>
                  <Image src="/hacker.png" width={20} height={20} alt="Icon" />
                  <p>Senior Software Developer</p>
                </li>
              </ul>
            </section>
          </section>
          <section className="leaves-employee-info-leave-section">
            <h4>Leave Balance</h4>
            <ul className="leaves-employee-info-leave-list">
              <li>
                <p>Annual Leave:</p>
                <p>22</p>
              </li>
              <li>
                <p>Emergency Leave:</p>
                <p>3</p>
              </li>
              <li>
                <p>Medical Leave:</p>
                <p>1</p>
              </li>
              <li>
                <p>Upaid Leave:</p>
                <p>7</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </BaseLayout>
  );
}

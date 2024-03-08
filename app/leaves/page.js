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
        <div className="lm-apply-container">
          <h4>Apply for leaves</h4>
          <div className="lm-apply-sub-container">
            <div className="lm-apply-leave-type-container">
              <section className="lm-apply-leave-type-section">
                <p>Leave Type</p>
                <select name="leave-type-name" id="leave-type-id">
                  <option value="annual-leave">Annual Leave</option>
                  <option value="emergency-leave">Emergency Leave</option>
                  <option value="medical-leave">Medical Leave</option>
                  <option value="unpaid-leave">Unpaid Leave</option>
                </select>
              </section>
              <section className="lm-apply-leave-reason-section">
                <p>Reasons</p>
                <textarea type="text" />
              </section>
            </div>
            <div className="lm-apply-ad-container">
              <section className="lm-apply-ad-lp-section">
                <p>Leave Period</p>
                <label>Date picker</label>
              </section>
              <section className="lm-apply-ad-nod-section">
                <p>No of Days</p>
                <label>3</label>
              </section>
              <section className="lm-apply-ad-lb-section">
                <p>Leave Balance</p>
                <label>27</label>
              </section>
            </div>
          </div>
        </div>
        <div className="lm-records-container">
          <h4>Records</h4>
          <div className="lm-record-table-container">
            <table className="lm-records-table">
              <tbody>
                <tr>
                  <th>Leave Type</th>
                  <th>Date</th>
                  <th>Days</th>
                  <th>Remark</th>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
                <tr>
                  <td>Medical Leave</td>
                  <td>9-Jan-1994</td>
                  <td>1</td>
                  <td>Sick leave</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

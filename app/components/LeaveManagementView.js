"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getEmployee, getLeaveRecords } from "../components/Actions";
import { DotLoader } from "react-spinners";

export default function LeaveManagementView() {
  const [leaveData, setLeaveData] = useState({
    empDetail: {},
    records: [],
    isLoading: true,
  });

  useEffect(() => {
    async function getLeaveData() {
      const empDetail = await getEmployee(50001);
      const leaveRecords = await getLeaveRecords(50001);

      setLeaveData(() => {
        return {
          empDetail: empDetail,
          records: leaveRecords,
          isLoading: false,
        };
      });
    }

    getLeaveData();
  }, []);

  return (
    <div className="base-container">
      {leaveData.isLoading ? (
        <DotLoader className="loading-spinner" color="#8e2de2" />
      ) : (
        <>
          <div className="leaves-employee-container">
            <section className="leaves-employee-info-section">
              <Image
                src={`/${leaveData.empDetail.photo}`}
                width={80}
                height={80}
                alt="Employee Image"
              />
              <section className="leaves-employee-info-sub-section">
                <h3>
                  {leaveData.empDetail.firstName +
                    " " +
                    leaveData.empDetail.lastName}
                </h3>
                <ul className="leaves-employee-info-sub-section-contanct-list">
                  <li>
                    <Image src="/email.png" width={20} height={20} alt="Icon" />
                    <p>{leaveData.empDetail.email}</p>
                  </li>
                  <li>
                    <Image
                      src="/pyramid.png"
                      width={20}
                      height={20}
                      alt="Icon"
                    />
                    <p>{leaveData.empDetail.department}</p>
                  </li>
                </ul>
              </section>
            </section>
            <section className="leaves-employee-info-leave-section">
              <h4>Leave Balance</h4>
              <ul className="leaves-employee-info-leave-list">
                <li>
                  <p>Annual Leave:</p>
                  <p>{leaveData.empDetail.annualLeaves}</p>
                </li>
                <li>
                  <p>Emergency Leave:</p>
                  <p>{leaveData.empDetail.emergencyLeaves}</p>
                </li>
                <li>
                  <p>Medical Leave:</p>
                  <p>{leaveData.empDetail.medicalLeaves}</p>
                </li>
                <li>
                  <p>Upaid Leave:</p>
                  <p>{leaveData.empDetail.unpaidLeaves}</p>
                </li>
              </ul>
            </section>
          </div>
          <div className="lm-apply-container">
            <h4>Apply for leaves:</h4>
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
            <h4>Records: </h4>
            <div className="lm-record-table-container">
              <table className="lm-records-table">
                <tbody>
                  <tr>
                    <th>Leave Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Applicable Days</th>
                    <th>Reason</th>
                    <th>Approver</th>
                    <th>Remark</th>
                    <th>Status</th>
                  </tr>
                  {leaveData.records.map((record) => {
                    return (
                      <tr>
                        <td>{record.leaveType}</td>
                        <td>{record.startDate}</td>
                        <td>{record.endDate}</td>
                        <td>{record.nod}</td>
                        <td>{record.reason}</td>
                        <td>{record.approver}</td>
                        <td>{record.remark}</td>
                        <td>{record.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { SUGGESION_LIST } from "../utility/SuggestionMock";
import { getAllEmployee, getEmployee } from "./Actions";
import { DotLoader } from "react-spinners";

export default function DashboardView({ empId }) {
  const [searchInput, setSearchInput] = useState("");
  const [dashboardData, setDashboardData] = useState({
    empDetail: {},
    empList: [],
    isLoading: true,
  });

  let empFilteredList = dashboardData.empList;
  const suggestionClickHandler = (e) => {
    alert(e.target.value);
    setSearchInput(e.target.value);
  };

  const searchInputHandler = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  if (searchInput.length > 0) {
    empFilteredList = [];
    if (searchInput === "All") {
      empFilteredList = dashboardData.empList;
    } else {
      dashboardData.empList.map((empData) => {
        if (
          empData.firstName.includes(searchInput) ||
          empData.lastName.includes(searchInput) ||
          empData.department.includes(searchInput) ||
          empData.firstName.toLowerCase().includes(searchInput) ||
          empData.lastName.toLowerCase().includes(searchInput) ||
          empData.department.toLowerCase().includes(searchInput) ||
          empData.firstName.toUpperCase().includes(searchInput) ||
          empData.lastName.toUpperCase().includes(searchInput) ||
          empData.department.toUpperCase().includes(searchInput)
        ) {
          empFilteredList.push(empData);
        }
      });
    }
  } else {
    empFilteredList = dashboardData.empList;
  }

  useEffect(() => {
    async function getDashboardData() {
      const empDetail = await getEmployee(empId);
      console.log("empDetail : " + empDetail);
      const empList = await getAllEmployee();
      setDashboardData(() => {
        return { empDetail: empDetail, empList: empList, isLoading: false };
      });
    }
    getDashboardData();
  }, []);

  return (
    <main className="dashboard-base-container">
      {dashboardData.isLoading ? (
        <DotLoader className="loading-spinner" color="#8e2de2" />
      ) : (
        <>
          <div className="searchbar-wrapper">
            <div className="employee-wrapper">
              <Image
                src={`/${dashboardData.empDetail.photo}`}
                width={85}
                height={85}
                alt="Employee image"
                className="dashboard-user-image"
              />
              <section className="employee-name-wrapper">
                <p className="welcome-txt">Welcome Back !!</p>
                <p className="employee-name">
                  {dashboardData.empDetail.firstName +
                    " " +
                    dashboardData.empDetail.lastName}
                </p>
              </section>
            </div>
            <input
              type="text"
              className="searchBar-input"
              placeholder="Search here"
              onChange={searchInputHandler}
              value={searchInput}
            />
          </div>
          <ul className="suggestion-list">
            {SUGGESION_LIST.map((suggestion, index) => {
              return (
                <li key={index}>
                  <button
                    value={suggestion}
                    onClick={(e) => suggestionClickHandler(e, "value")}
                  >
                    {suggestion}
                  </button>
                </li>
              );
            })}
          </ul>
          <section className="dashboard-pc-container">
            <ul className="dashboard-pc-list">
              {empFilteredList.map((empData) => {
                return (
                  <li key={empData.empId}>
                    <ProfileCard empData={empData} />
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </main>
  );
}

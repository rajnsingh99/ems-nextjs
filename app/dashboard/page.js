"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import ProfileCard from "../components/ProfileCard";
import { getAllEmployee, getEmployee } from "../components/Actions";
import { SUGGESION_LIST } from "../utility/SuggestionMock";

const dashboardPlaceholder = {
  empDetail: {
    firstName: "",
    lastName: "",
    photo: "boy.png",
  },
  empList: [],
  isLoading: false,
};

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState("");
  const [dashboardData, setDashboardData] = useState(dashboardPlaceholder);
  let empFilteredList = [];

  useEffect(() => {
    async function getDashboardData() {
      const empDetailRes = await getEmployee(50001);
      const empListRes = await getAllEmployee();
      setDashboardData(() => {
        return {
          empDetail: empDetailRes,
          empList: empListRes,
          isLoading: true,
        };
      });
    }
    getDashboardData();
  }, []);

  const suggestionClickHandler = (suggestion) => {
    empFilteredList = [];
    if (suggestion === "All") {
      empFilteredList = dashboardData.empList;
    } else {
      dashboardData.empList.map((empData) => {
        if (empData.designation === suggestion) {
          empFilteredList.push(empData);
        }
      });
    }
  };

  const searchInputHandler = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  if (searchInput.length > 0) {
    empFilteredList = [];
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
        console.log("Pushed " + empData.firstName);
        empFilteredList.push(empData);
      }
    });
  } else {
    empFilteredList = dashboardData.empList;
  }

  return (
    <BaseLayout>
      <main className="dashboard-base-container">
        <div className="searchbar-wrapper">
          <div className="employee-wrapper">
            <Image
              src={`/${dashboardData.empDetail.photo}`}
              width={80}
              height={80}
              alt="Employee image"
              className="dashboard-user-image"
            />
            <section className="employee-name-wrapper">
              <p className="welcome-txt">Welcome Back</p>
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
          {SUGGESION_LIST.map((suggestion) => {
            return (
              <li key={suggestion}>
                <button
                  onClick={(suggestion) => suggestionClickHandler(suggestion)}
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
      </main>
    </BaseLayout>
  );
}

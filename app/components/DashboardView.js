"use client";

import Image from "next/image";
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import { SUGGESION_LIST } from "../utility/SuggestionMock";

export default function DashboardView({ employeeDetail, employeeList }) {
  const [searchInput, setSearchInput] = useState("");
  let empFilteredList = employeeList;

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
      empFilteredList = employeeList;
    } else {
      employeeList.map((empData) => {
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
    empFilteredList = employeeList;
  }

  return (
    <main className="dashboard-base-container">
      <div className="searchbar-wrapper">
        <div className="employee-wrapper">
          <Image
            src={`/${employeeDetail.photo}`}
            width={85}
            height={85}
            alt="Employee image"
            className="dashboard-user-image"
          />
          <section className="employee-name-wrapper">
            <p className="welcome-txt">Welcome Back !!</p>
            <p className="employee-name">
              {employeeDetail.firstName + " " + employeeDetail.lastName}
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
    </main>
  );
}

"use client";

import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import { useState } from "react";
import ProfileCard from "../components/ProfileCard";

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    countries.filter((country) => {
      return country.name.includes(searchInput);
    });
  }

  return (
    <BaseLayout>
      <main className="dashboard-base-container">
        <div className="searchbar-wrapper">
          <div className="employee-wrapper">
            <Image
              src="/hacker.png"
              width={80}
              height={80}
              alt="Employee image"
              className="dashboard-user-image"
            />
            <section className="employee-name-wrapper">
              <p className="welcome-txt">Welcome Back</p>
              <p className="employee-name">Raj Singh</p>
            </section>
          </div>
          <input
            type="text"
            className="searchBar-input"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />
        </div>
        <ul className="suggestion-list">
          <li>All</li>
          <li>Employees</li>
          <li>Technician</li>
          <li>Support Staff</li>
        </ul>

        <section className="dashboard-pc-container">
          <ul className="dashboard-pc-list">
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
            <li>
              <ProfileCard />
            </li>
          </ul>
        </section>
      </main>
    </BaseLayout>
  );
}

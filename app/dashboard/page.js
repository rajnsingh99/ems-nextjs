"use client";

import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import { useState } from "react";

const countries = [

    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent:"Asia" }
  
  ];

export default function Dashboard() {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          countries.filter((country) => {
          return country.name.match(searchInput);
      });
    }

    return (
        <BaseLayout>
            <div className="searchbar-wrapper">
                <div className="employee-wrapper">
                    <Image
                        src="/images.jpeg"
                        width={80}
                        height={80}
                        className="sidebar-logo"
                    />
                    <section className="employee-name-wrapper">
                        <p className="welcome-txt">Welcome Back</p>
                        <p className="employee-name">Raj Singh</p>
                    </section>
                    <input
                        type="text"
                        placeholder="Search here"
                        onChange={handleChange}
                        value={searchInput} />
                </div>
            </div>
        </BaseLayout>
    );
}
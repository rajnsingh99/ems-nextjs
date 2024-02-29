"use client";

import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import { useState } from "react";
import Table from "../components/Table.js"
import ProfileCard from "../components/ProfileCard";

const MOCK_DATA = [

    [{ "id": 1, "first_name": "Huntington", "last_name": "Guyan", "email": "hguyan0@reddit.com", "gender": "Male" },
    { "id": 2, "first_name": "Tierney", "last_name": "Dunsmuir", "email": "tdunsmuir1@weebly.com", "gender": "Female" },
    { "id": 3, "first_name": "Colin", "last_name": "Hailston", "email": "chailston2@purevolume.com", "gender": "Male" },
    { "id": 4, "first_name": "Waldo", "last_name": "Burgett", "email": "wburgett3@bigcartel.com", "gender": "Male" },
    { "id": 5, "first_name": "Josey", "last_name": "Etherington", "email": "jetherington4@hibu.com", "gender": "Female" },
    { "id": 6, "first_name": "Tam", "last_name": "Bellard", "email": "tbellard5@theglobeandmail.com", "gender": "Male" },
    { "id": 7, "first_name": "Reiko", "last_name": "Ilyushkin", "email": "rilyushkin6@google.co.uk", "gender": "Female" },
    { "id": 8, "first_name": "Bridgette", "last_name": "Peasegod", "email": "bpeasegod7@abc.net.au", "gender": "Female" },
    { "id": 9, "first_name": "Marieann", "last_name": "Easun", "email": "measun8@tinypic.com", "gender": "Female" },
    { "id": 10, "first_name": "Whitman", "last_name": "Bear", "email": "wbear9@npr.org", "gender": "Genderqueer" },
    { "id": 11, "first_name": "Hanni", "last_name": "Cohane", "email": "hcohanea@discovery.com", "gender": "Bigender" },
    { "id": 12, "first_name": "Bertie", "last_name": "Davioud", "email": "bdavioudb@newyorker.com", "gender": "Male" },
    { "id": 13, "first_name": "Eziechiele", "last_name": "Laible", "email": "elaiblec@blogtalkradio.com", "gender": "Male" },
    { "id": 14, "first_name": "Chane", "last_name": "Tipler", "email": "ctiplerd@weebly.com", "gender": "Male" },
    { "id": 15, "first_name": "Holden", "last_name": "Farries", "email": "hfarriese@ibm.com", "gender": "Male" },
    { "id": 16, "first_name": "Birk", "last_name": "Spurr", "email": "bspurrf@spiegel.de", "gender": "Male" },
    { "id": 17, "first_name": "Pincus", "last_name": "Lissandre", "email": "plissandreg@pagesperso-orange.fr", "gender": "Male" },
    { "id": 18, "first_name": "Huey", "last_name": "Dummer", "email": "hdummerh@github.io", "gender": "Male" },
    { "id": 19, "first_name": "Adela", "last_name": "Leyrroyd", "email": "aleyrroydi@foxnews.com", "gender": "Agender" },
    { "id": 20, "first_name": "Dorothea", "last_name": "Ratke", "email": "dratkej@studiopress.com", "gender": "Female" },
    { "id": 21, "first_name": "Alexis", "last_name": "Faragher", "email": "afaragherk@slate.com", "gender": "Male" },
    { "id": 22, "first_name": "Anthia", "last_name": "Garretts", "email": "agarrettsl@phpbb.com", "gender": "Female" },
    { "id": 23, "first_name": "Amata", "last_name": "True", "email": "atruem@china.com.cn", "gender": "Female" },
    { "id": 24, "first_name": "Mireielle", "last_name": "Westmarland", "email": "mwestmarlandn@dagondesign.com", "gender": "Female" },
    { "id": 25, "first_name": "Ephrem", "last_name": "Whitaker", "email": "ewhitakero@studiopress.com", "gender": "Male" },
    { "id": 26, "first_name": "Bord", "last_name": "Fallens", "email": "bfallensp@amazon.co.uk", "gender": "Male" },
    { "id": 27, "first_name": "Karalynn", "last_name": "Payne", "email": "kpayneq@wsj.com", "gender": "Female" },
    { "id": 28, "first_name": "Shandee", "last_name": "Penwright", "email": "spenwrightr@seesaa.net", "gender": "Female" },
    { "id": 29, "first_name": "Eolande", "last_name": "Gagen", "email": "egagens@hhs.gov", "gender": "Female" },
    { "id": 30, "first_name": "Hebert", "last_name": "Johnsey", "email": "hjohnseyt@usatoday.com", "gender": "Male" },
    { "id": 31, "first_name": "Adeline", "last_name": "Von Hindenburg", "email": "avonhindenburgu@friendfeed.com", "gender": "Female" },
    { "id": 32, "first_name": "Teddy", "last_name": "Skirving", "email": "tskirvingv@vk.com", "gender": "Female" },
    { "id": 33, "first_name": "Arabelle", "last_name": "O'Neil", "email": "aoneilw@infoseek.co.jp", "gender": "Female" },
    { "id": 34, "first_name": "Verena", "last_name": "Shotboulte", "email": "vshotboultex@canalblog.com", "gender": "Female" },
    { "id": 35, "first_name": "Hannah", "last_name": "Annett", "email": "hannetty@omniture.com", "gender": "Female" },
    { "id": 36, "first_name": "Bat", "last_name": "Martinuzzi", "email": "bmartinuzziz@godaddy.com", "gender": "Male" },
    { "id": 37, "first_name": "Tucky", "last_name": "Jacqueminot", "email": "tjacqueminot10@forbes.com", "gender": "Male" },
    { "id": 38, "first_name": "Dorolisa", "last_name": "Lesor", "email": "dlesor11@squidoo.com", "gender": "Female" },
    { "id": 39, "first_name": "Aylmar", "last_name": "Lambourne", "email": "alambourne12@sciencedirect.com", "gender": "Polygender" },
    { "id": 40, "first_name": "Willey", "last_name": "Shellard", "email": "wshellard13@google.com.br", "gender": "Male" },
    { "id": 41, "first_name": "Sophey", "last_name": "Blewett", "email": "sblewett14@cisco.com", "gender": "Female" },
    { "id": 42, "first_name": "Welsh", "last_name": "Ibbitt", "email": "wibbitt15@amazon.co.uk", "gender": "Male" },
    { "id": 43, "first_name": "Sigvard", "last_name": "Strut", "email": "sstrut16@narod.ru", "gender": "Male" },
    { "id": 44, "first_name": "Adriaens", "last_name": "Brent", "email": "abrent17@desdev.cn", "gender": "Female" },
    { "id": 45, "first_name": "Emelda", "last_name": "Acheson", "email": "eacheson18@google.fr", "gender": "Female" },
    { "id": 46, "first_name": "Griselda", "last_name": "Desvignes", "email": "gdesvignes19@smugmug.com", "gender": "Agender" },
    { "id": 47, "first_name": "Lionel", "last_name": "Inger", "email": "linger1a@ox.ac.uk", "gender": "Male" },
    { "id": 48, "first_name": "Annice", "last_name": "Baline", "email": "abaline1b@yahoo.co.jp", "gender": "Female" },
    { "id": 49, "first_name": "Dave", "last_name": "Bisterfeld", "email": "dbisterfeld1c@typepad.com", "gender": "Male" },
    { "id": 50, "first_name": "Alyosha", "last_name": "Tromans", "email": "atromans1d@umn.edu", "gender": "Male" }]

];

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
            <div className="container">
                <div className="searchbar-wrapper">
                    <div className="employee-wrapper">
                        <Image
                            src="/hacker.png"
                            width={80}
                            height={80}
                            alt="Employee image"
                            className="sidebar-logo"
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
                        value={searchInput} />
                </div>
                <ul className="suggestion-list">
                    <li>All</li>
                    <li>Employees</li>
                    <li>Technician</li>
                    <li>Support Staff</li>
                </ul>

                <ul className="pc-wrapper">
                    <li><ProfileCard/></li>
                    <li><ProfileCard/></li>
                    <li><ProfileCard/></li>
                    <li><ProfileCard/></li>
                    <li><ProfileCard/></li>
                    <li><ProfileCard/></li>
                    <li><ProfileCard/></li>
                    <li><ProfileCard/></li>
                    <li><ProfileCard/></li>
                </ul>
            </div>

        </BaseLayout>
    );
}
import Image from "next/image";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserTie, FaCalendarTimes } from "react-icons/fa";

export default function SideBar() {
  const logoutHandler = () => {
    redirect("/logout");
  };

  return (
    <div className="sidebar-wrapper">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-top-image-container">
            <Image
              src="/ems_logo.png"
              width={100}
              height={100}
              className="sidebar-logo"
              alt="logo"
            />
          </div>
          <p className="sidebar-top-title">Employee Management System</p>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link href="/dashboard" className="sidebar-link">
              <span className="sidebar-icon">
                <MdSpaceDashboard />
              </span>
              <span className="sidebar-icon-title">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link href="/profile" className="sidebar-link">
              <span className="sidebar-icon">
                <FaUserTie />
              </span>
              <span className="sidebar-icon-title">Profile</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link href="/leaves" className="sidebar-link">
              <span className="sidebar-icon">
                <FaCalendarTimes />
              </span>
              <span className="sidebar-icon-title">Leaves</span>
            </Link>
          </li>
        </ul>
        <Link href="/logout" className="sidebar-logout-btn">
          Logout
        </Link>
      </aside>
    </div>
  );
}

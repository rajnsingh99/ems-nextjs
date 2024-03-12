import { COUNTRY_LIST } from "../utility/CountryData";
import Image from "next/image";

export default function Onboard() {
  return (
    <>
      <form className="form-container">
        <h4>Name</h4>
        <section className="form-info-section">
          <div className="form-info-metadata">
            <div className="form-first-name">
              <input placeholder="Raj"></input>
              <p>First Name</p>
            </div>
            <div className="form-last-name">
              <input placeholder="Singh"></input>
              <p>Last Name</p>
            </div>
            <h4>E-mail</h4>
            <input type="email" placeholder="rajnsingh99@gmail.com"></input>
            <h4>Password</h4>
            <input placeholder="************"></input>
            <h4>Phone</h4>
            <input type="number" placeholder="+91 8770349309"></input>
          </div>
          <div className="form-info-avatar">
            <Image
              src="/hacker.png"
              width={250}
              height={250}
              alt="Employee image"
              className="form-info-avatar-logo"
            />
            <button>Change Avatar</button>
          </div>
        </section>
        <section className="form-address-section">
          <h4>Address</h4>
          <input></input>
          <p>Street Address</p>
          <input></input>
          <p>Street Address Line 2</p>
          <div className="form-address-metadata">
            <section className="form-address-section1">
              <div>
                <input></input>
                <p>City</p>
              </div>
              <div>
                <input></input>
                <p>State/Province</p>
              </div>
            </section>
            <section className="form-address-section2">
              <div>
                <select
                  name="country-options"
                  id="country"
                  defaultValue="india"
                >
                  <option value="india">India</option>
                  <option value="america">America</option>
                  <option value="united-kingdom">United Kindom</option>
                  <option value="japan">Japan</option>
                  <option value="nepal">Nepal</option>
                  <option value="argentina">Argentina</option>
                </select>
                <p>Country</p>
              </div>
              <div>
                <input type="number" placeholder="452001"></input>
                <p>Postal Code</p>
              </div>
            </section>
          </div>
        </section>
        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

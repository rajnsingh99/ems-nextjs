import { COUNTRY_LIST } from "../utility/CountryData";

export default function Onboard() {
  return (
    <>
      <form className="form-container">
        <h4>Name</h4>
        <div className="form-name-container">
          <div className="form-first-name">
            <input placeholder="Raj"></input>
            <p>First Name</p>
          </div>

          <div className="form-last-name">
            <input placeholder="Singh"></input>
            <p>Last Name</p>
          </div>
        </div>
        <h4>E-mail</h4>
        <input placeholder="mymail@gmail.com"></input>
        <h4>Phone</h4>
        <input type="number" placeholder="9999999999"></input>

        <section className="form-address-section-container">
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
                <input></input>
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

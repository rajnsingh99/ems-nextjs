import Image from "next/image";

export default function ProfileCard({ empData }) {
  return (
    <div className="pc-container">
      <Image
        src={`/${empData.photo}`}
        width={80}
        height={100}
        className="pc-profilepic"
        alt="Employee Image"
      />
      <section className="pc-info-wrapper">
        <p className="pc-info-name">
          {empData.firstName + " " + empData.lastName}
        </p>
        <p className="pc-info-desgination">{empData.department}</p>
      </section>
    </div>
  );
}

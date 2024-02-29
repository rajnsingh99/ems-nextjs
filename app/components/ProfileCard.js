import Image from "next/image";

export default function ProfileCard() {
    return (
        <div className="pc-container">
            <Image
                src="/woman.png"
                width={80}
                height={100}
                className="pc-profilepic"
                alt="Employee Image"
            />
            <section className="pc-info-wrapper">
                <p className="pc-info-name">Raj Singh</p>
                <p className="pc-info-desgination">Tech lead</p>
            </section>
        </div>
    );
}
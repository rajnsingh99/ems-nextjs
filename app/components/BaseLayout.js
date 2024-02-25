import SideBar from "./SideBar";

export default function BaseLayout({ children }) {
    return (
        <div className="baselayout">
            <SideBar />
            {children}
        </div>
    );
}
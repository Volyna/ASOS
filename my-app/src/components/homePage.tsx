import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="container">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Link to="/">Home</Link>
                    <Link to="/page1">Page 1</Link>
                    <Link to="/page2">Page 2</Link>
                    <Link to="/page3">Page 3</Link>
                </div>
                <Outlet />
            </div>
        </>
    );
};
export default HomePage;
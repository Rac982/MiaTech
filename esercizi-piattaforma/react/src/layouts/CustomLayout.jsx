import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

function CustomLayout() {
    return (
        <>
            <Navbar />
            <div className="page-render-box">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default CustomLayout
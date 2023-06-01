import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { IAuthUser } from "../../auth/types";

const AdminLayout = () => {

    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AdminLayout;
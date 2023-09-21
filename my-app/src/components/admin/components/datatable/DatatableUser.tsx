import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { userRows, userColumns } from "../../datatablesource";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IGetAllUsers } from "../../../auth/types";
import { useDispatch } from "react-redux";
import axios from "axios";

const DatatableUsers = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IGetAllUsers[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5056/api/User/GetAllUsers")
      .then((response) => {
        const responseData = response.data;

        if (
          responseData &&
          responseData.payload &&
          Array.isArray(responseData.payload)
        ) {
          const dataArray = responseData.payload.map(
            (item: {
              id: number;
              email: string;
              phone: string;
              firstName: string;
              lastName: string;
              country: string;
              state: string;
              street: string;
              zipCode: string;
              city: string;
              homePhone: string;
            }) => ({
              id: item.id,
              email: item.email,
              phone: item.phone,
              firstName: item.firstName,
              lastName: item.lastName,
              country: item.country,
              state: item.state,
              street: item.street,
              zipCode: item.zipCode,
              city: item.city,
              homePhone: item.homePhone,
            })
          );

          setData(dataArray);
          console.log("dataARr", dataArray);
          setLoading(false);
        } else {
          console.error("Response data is not in the expected format");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  console.log("data", data);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="cellAction">
            <Link to="/admin/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <button
          className="buttons"
          onClick={() => navigate("/admin/users/new")}
        >
          ADD NEW
        </button>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableUsers;

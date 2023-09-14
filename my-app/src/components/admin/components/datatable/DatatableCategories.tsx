import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../../../modal/delete";
import { RemoveCategory } from "../../../../store/actions/categoryActions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ICategoryItem } from "../categories/types";

const DatatableCategories = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<ICategoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5056/api/Category/getAllCategories")
      .then((response) => {
        const responseData = response.data;

        if (
          responseData &&
          responseData.payload &&
          Array.isArray(responseData.payload)
        ) {
          const dataArray = responseData.payload.map(
            (item: { id: number; name: string }) => ({
              id: item.id,
              name: item.name,
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

  const DeleteCategoryHandler = (id: number) => {
    RemoveCategory(id);
  };

  const handleDelete = (id: number) => {
    setData(data.filter((item: { id: number }) => item.id !== id));
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
              <div className="viewButton">Edit</div>
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
    <>
      <div className="datatable">
        <div className="datatableTitle">
          Add new category
          <button
            className="buttons"
            onClick={() => navigate("/admin/categories/new")}
          >
            ADD NEW
          </button>
        </div>

        <DataGrid
          rows={data}
          columns={categoryColumns.concat(actionColumn)}
          pageSize={9}
          loading={loading}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default DatatableCategories;

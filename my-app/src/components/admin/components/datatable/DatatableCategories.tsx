import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns, categoryRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../../../modal/delete";
import { RemoveCategory } from "../../../../store/actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showCategory } from "../../../../store/actions/Categories/categoryAction";
import { RootState } from "../../../../store/reducers/rootReducer";
const DatatableCategories = () => {
  const [data, setData] = useState(categoryRows);
  const location = useLocation().pathname;

  const disp = useDispatch();
  const fetchCat = async () => {
    const response = await axios.get(
      "https://basos.itstep.click/api/Category/getAllCategories"
    );
    disp(showCategory(response.data.payload));
  };

  useEffect(() => {
    fetchCat();
  }, []);

  const cat = useSelector((state: RootState) => state.allCategory.categories);

  const categories = cat.map((category: any) => {
    const { id, name } = category;
    return (
      <Link to={location + "/" + name} key={id}>
        {name}
      </Link>
    );
  });

  console.log("Category: " + categories);

  const DeleteCategoryHandler = (id: number) => {
    RemoveCategory(id);
  };

  const navigate = useNavigate();

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
        <div>{categories}</div>

        <DataGrid
          className="datagrid"
          rows={data}
          columns={categoryColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default DatatableCategories;

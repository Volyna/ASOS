import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { Dispatch, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../../../modal/delete";
import { RemoveCategory } from "../../../../store/actions/CategoryActions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ICategoryItem } from "../categories/types";
import {
  CategoryActionTypes,
  CategoryesActions,
} from "../../../../store/reducers/CategoryReducer/types";
import { removeCategory } from "../../../../services/api-categories-service";
import { toast } from "react-toastify";

const DatatableCategories = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<ICategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

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
    const removeCategoryAsync = async (
      dispatch: Dispatch<CategoryesActions>
    ) => {
      try {
        const data = await removeCategory(id);

        const { response } = data;

        console.log(response.data);

        dispatch({
          type: CategoryActionTypes.SUCCESSFUL_REMOVE_CATEGORY,
          payload: id,
        });

        toast.success("Category removed successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });

        handleDelete(id);
      } catch (e) {
        toast.error("Some problems!!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch({
          type: CategoryActionTypes.SERVER_CATEGORY_ERROR,
          payload: "Unknown error",
        });
      }
    };

    removeCategoryAsync(dispatch);
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
            <Link
              to={`/admin/categories/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Edit</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => DeleteCategoryHandler(params.row.id)}
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

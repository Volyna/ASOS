import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns, categoryRows } from "../../datatablesource";
import { Link, useLocation, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../../../modal/delete";
import { RemoveCategory } from "../../../../store/actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showCategory } from "../../../../store/actions/Categories/categoryAction";
import { RootState } from "../../../../store/reducers/rootReducer";
import { ICategoryItem } from "../categories/types";
import http from "../../../../services/http_common";
import { APP_ENV } from "../../../../env";

const DatatableCategories = () => {
  // const location = useLocation().pathname;
  const navigate = useNavigate();
  const disp = useDispatch();

  const [data, setData] = useState<ICategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Array<ICategoryItem>>([]);

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
              // Добавьте другие поля, если они есть
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
  // const mappedCategories = categories.map((category) => {
  //   return {
  //     id: category.id, // Подставьте правильные поля
  //     name: category.name,
  //     // Добавьте остальные поля, если они есть в столбцах
  //   };
  // });

  // useEffect(() => {
  //   console.log(`${APP_ENV.REMOTE_HOST_NAME}`);
  //   http
  //     .get<Array<ICategoryItem>>(
  //       `http://localhost:5056/api/Category/getAllCategories`
  //     )
  //     .then((resp) => {
  //       console.log("resp = ", resp);
  //       setCategories(resp.data);
  //     });
  // }, []);

  const DeleteCategoryHandler = (id: number) => {
    RemoveCategory(id);
  };

  const fetchCat = async () => {
    const response = await axios.get(
      "http://localhost:5056/api/Category/getAllCategories"
    );
    disp(showCategory(response.data.payload));
  };

  useEffect(() => {
    fetchCat();
  }, []);

  const cat = useSelector((state: RootState) => state.allCategory.categories);

  // const mappedCategories = categories.map((category) => {
  //   return {
  //     id: category.id, // Подставьте правильные поля
  //     name: category.name,
  //     // Добавьте остальные поля, если они есть в столбцах
  //   };
  // });

  // const mapCategories = categories.map((category) => {
  //   return {
  //     id: category.id,
  //     name: category.name,
  //   };
  // });

  // console.log("Category: " + categories);

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

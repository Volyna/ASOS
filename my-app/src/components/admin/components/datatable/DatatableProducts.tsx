import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { productRows, productColumns } from "../../datatablesource";
import { Dispatch, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProductItem } from "../products/types";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../services/api-products-service";
import {
  ProductActionTypes,
  ProductsActions,
} from "../../../../store/reducers/productReducer/types";

const DatatableProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios

      .get("http://localhost:5056/api/Product/GetProducts")
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
              name: string;
              price: number;
              discount: number;
              description: string;
              color: string;
              size: string;
              brand: string;
              quantity: number;
              isInTheStock: boolean;
              image: string;
              category: string;
            }) => ({
              id: item.id,
              name: item.name,
              price: item.price,
              discount: item.discount,
              description: item.description,
              color: item.color,
              size: item.size,
              brand: item.brand,
              quantity: item.quantity,
              isInTheStock: item.isInTheStock,
              image: item.image,
              category: item.category,
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

  const DeleteProductHandler = (id: number) => {
    const removeCategoryAsync = async (dispatch: Dispatch<ProductsActions>) => {
      try {
        const data = await removeProduct(id);

        const { response } = data;

        console.log(response.data);

        dispatch({
          type: ProductActionTypes.REMOVE_PRODUCT_SUCCESSFUL,
          payload: id,
        });

        toast.success("Product removed successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });

        handleDelete(id);
      } catch (e) {
        toast.error("Some problems!!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch({
          type: ProductActionTypes.SERVER_PRODUCTS_ERROR,
          payload: "Unknown error",
        });
      }
    };

    removeCategoryAsync(dispatch);
  };

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
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => DeleteProductHandler(params.row.id)}
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
        Add new product
        <button
          className="buttons"
          onClick={() => navigate("/admin/products/new")}
        >
          ADD NEW
        </button>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        loading={loading}
      />
    </div>
  );
};

export default DatatableProducts;

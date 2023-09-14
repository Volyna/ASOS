import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { productRows, productColumns } from "../../datatablesource";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProductItem } from "../products/types";
import axios from "axios";

const DatatableProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IProductItem[]>([]);
  const [loading, setLoading] = useState(true);

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

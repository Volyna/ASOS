import axios, { Axios } from "axios";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IProductCreate } from "../types";
import { Field, Formik } from "formik";
import { CreateCategorySchema } from "../../../validation/CategoryCreateValidationSchema";
import { useActions } from "../../../../../hooks/useActions";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import { ICategoryItem } from "../../categories/types";
import http from "../../../../../services/http_common";
import { APP_ENV } from "../../../../../env";
import { showCategory } from "../../../../../store/actions/Categories/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers/rootReducer";

const ProductCreate = () => {
  const navigator = useNavigate();
  var [imagesToShow, setImagesToShow] = useState([]);
  var [filesToSend, setFilesToSend] = useState([]);

  const { message } = useTypedSelector((store) => store.CategoryReducer);

  const [model, setModel] = useState<IProductCreate>({
    name: "",
    price: 0,
    discount: 0,
    description: "",
    color: "",
    size: 0,
    brand: "",
    quantity: 0,
    isInTheStock: false,
  });

  const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    //console.log("input", e.target);
    //console.log("input", e.target.value);
    setModel({ ...model, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const disp = useDispatch();

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

  const categories = cat.map((category: any) => {
    const { id, name } = category;
    return (
      <option key={category.id} value={category.id}>
        {name}
      </option>
    );
  });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    // const newProduct: IProductCreate = {
    //   name: data.get("name")?.toString()!,
    //   price: data.get
    //   // imageBase64: model.imageBase64,
    // };
    // console.log("New category", newProduct);
    // CreateCategory(newProduct);
  };
  if (message == "Successful request") {
    navigator("/admin");
  }
  return (
    <>
      <ToastContainer draggable={false} autoClose={3000} />
      <Formik
        initialValues={model}
        validationSchema={CreateCategorySchema}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <div className="new">
            <Sidebar />
            <div className="newContainer">
              <Navbar />
              <div className="top">
                <h1>ADD PRODUCT</h1>
              </div>
              <div className="bottom">
                <form onSubmit={onSubmitHandler}>
                  <div className="container">
                    <div>
                      <h1 className="header">ADD PRODUCT</h1>
                      <div>
                        <div>
                          <label htmlFor="name" className="label">
                            Name
                          </label>

                          <Field
                            className="input"
                            type="text"
                            name="name"
                            required
                            id="name"
                            placeholder="Enter the product name"
                          />

                          {errors.name && touched.name ? (
                            <div style={{ color: "red" }}>{errors.name}</div>
                          ) : null}
                        </div>

                        <div>
                          <label htmlFor="name" className="label">
                            Price
                          </label>

                          <Field
                            as="input"
                            type="number"
                            name="price"
                            id="price"
                            className="input"
                            placeholder="Enter the product price"
                          />
                          {errors.price && touched.price ? (
                            <div style={{ color: "red" }}>{errors.price}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="name" className="label">
                            Discount
                          </label>

                          <Field
                            as="input"
                            type="number"
                            name="price"
                            id="price"
                            className="input"
                            placeholder="Enter the product discount"
                          />
                        </div>
                        <div>
                          <label htmlFor="description" className="label">
                            Description
                          </label>

                          <Field
                            htmlFor="description"
                            as="textarea"
                            id="description"
                            name="description"
                            rows={4}
                            cols={5}
                            className="input"
                            placeholder="Enter the product description"
                          ></Field>
                          {errors.description && touched.description ? (
                            <div style={{ color: "red" }}>
                              {errors.description}
                            </div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="name" className="label">
                            Color
                          </label>

                          <Field
                            className="input"
                            type="text"
                            name="name"
                            required
                            id="name"
                            placeholder="Enter the product color"
                          />

                          {errors.color && touched.color ? (
                            <div style={{ color: "red" }}>{errors.color}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="name" className="label">
                            Size
                          </label>

                          <Field
                            as="input"
                            type="number"
                            name="size"
                            id="size"
                            className="input"
                            placeholder="Enter the product size"
                          />
                          {errors.size && touched.size ? (
                            <div style={{ color: "red" }}>{errors.size}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="name" className="label">
                            Brand
                          </label>

                          <Field
                            className="input"
                            type="text"
                            name="brand"
                            required
                            id="brand"
                            placeholder="Enter the product brand"
                          />

                          {errors.brand && touched.brand ? (
                            <div style={{ color: "red" }}>{errors.brand}</div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="name" className="label">
                            Quantity
                          </label>

                          <Field
                            as="input"
                            type="number"
                            name="quantity"
                            id="quantity"
                            className="input"
                            placeholder="Enter the product quantity"
                          />
                          {errors.quantity && touched.quantity ? (
                            <div style={{ color: "red" }}>
                              {errors.quantity}
                            </div>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="countries" className="label">
                            Select category
                          </label>
                          <select
                            onChange={onChangeSelectHandler}
                            id="category_id"
                            name="category_id"
                            className="input"
                          >
                            <option selected>Select category</option>
                            {categories}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="name" className="label">
                            A product is in the stock
                          </label>

                          <Field
                            type="checkbox"
                            name="isInTheStock"
                            id="isInTheStock"
                            className="checkbox"
                          />
                          {errors.isInTheStock && touched.isInTheStock ? (
                            <div style={{ color: "red" }}>
                              {errors.isInTheStock}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="space-x-4 mt-8">
                        <button
                          type="submit"
                          className="womenbtn buttons"
                          disabled={!(isValid && dirty)}
                        >
                          Save
                        </button>
                        <button
                          className="buttons"
                          onClick={() => navigator("/admin/products")}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default ProductCreate;

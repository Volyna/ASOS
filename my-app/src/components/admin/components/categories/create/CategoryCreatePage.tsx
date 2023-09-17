import axios, { Axios } from "axios";
import { ChangeEvent, ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ICategoryCreate } from "../types";
import { Field, Formik } from "formik";
import { CreateCategorySchema } from "../../../validation/CategoryCreateValidationSchema";
import { useActions } from "../../../../../hooks/useActions";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

const CategoryCreate = () => {
  const navigator = useNavigate();
  const { CreateCategory } = useActions();

  const { message } = useTypedSelector((store) => store.CategoryReducer);

  const [model, setModel] = useState<ICategoryCreate>({
    name: "",
  });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const newCategory: ICategoryCreate = {
      name: data.get("name")?.toString()!,
    };
    console.log("New category", newCategory);
    CreateCategory(newCategory);
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
                <h1>ADD CATEGORY</h1>
              </div>
              <div className="bottom">
                <form onSubmit={onSubmitHandler}>
                  <div className="container">
                    <div>
                      <h1 className="header">ADD CATEGORY</h1>
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
                            placeholder="Enter the category name"
                          />

                          {errors.name && touched.name ? (
                            <div style={{ color: "red" }}>{errors.name}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="space-x-4 mt-8">
                        <button
                          type="submit"
                          className="womenbtn buttons"
                          disabled={!(isValid && dirty)}
                          onClick={() => navigator("/admin/categories")}
                        >
                          Save
                        </button>
                        <button
                          className="buttons"
                          onClick={() => navigator("/admin/categories")}
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

export default CategoryCreate;

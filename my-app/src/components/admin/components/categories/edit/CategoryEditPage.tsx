import axios, { Axios } from "axios";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ICategoryUpdate } from "../types";
import { Field, Formik } from "formik";
import {
  CreateCategorySchema,
  UpdateCategorySchema,
} from "../../../validation/CategoryCreateValidationSchema";
import { useActions } from "../../../../../hooks/useActions";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import { GetCategoriesById } from "../../../../../store/actions/categoryActions";
import Loader from "../../../../loader";

const CategoryEdit = () => {
  const navigator = useNavigate();
  const { GetCategoriesById, UpdateCategory } = useActions();
  const { loading, categoryForUpdate, message } = useTypedSelector(
    (store) => store.CategoryReducer
  );

  const { id } = useParams();

  // useEffect(() => {
  //   GetCategoriesById(parseInt(id!));
  //   console.log("ID", id);
  // }, []);

  useEffect(() => {
    console.log("Received id:", id); // Добавьте эту строку для отладки
    const numericId = parseInt(id!);
    if (!isNaN(numericId)) {
      GetCategoriesById(numericId);
      console.log("ID", numericId);
    } else {
      console.error("ID is not a valid number:", id);
    }
  }, []);
  if (loading) {
    return <Loader />;
  }
  if (message == "Category successfully updated !") {
    return <Navigate to="/" />;
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const newCategory: ICategoryUpdate = {
      name: data.get("name")?.toString()!,
      id: categoryForUpdate.id,
    };
    console.log("Update", newCategory);

    UpdateCategory(newCategory);
  };

  console.log("ID", id);

  return (
    <>
      <ToastContainer draggable={false} autoClose={3000} />
      <Formik
        initialValues={{
          name: categoryForUpdate.name,
        }}
        validationSchema={UpdateCategorySchema}
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
                <h1>EDIT CATEGORY</h1>
              </div>
              <div className="bottom">
                <form onSubmit={onSubmitHandler}>
                  <div className="container">
                    <div>
                      <h1 className="header">EDIT CATEGORY</h1>
                      <div>
                        <div>
                          <label htmlFor="name" className="label">
                            New name
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
                          // onClick={() => navigator("/admin/categories")}
                        >
                          Edit
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

export default CategoryEdit;

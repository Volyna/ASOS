import axios, { Axios } from "axios";
import { ChangeEvent, ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ICategoryCreate } from "../types";
import { Field, Formik } from "formik";
import { CreateCategorySchema } from "../../../validation/CategoryCreateValidationSchema";
import { useActions } from "../../../../../hooks/useActions";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { ToastContainer } from "react-toastify";

const CategoryCreate = () => {
  const navigator = useNavigate();
  const { GetCategories, SetCategoriForUpdate, CreateCategory } = useActions();

  const { message } = useTypedSelector((store) => store.CategoryReducer);

  const [model, setModel] = useState<ICategoryCreate>({
    name: "",
    imageBase64: "",
  });

  const onFileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { files } = target;
    if (files) {
      const file = files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        const imageBase64 = e.target?.result as string;
        setModel({ ...model, imageBase64 });
      };
    }
    target.value = "";
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const newCategory: ICategoryCreate = {
      name: data.get("name")?.toString()!,
      imageBase64: model.imageBase64,
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

                  <div>
                    <label className="label">Image</label>

                    <div className="mt-1 flex items-center">
                      <label htmlFor="selectImage" className="">
                        {model.imageBase64 === null ? (
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        ) : (
                          // <img src={URL.createObjectURL(model.imageBase64)} />
                          <img src={model.imageBase64.toString()} alt="" />
                        )}
                      </label>
                      <label
                        htmlFor="selectImage"
                        className="ml-5 rounded-md border border-gray-300 bg-white 
                        py-2 px-3 text-sm font-medium leading-4 text-gray-700 
                        shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 
                        focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Change
                      </label>
                    </div>

                    <input
                      type="file"
                      onChange={onFileChangeHandler}
                      id="selectImage"
                      className="hidden"
                    />
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
                  <button className="buttons">Back</button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CategoryCreate;

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";

const ContactForm = () => {
  const username = Cookies.get("username");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <div className=" bg-center bg-cover relative   bg-fixed bg-[url('/imgs/3.jpg')]">
        <div className="bg-gray-500 bg-opacity-50   flex items-center justify-center ">
          <div className="    md:p-10  min-h-screen">
            <div className="mt-5  flex  w-full max-w-screen-lg p-10 gap-10 bg-white rounded shadow-md h-full">
              <div className=" mt-10 ">
                <img
                  src="/icons/icon.png"
                  alt="icon"
                  className="w-20 drop-shadow-2xl  py-10 mx-auto"
                />{" "}
                <h1 className=" font-semibold p-5 text-4xl text-center">
                  Contact us
                </h1>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {(formik) => (
                    <Form className="font-semibold flex flex-col  gap-5 justify-center p-7 ">
                      {!username && <label htmlFor="name">Name</label>}
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        value={username}
                        className="rounded  text-center text-xs border-black border-2 p-1"
                      />
                      <ErrorMessage name="name" />

                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="rounded border-black border-2 p-1"
                      />
                      <ErrorMessage name="email" />

                      <label htmlFor="message">Message</label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Write something..."
                        className=" placeholder:text-center rounded border-black border-2 p-1"
                      />
                      <ErrorMessage name="message" />

                      <button
                        className="rounded border-black border-2 py-1 px-1 bg-zinc-100 hover:bg-transparent"
                        type="submit"
                        disabled={formik.isSubmitting}
                      >
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>

              <div className="hidden w-96 md:block">
                <img src="/imgs/4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import css from "./ReservationForm.module.css";

const ReservationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };
  const Schema = Yup.object().shape({
    name: Yup.string().required("required"),
    email: Yup.string().email("must be valid email!").required("required"),
    bookingDate: Yup.date()
      .typeError("must be a valid date")
      .min(new Date(), "date cannot be in the past")
      .required("required"),
    comment: Yup.string(),
  });

  const handleSubmit = () => {};

  return (
    <div>
      <div>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema}
      >
        <Form>
          <div>
            <Field type="name" name="name" placeholder="Name*" />
            <ErrorMessage name="name" component="p" />
          </div>
          <div>
            <Field type="email" name="email" placeholder="Email*" />
            <ErrorMessage name="email" component="p" />
          </div>
          <div>
            <Field type="date" name="bookingDate" placeholder="Booking date*" />
            <ErrorMessage name="bookingDate" component="p" />
          </div>
          <div>
            <Field as="textarea" name="comment" placeholder="Comment" />
            <ErrorMessage name="comment" component="p" />
          </div>
        </Form>
      </Formik>
      <button onClick={() => console.log("send")}>Send</button>
    </div>
  );
};

export default ReservationForm;

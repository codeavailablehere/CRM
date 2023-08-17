import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const initialValues = {
  brand_name: '',
  user_count: '',
  user_name: '',
  email: '',
  password: '',
  company_name: '',
  gst_no: '',
  apartment: '',
  address: '',
  city: '',
  state: '',
  country: '',
  zip: '',
};

const AddClientSchema = Yup.object({
  brand_name: Yup.string().min(2).max(25).required('Please enter brand name'),
  industry: Yup.string().required('PLease select Industry'),
  user_count: Yup.string().required('Please enter user count'),
  user_name: Yup.string().required('Please enter user name'),
  email: Yup.string().email().required('Please enter your email'),
  company_name: Yup.string().required('Please enter compamy name'),
  password: Yup.string().required('Please enter Password'),
  gst_no: Yup.string().required('Please entergst_no'),
  confirmGst: Yup.string()
    .required()
    .oneOf([Yup.ref('gst'), null], 'GST must match'),
  apartment: Yup.string().required('Please enter Apartment Name'),
  address: Yup.string().required('Please enter address'),
  city: Yup.string().required('Please enter city'),
  country: Yup.string().required('Please enter Country'),
  zip: Yup.string().required('Please enter zip code'),
});
const postData = async (data) => {
  try {
    const url = 'http://localhost:5000/add-company';
    // Specifying headers in the config object
    const config = { 'content-type': 'application/json' };
    const response = await axios.post(url, data, config);
    console.log('response', response.data);
  } catch (error) {
    console.error(error);
  }
};
const AddClient = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      // validationSchema: AddClientSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        postData(values);
      },
    });
  console.log('initialValues', initialValues);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Company Details</h4>
        <small>Create your client by adding all informations</small>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>Brand Name</label>
              <input
                type="text"
                className="form-control"
                name="brand_name"
                placeholder="Brand Name"
                value={values.brand_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.brand_name && touched.brand_name ? (
                <p className="form-error">{errors.brand_name}</p>
              ) : null}
            </div>
          </div>
          <div className="col-12 col-md-4">
            {/* <div className="form-group">
              <label>Industry</label>
              <select
                className="form-control"
                name="industry"
                value={values.industry}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option></option>
                <option>Select</option>
              </select>
              {errors.industry && touched.industry ? (
                <p className="form-error">{errors.industry}</p>
              ) : null}
            </div> */}
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>User Count</label>
              <input
                type="text"
                className="form-control"
                name="user_count"
                placeholder="User Count"
                value={values.user_count}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.user_count && touched.user_count ? (
                <p className="form-error">{errors.user_count}</p>
              ) : null}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                name="user_name"
                placeholder="Enter User Name"
                value={values.user_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.user_name && touched.user_name ? (
                <p className="form-error">{errors.user_name}</p>
              ) : null}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
          </div>
        </div>
        <h4>Company Address</h4>
        <small>This address will appear on your invoice</small>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="form-group">
              <label>Legal name of company</label>
              <input
                type="text"
                className="form-control"
                name="company_name"
                placeholder="Legal name of company"
                value={values.company_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.company_name && touched.company_name ? (
                <p className="form-error">{errors.company_name}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>GST No.</label>
              <input
                type="text"
                name="gst_no"
                className="form-control"
                placeholder="Entergst_no No."
                value={values.gst_no}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.gst_no && touched.gst_no ? (
                <p className="form-error">{errors.gst_no}</p>
              ) : null}
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* <div className="form-group">
              <label>GST No.</label>
              <input
                type="text"
                name="confirmGst"
                className="form-control"
                placeholder="Entergst_no No."
                value={values.confirmGst}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.confirmGst && touched?.confirmGst ? (
                <p className="form-error">{errors?.confirmGst}</p>
              ) : null}
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Apartment</label>
              <input
                type="text"
                name="apartment"
                className="form-control"
                placeholder="Enter Apartment Name"
                value={values.apartment}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.apartment && touched.apartment ? (
                <p className="form-error">{errors.apartment}</p>
              ) : null}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Enter Address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address && touched.address ? (
                <p className="form-error">{errors.address}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="Enter City Name"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.city && touched.city ? (
                <p className="form-error">{errors.city}</p>
              ) : null}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                className="form-control"
                placeholder="Enter Country Name"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.country && touched.country ? (
                <p className="form-error">{errors.country}</p>
              ) : null}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="text"
                name="zip"
                className="form-control"
                placeholder="Enter Zip Code"
                value={values.zip}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.zip && touched.zip ? (
                <p className="form-error">{errors.zip}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 mt-4 text-right">
            <button className="btn btn-primary" type="submit">
              Create Client
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddClient;

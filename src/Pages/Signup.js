import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './CSS/LoginSignup.css';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      mobile: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      name: Yup.string().required('Required'),
      mobile: Yup.string().required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Form data:', values); // Handle signup logic here
    },
  });

  return (
    <div className='signup-container'>
      <h2>Join with Email</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Mobile Number' 
            {...formik.getFieldProps('mobile')}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className='error'>{formik.errors.mobile}</div> /* Display error if there's one */
          ) : null}
        </div>

        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='error'>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type='submit' className='btn-signup'>
          JOIN STEPNSHINE
        </button>
      </form>
    </div>
  );
};

export default Signup;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './CSS/LoginSignup.css'; // Ensure the CSS aligns with the expected layout

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Form data:', values); // Handle login logic here
    },
  });

  return (
    <div className='login-container'>
      <h2>Sign In with Email</h2>
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
            type='password'
            placeholder='Password'
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='error'>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type='submit' className='btn-signin'>
          SIGN IN
        </button>
      </form>
      <a href='/forgot-password' className='forgot-password-link'>
        Forgot your password?
      </a>

      <div className='sign-in-alternative'>
        <h3>Or sign in with</h3>
        <button className='btn-facebook'>Facebook</button>
        <button className='btn-google'>Google</button>
      </div>
    </div>
  );
};

export default Login;

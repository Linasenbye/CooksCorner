import styles from "./LoginForm.module.css";
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { loginValidationSchema } from "../../schemas/index";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { login } from "../../store/reducers/auth";
import { useState } from "react";
import show from "../../assets/show.svg";
import hide from "../../assets/hide.svg";
import email from "../../assets/email.svg";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () =>{
    setShowPassword(!showPassword)
  }
  const handleFormSubmit = async (values) => {
    const { username, password } = values;
  
    try {
      const response = await dispatch(login({ username, password }));
      console.log(response);
      
      if (response.payload) {
        navigate('home');
        toast.success('Successfully logged in');
      } else {
        toast.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      
      if (error.response && error.response.status === 401) {
        toast.error('Unauthorized: Invalid username or password');
      } else {
        toast.error('Login failed');
      }
    }
  };
  

  const { values, errors, touched, handleBlur, handleChange, isValid, handleSubmit} = useFormik({
    initialValues:{
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: handleFormSubmit,
  });

  return ( 
  <>
    <header className={styles.header_login}>
        <div className={styles.header_name}>
            <h1 className={styles.header_title}>Welcome Back To <span className={styles.title_span}>CooksCorner</span></h1>
        </div>
    </header>
    <form className={styles.form_wrapper} onSubmit={handleSubmit}>
      <div className={styles.input_wrapper}>
        <div className={styles.input_input}>
            <p>Gmail</p>
            <label htmlFor="username" className={styles.password_input}>
                <input 
                type="text"
                id="username"
                name="username"
                placeholder="Enter your email"
                className={styles.input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                />
                <button className={styles.email_btn} type="button"><img src={email} alt="email" /></button>
            </label>
        </div>
        {touched.username && errors.username ? (
              <div className={styles.error}>{errors.username}</div>
            ) : null}
        <div className={styles.input_input}>
        <p>Password</p>
        <label htmlFor="password" className={styles.password_input}>
            <input 
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              className={styles.input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <button className={styles.showHide_btn} onClick={toggleShowPassword} type="button"><img src={showPassword ? hide : show} alt="show or hide password" /></button>
        </label>
        </div>
        {touched.password && errors.password ? (
              <div className={styles.error}>{errors.password}</div>
            ) : null}
      </div>
      <button type="submit" className={styles.login_button} disabled={!isValid ? true : false}>Sign In</button>
      <Link to="registration" className={styles.registration_link}><p className={styles.reg_link}>I don’t have an account? <span className={styles.reg_span}>Sign Up Now</span></p></Link>
    </form>
    </>
  );
};

export default LoginForm;
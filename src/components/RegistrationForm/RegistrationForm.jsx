import { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../store/reducers/auth';
import show from '../../assets/show.svg';
import hide from '../../assets/hide.svg';
import email from '../../assets/email.svg';
import person from '../../assets/person.svg';
import { signupValidationSchema } from '../../schemas/index';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onFormSubmit = ({ email, username, password, password_confirm }) => {
    dispatch(register({ email, username, password, password_confirm })).then(() => {
      toast.success('Вы успешно зарегистрированы');
      navigate('/confirmation');
    });
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      password_confirm: '',
    },
    validationSchema: signupValidationSchema,
    onSubmit: onFormSubmit,
  });

  const passwordValidationMessage = (condition, message) => {
    return (
      <li className={`${touched.password ? (condition ? styles.success : styles.error) : ''}`}>
        {message} {`${touched.password ? (condition ? '✅' : '❌') : ''}`} 
      </li>
    );
  };

  return (
    <div className={styles.container}>
     <header className={styles.header_login}>
        <div className={styles.header_name}>
            <h1 className={styles.header_title}>Sign up for delicious <span className={styles.title_span}>Discoveries!</span></h1>
        </div>
    </header>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form_wrapper}>
        <div className={styles.input_wrapper}>
        <div className={styles.input_input}>
            <p>Name</p>
          <label htmlFor="username" className={styles.input_part}>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              placeholder="Enter your name"
              className={`${styles.input} ${errors.username && touched.username ? styles.input_error : ''}`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
             <button className={styles.person_btn} type="button"><img src={person} alt="email" /></button>
          </label>
          {errors.username && touched.username && <p className={styles.error}>{errors.username}</p>}
          </div>
          <div className={styles.input_input}>
            <p>Gmail</p>
          <label htmlFor="email" className={styles.input_part}>
            <input
              value={values.email}
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Gmail"
              className={`${styles.input} ${errors.email && touched.email ? styles.input_error : ''}`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button className={styles.email_btn} type="button">
                <img src={email} alt="email" />
                </button>
          </label>
          {errors.email && touched.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles.input_input}>
            <p>Password</p>
          <label htmlFor="password" className={styles.password_input}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your Password"
              onChange={handleChange}
              value={values.password}
              className={`${styles.input} ${
                errors.password && touched.password ? styles.input_error : ''
              }`}
              onBlur={handleBlur}
            />
            <button className={styles.showHide_btn} onClick={toggleShowPassword} type="button">
              <img src={showPassword ? hide : show} alt="show or hide password" />
            </button>
          </label>
          {errors.password && touched.password && (
            <p className={styles.error}>{errors.password}</p>
          )}
        </div>

        <div className={styles.input_input}>
            <p>Re-Password</p>
          <label htmlFor="password_confirm" className={styles.password_input}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="password_confirm"
              name="password_confirm"
              value={values.password_confirm}
              placeholder="Re-Enter your Password"
              className={`${styles.input} ${
                errors.password_confirm && touched.password_confirm ? styles.input_error : ''
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button className={styles.showHide_btn} onClick={toggleShowConfirmPassword} type="button">
              <img src={showConfirmPassword ? hide : show} alt="show or hide password" />
            </button>
          </label>
          {errors.password_confirm && touched.password_confirm && (
            <p className={styles.error}>{errors.password_confirm}</p>
          )}
        </div>
        <button type="submit" className={styles.login_button} disabled={isSubmitting}>Sign In</button>
        <Link to="/" className={styles.registration_link}><p className={styles.reg_link}>Already have an account? <span className={styles.reg_span}>Sign In Now</span></p></Link>

        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
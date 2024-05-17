import * as yup from 'yup';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/; 
// const PWR_REGEX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/


export const signupValidationSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Please fill in the field!"),
    username: yup
        .string()
        .matches(USER_REGEX, {message: "This login exist"})
        .required("Please fill in the field!"),
    password: yup
        .string()
        .required("Please fill in the field!")
        .min(8, 'From 8 to 15 symbols')
        .max(15, 'From 8 to 15 symbols')
        .matches(/[a-z]+/, 'Include Capital and Small letter')
        .matches(/[A-Z]+/, 'Include Capital and Small letter')
        .matches(/\d+/, 'Minimum 1 letter')
        .matches(/[@$!%*#?&]+/, 'Minimum 1 special symbol (!, ", #, $...)'),
    
    password_confirm: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Please fill in the field!"),
})

export const loginValidationSchema = yup.object().shape({
    username: yup.string().required('Enter your email'),
    password: yup.string().required('Enter your password'),
    
})
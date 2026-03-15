import * as yup from "yup";

export const registerSchema = yup.object({
    fullName: yup.string().required("Full name is required"),

    email: yup
        .string ()
        .required("Email is required")
        .email ("Please enter a valid email address"),

    password: yup
        .string ()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),

    confirmPassword: yup
        .string ()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password"), null], "Passwords must match")
});
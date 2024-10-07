import * as Yup from "yup"; 

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  address: Yup.string()
    .required("Address is required")
    .max(30, "Address must be at most 30 characters"),
  message: Yup.string()
    .required("Message is required")
    .max(50, "Message must be at most 50 characters"),
});

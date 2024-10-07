// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarComponent from "./components/Navbar";
// import { Container } from "react-bootstrap";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Store from "./pages/Store";
// import Success from "./pages/Success";
// import Cancel from "./pages/Cancel";

// function App() {
//   return (
//     <>
//       <Container>
//         <NavbarComponent />
//         <BrowserRouter>
//           <Routes>
//             <Route index element={<Store />} />
//             <Route path="/success" element={<Success />} />
//             <Route path="/cancel" element={<Cancel />} />
//           </Routes>
//         </BrowserRouter>
//       </Container>
//     </>
//   );
// }

// export default App;

// *****************************************************

// import React, { useEffect, useState } from "react";
// import StudentCard from "./components/StudentCard";
// import "./App.css";

// function App() {
//   const [students, setStudents] = useState([]);

//   async function getData() {
//     const response = await fetch("/data.json");
//     const data = await response.json();
//     setStudents(data);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="App">
//       <h1 style={{ padding: "10px 0", textAlign: "center" }}>
//         Student Information
//       </h1>
//       {students.map((student, index) => (
//         <StudentCard key={index} student={student} />
//       ))}
//     </div>
//   );
// }

// export default App;

// *****************************************************

// import React, { useState } from "react";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const appStyles = {
//     width: "100%",
//     backgroundColor: darkMode ? "#333" : "#FFF",
//     color: darkMode ? "#FFF" : "#000",
//     minHeight: "100vh",
//     display: "flex",
//     fontFamily: "Arial, sans-serif",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     transition: "all 0.5s ease",
//   };

//   const buttonStyles = {
//     padding: "10px 20px",
//     fontSize: "20px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     backgroundColor: darkMode ? "#FFF" : "#333",
//     color: darkMode ? "#333" : "#FFF",
//   };

//   return (
//     <div style={appStyles}>
//       <button style={buttonStyles} onClick={toggleMode}>
//         Toggle to {darkMode ? "Light" : "Dark"} Mode
//       </button>

//       <h1>Dark Mode is {darkMode ? "Enabled" : "Disabled"}</h1>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Input } from "./components/Input";
import { TextArea } from "./components/TextArea";
import { Container, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { validationSchema } from "./schemas/validationSchema";
import { postFormData } from "./utils/helper";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "./redux/userSlice";

export default function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
  });

  const handleSubmitForm = async (values) => {
    setLoading(true);
    const response = await postFormData("/posts", values);
    setLoading(false);
    if (response) {
      Cookies.set("userInfo", JSON.stringify(values), { expires: 90 });
      dispatch(saveUserInfo(values));
      alert("Form submitted successfully!");
      formik.resetForm();
    }
  };

  return (
    <Container className="mt-5">
      <form onSubmit={formik.handleSubmit}>
        <Input
          name="name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
        />
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <Input
          name="address"
          placeholder="Enter your address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && formik.errors.address}
        />
        <TextArea
          name="message"
          placeholder="Enter your message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && formik.errors.message}
        />
        <Button type="submit">{loading ? "Please Wait..." : "Submit"}</Button>
      </form>
    </Container>
  );
}

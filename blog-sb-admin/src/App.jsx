import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogRoutes from "./routes/BlogRoutes";
// import AdminRoutes from "./routes/AdminRoutes";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <h1>Blog App..</h1>
    {/* <Router> */}
      {/* <Routes> */}
        {/* Blog Routes */}
        {/* <Route path="/*" element={<BlogRoutes />} /> */}

        {/* Admin Panel Routes */}
        {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}

        {/* 404 Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
    {/* </Router> */}
    </>
  );  
}

export default App;

import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManagePosts from "../pages/admin/ManagePosts";
import SiteSettings from "../pages/admin/SiteSettings";

function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/posts" element={<ManagePosts />} />
        <Route path="/settings" element={<SiteSettings />} />
      </Routes>
    </AdminLayout>
  );
}

export default AdminRoutes;

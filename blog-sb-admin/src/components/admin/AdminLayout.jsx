import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
function AdminLayout({ children }) {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;

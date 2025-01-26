import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaNewspaper, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-800"
                }`
              }
            >
              <FaHome className="mr-2" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-800"
                }`
              }
            >
              <FaUsers className="mr-2" /> Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/posts"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-800"
                }`
              }
            >
              <FaNewspaper className="mr-2" /> Manage Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-800"
                }`
              }
            >
              <FaCog className="mr-2" /> Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

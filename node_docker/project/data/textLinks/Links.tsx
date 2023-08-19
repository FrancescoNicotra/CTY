import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";

const Links = [
  { name: "/home", text: "Home", icons: <AiOutlineHome /> },
  { name: "/profilo", text: "Profile", icons: <AiOutlineUser /> },
  { name: "/dashboard", text: "Dashboard", icons: <LuLayoutDashboard /> },
  { name: "/impostazioni", text: "impostazioni", icons: <FiSettings /> },
];

export default Links;

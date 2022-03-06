import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { MdOutlineGroups } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import "./style.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-items">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <AiOutlineHome />
                    </li>
                    <li className="sidebar-list-item">
                        <MdOutlineMessage />
                    </li>
                    <li className="sidebar-list-item">
                        <FiClock />
                    </li>
                    <li className="sidebar-list-item">
                        <MdOutlineGroups />
                    </li>
                    <li className="sidebar-list-item">
                        <CgNotes />
                    </li>
                    <li className="sidebar-list-item">
                        <CgNotes />
                    </li>
                    <li className="sidebar-list-item">
                        <FiSettings />
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Sidebar;
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { Link, useNavigate } from "react-router-dom";

function TopBar() {
  return (
    <div className="h-16 w-screen bg-white  dark:bg-[#1F1F1F] fixed px-14 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
      <div className="font-medium text-xl">Onebox</div>

      <div className="pr-10 flex items-center ">
        <ThemeToggle />
        <div className="flex justify-center items-center mr-2 ">
        <p>PC's Workspace </p>
        <MdOutlineKeyboardArrowDown className="text-3xl " />
        </div>
       
        <Link to="/login">
        <button className="p-2 rounded-md bg-red-400 text-white">
          Logout
        </button>
        </Link>
    
      </div>
    </div>
  );
}

export default TopBar;

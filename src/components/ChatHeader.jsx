import { HiOutlineLogout } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";

function ChatHeader({ id, name }) {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-b-gray-200">
      <div className="flex justify-center items-center space-x-5">
        {/* <button className="text-teal-400 bg-gray-100 rounded-full text-xl p-1">
          <BiArrowBack />
        </button> */}

        <div>
          <p className="text-gray-600 font-bold text-xl">{name}</p>{" "}
          <p className="text-gray-400 font-medium text-sm">#{id}</p>
        </div>
      </div>
      <div>
        {/* <button className="text-red-500 border-red-500 hover:text-gray-200 hover:bg-red-500 transition-all duration-200 flex justify-center items-center space-x-3 border-2 rounded-md px-2 py-1">
          <HiOutlineLogout className="text-lg" />
          <span>Logout</span>
        </button> */}
      </div>
    </div>
  );
}

export default ChatHeader;

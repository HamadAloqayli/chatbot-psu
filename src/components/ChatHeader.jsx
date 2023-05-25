import { HiOutlineLogout } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

function ChatHeader({ id, name }) {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-b-gray-200">
      <div className="flex justify-center items-center space-x-5">
        <div>
          <p className="text-gray-600 font-bold text-xl">{name}</p>{" "}
          <p className="text-gray-400 font-medium text-sm">#{id}</p>
        </div>
      </div>
      <div>
        <button className="text-red-500 font-medium border-red-500 hover:text-gray-200 hover:bg-red-500 transition-all duration-200 border-2 rounded-md px-3 py-1">
          <span className="text-sm">Clear Conversation</span>
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;

import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiOutlineEnter } from "react-icons/ai";

function ChatRooms({
  chats,
  createChat,
  deleteChat,
  updateChat,
  selectedChat,
  setSelectedChat,
}) {
  const [showAddInput, setShowAddInput] = useState(false);
  const [showEditInput, setShowEditInput] = useState(null);

  const resetInput = (key) => {
    if (key === "Enter") {
      setShowAddInput(false);
      setShowEditInput(null);
    }
  };

  const handleUpdate = (id) => {
    if (showEditInput === id) {
      setShowEditInput(null);
      return;
    }
    setShowEditInput(id);
  };

  return (
    <div className="customScroll bg-white shadow-lg rounded-lg lg:rounded-r-lg h-[80px] lg:h-[600px] p-4 w-full max-w-2xl lg:max-w-[300px] overflow-x-auto lg:overflow-y-auto mt-24 mb-6 lg:my-0">
      <div className="flex flex-row justify-start items-center space-x-5 lg:space-x-0 h-full w-full lg:flex-col lg:justify-start lg:items-stretch lg:space-y-5">
        <button
          onClick={() => setShowAddInput(!showAddInput)}
          className="bg-teal-400 text-gray-100 font-medium rounded-md p-2 whitespace-nowrap"
        >
          + New Chat
        </button>

        {showAddInput && (
          <div className="flex justify-between items-center bg-gray-100 text-gray-700 my-2 rounded-md">
            <input
              type="text"
              placeholder="Chat name"
              className="bg-gray-100 text-gray-700 rounded-md w-28 text-left p-2 outline-gray-300"
              onKeyDown={(e) => {
                createChat(e.key, e.target.value);
                resetInput(e.key);
              }}
            />
            <AiOutlineEnter className="mx-2 text-lg" />
          </div>
        )}

        {chats.map((chat, index) => (
          <div key={index}>
            <div
              className={`flex justify-between items-center ${
                selectedChat.id === chat.id ? "bg-gray-100" : "bg-white"
              }  text-gray-700 rounded-md w-full text-left p-2 space-x-6 whitespace-nowrap`}
            >
              {showEditInput === chat.id ? (
                <input
                  className="p-1 rounded-md outline-gray-300"
                  defaultValue={chat.name}
                  onKeyDown={(e) => {
                    updateChat(e.key, e.target.value, chat.id);
                    resetInput(e.key);
                  }}
                />
              ) : (
                <button
                  onClick={() => setSelectedChat(chat)}
                  className="w-full text-left"
                >
                  {chat.name}
                </button>
              )}
              <div className="flex justify-center items-center space-x-1">
                <button>
                  <MdEdit
                    onClick={() => handleUpdate(chat.id)}
                    className={`text-gray-400 hover:text-yellow-500 ${
                      showEditInput === chat.id ? "text-yellow-400" : ""
                    } transition-all duration-200`}
                  />
                </button>
                <button>
                  <MdDelete
                    onClick={() => deleteChat(chat.id)}
                    className="text-gray-400 hover:text-red-500 transition-all duration-200"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatRooms;

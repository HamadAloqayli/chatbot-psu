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
    <div className="customScroll bg-white shadow-lg rounded-r-lg h-[600px] py-4 px-4 w-full max-w-[300px] overflow-y-auto">
      <button
        onClick={() => setShowAddInput(!showAddInput)}
        className="bg-teal-400 text-gray-100 font-medium rounded-md px-2 py-1 mb-4 w-full"
      >
        + New Chat
      </button>

      {showAddInput && (
        <div className="flex justify-between items-center bg-gray-100 text-gray-700 my-2 rounded-md">
          <input
            type="text"
            placeholder="Chat name"
            className="bg-gray-100 text-gray-700 rounded-md w-full text-left p-2 outline-gray-300"
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
            }  text-gray-700 my-4 rounded-md w-full text-left p-2`}
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
            <div className="flex justify-center items-center space-x-2">
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
  );
}

export default ChatRooms;

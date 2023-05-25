import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatArea, ChatRooms, ChatHistory } from "../components";
import { rooms } from "../data/rooms";

function Home() {
  const [chats, setChats] = useState(rooms);
  const [selectedChat, setSelectedChat] = useState(chats[0]);

  const createChat = (key, value) => {
    if (key === "Enter") {
      let chatsClone = [...chats];
      chatsClone.push({ id: uuidv4(), name: value, messages: [] });
      setSelectedChat(chatsClone[0]);
      setChats(chatsClone);
    }
  };

  const deleteChat = (id) => {
    let chatsClone = [...chats];
    let filteredChats = chatsClone.filter((chat) => chat.id !== id);
    setSelectedChat(filteredChats[0]);
    setChats(filteredChats);
  };

  const updateChat = (key, value, id) => {
    if (key === "Enter") {
      let chatsClone = [...chats];
      let filteredChats = chatsClone.map((chat) => {
        if (chat.id === id) {
          return { ...chat, name: value };
        }
        return { ...chat };
      });
      setChats(filteredChats);
    }
  };

  const createMessage = (value, id) => {
    let chatsClone = [...chats];
    let filteredChats = chatsClone.map((chat) => {
      if (chat.id === id) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            value,
            { from: "bot", text: "message from bot" },
          ],
        };
      }
      return { ...chat };
    });
    let findSelectedChat = filteredChats.filter((chat) => chat.id === id);
    setSelectedChat(findSelectedChat[0]);
    setChats(filteredChats);
  };

  return (
    <div className="homeBackground bg-gray-50 min-h-screen flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0">
      <ChatRooms
        chats={chats}
        createChat={createChat}
        deleteChat={deleteChat}
        updateChat={updateChat}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />
      <ChatArea selectedChat={selectedChat} createMessage={createMessage} />
      <ChatHistory />
    </div>
  );
}

export default Home;

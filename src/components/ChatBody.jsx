function ChatBody({ messages }) {
  return (
    <div className="customScroll bg-gray-50 flex-1 p-4 h-80 overflow-y-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`my-2 ${
            message.from === "me" ? "text-left" : "text-right"
          }`}
        >
          <p
            className={`${
              message.from === "me"
                ? "bg-white text-gray-800"
                : "bg-teal-400 text-gray-100"
            } inline-block   w-auto p-2 rounded-md`}
          >
            {message.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ChatBody;

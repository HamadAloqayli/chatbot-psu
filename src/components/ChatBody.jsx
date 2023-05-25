function ChatBody() {
  return (
    <div className="customScroll bg-gray-50 flex-1 p-4 h-80 overflow-y-auto">
      <div className={`my-2 ${true ? "text-left" : "text-right"}`}>
        {/* <p
          className={`${
            true ? "bg-white text-gray-800" : "bg-teal-400 text-gray-100"
          } inline-block   w-auto p-2 rounded-md`}
        >
          Hello
        </p> */}
      </div>
    </div>
  );
}

export default ChatBody;

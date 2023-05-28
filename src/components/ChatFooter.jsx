import { IoSend } from "react-icons/io5";
import { BsFillMicFill, BsFillSendFill } from "react-icons/bs";
import { RiVoiceprintFill } from "react-icons/ri";
import CustomInput from "./CustomInput";

function ChatFooter({
  userInput,
  handleInputChange,
  handleInputSubmit,
  handleVoiceSubmit,
  listening,
  children,
}) {
  return (
    <div className="flex justify-between items-center space-x-5 p-4 border-t-2 border-t-gray-200">
      <div className="flex-1">{children}</div>

      <div className="flex justify-center items-center space-x-5">
        <button
          onClick={handleVoiceSubmit}
          className="grid place-items-center bg-teal-400 rounded-full h-8 w-8 p-1 text-lg text-gray-100"
        >
          {listening ? <RiVoiceprintFill /> : <BsFillMicFill />}
        </button>
        <button
          onClick={handleInputSubmit}
          className=" grid place-items-center bg-gray-100 rounded-full h-8 w-8 p-1 text-xl text-teal-400"
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default ChatFooter;

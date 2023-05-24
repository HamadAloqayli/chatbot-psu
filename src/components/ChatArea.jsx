import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect, useState } from "react";
import { ChatFooter, ChatHeader, ChatBody } from ".";

function ChatArea({ selectedChat, createMessage }) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setUserInput(transcript);
  }, [transcript]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleVoiceSubmit = () => {
    listening
      ? SpeechRecognition.stopListening()
      : SpeechRecognition.startListening({ language: "en-US" });
  };

  const handleInputSubmit = () => {
    createMessage({ from: "me", text: userInput }, selectedChat.id);
    setUserInput("");
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="bg-white shadow-lg w-full max-w-2xl h-[600px] rounded-lg flex flex-col justify-between mx-4">
      <ChatHeader id={selectedChat.id} name={selectedChat.name} />
      <ChatBody messages={selectedChat.messages} />
      <ChatFooter
        userInput={userInput}
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        handleVoiceSubmit={handleVoiceSubmit}
        listening={listening}
      />
    </div>
  );
}

export default ChatArea;

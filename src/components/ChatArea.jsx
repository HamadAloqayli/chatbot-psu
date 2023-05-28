import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect, useState } from "react";
import { ChatFooter, ChatHeader, ChatBody } from ".";
import CustomInput from "./CustomInput";

function ChatArea({
  selectedUseCase,
  case1Values,
  handleCase1Values,
  case2Values,
  handleCase2Values,
}) {
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
    setUserInput("");
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="bg-white shadow-lg w-full max-w-2xl h-[600px] rounded-lg flex flex-col justify-between mx-4">
      <ChatHeader selectedUseCase={selectedUseCase} />
      <ChatBody />
      <ChatFooter
        userInput={userInput}
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        handleVoiceSubmit={handleVoiceSubmit}
        listening={listening}
      >
        {selectedUseCase.case === 1 && selectedUseCase.input === 1 && (
          <CustomInput
            value={case1Values.email}
            onChange={(e) => handleCase1Values("email", e.target.value)}
            placeholder="Enter your email"
          />
        )}
        {selectedUseCase.case === 1 && selectedUseCase.input === 2 && (
          <CustomInput
            value={case1Values.feedBack}
            onChange={(e) => handleCase1Values("feedBack", e.target.value)}
            placeholder="Enter your feedback"
          />
        )}

        {selectedUseCase.case === 2 && selectedUseCase.input === 1 && (
          <CustomInput
            value={case2Values.managerEmail}
            onChange={(e) => handleCase2Values("managerEmail", e.target.value)}
            placeholder="Enter manager email"
          />
        )}
        {selectedUseCase.case === 2 && selectedUseCase.input === 2 && (
          <CustomInput
            value={case2Values.employeeName}
            onChange={(e) => handleCase2Values("employeeName", e.target.value)}
            placeholder="Enter employee name"
          />
        )}
        {selectedUseCase.case === 2 && selectedUseCase.input === 3 && (
          <CustomInput
            value={case2Values.attendanceFile}
            onChange={(e) =>
              handleCase2Values("attendanceFile", e.target.value)
            }
            placeholder="Attach attendance file"
          />
        )}
      </ChatFooter>
    </div>
  );
}

export default ChatArea;

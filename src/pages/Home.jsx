import { useState } from "react";
import { ChatArea, ChatRooms, ChatHistory } from "../components";

function Home() {
  const [selectedUseCase, setSelectedUseCase] = useState(1);
  const [case1Values, setCase1Values] = useState({ email: "", feedBack: "" });
  const [case2Values, setCase2Values] = useState({
    managerEmail: "",
    employeeName: "",
    attendanceFile: null,
  });

  return (
    <div className="homeBackground bg-gray-50 min-h-screen flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0 pt-24 pb-12">
      <ChatRooms
        selectedUseCase={selectedUseCase}
        setSelectedUseCase={setSelectedUseCase}
      />
      <ChatArea selectedUseCase={selectedUseCase} />
      <ChatHistory
        selectedUseCase={selectedUseCase}
        case1Values={case1Values}
        case2Values={case2Values}
      />
    </div>
  );
}

export default Home;

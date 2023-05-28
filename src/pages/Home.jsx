import { useState } from "react";
import { ChatArea, ChatRooms, ChatHistory } from "../components";
import validator from "validator";
function Home() {
  const [selectedUseCase, setSelectedUseCase] = useState({ case: 1, input: 1 });
  const [case1Values, setCase1Values] = useState({ email: "", feedBack: "" });
  const [case2Values, setCase2Values] = useState({
    managerEmail: "",
    employeeName: "",
    attendanceFile: null,
  });
  const [case1Errors, setCase1Errors] = useState({
    email: false,
    feedBack: false,
  });

  const handleCase1Values = (key, value) => {
    if (key === "email") {
      setCase1Values((prevState) => {
        return { ...prevState, email: value };
      });
    } else {
      setCase1Values((prevState) => {
        return { ...prevState, feedBack: value };
      });
    }
  };

  const handleCase2Values = (key, value) => {
    if (key === "managerEmail") {
      setCase1Values((prevState) => {
        return { ...prevState, managerEmail: value };
      });
    } else if (key === "employeeName") {
      setCase1Values((prevState) => {
        return { ...prevState, employeeName: value };
      });
    } else {
      setCase1Values((prevState) => {
        return { ...prevState, attendanceFile: value };
      });
    }
  };

  const handleCase1Submit = () => {
    let res = checkValidity();

    if (res) {
      console.log(case1Values);
    }
  };

  const checkValidity = () => {
    let flag = true;

    if (!validator.isEmail(case1Values.email)) {
      setCase1Errors((prevState) => {
        return { ...prevState, email: true };
      });
      flag = false;
    }

    if (validator.isEmpty(case1Values.feedBack)) {
      setCase1Errors((prevState) => {
        return { ...prevState, feedBack: true };
      });
      flag = false;
    }

    return flag;
  };

  return (
    <div className="homeBackground bg-gray-50 min-h-screen flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0 pt-24 pb-12">
      <ChatRooms
        selectedUseCase={selectedUseCase}
        setSelectedUseCase={setSelectedUseCase}
      />
      <ChatArea
        selectedUseCase={selectedUseCase}
        case1Values={case1Values}
        handleCase1Values={handleCase1Values}
        case2Values={case2Values}
        handleCase2Values={handleCase2Values}
        setCase1Errors={setCase1Errors}
      />
      <ChatHistory
        selectedUseCase={selectedUseCase}
        setSelectedUseCase={setSelectedUseCase}
        case1Values={case1Values}
        case2Values={case2Values}
        handleCase1Submit={handleCase1Submit}
        case1Errors={case1Errors}
      />
    </div>
  );
}

export default Home;

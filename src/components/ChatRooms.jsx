function ChatRooms({ selectedUseCase, setSelectedUseCase }) {
  return (
    <div className="customScroll bg-white shadow-lg rounded-lg lg:rounded-r-lg h-[80px] lg:h-[600px] p-4 w-full max-w-2xl lg:max-w-[300px] overflow-x-auto lg:overflow-y-auto mb-6 lg:mb-0">
      <div className="flex flex-row justify-start items-center space-x-5 lg:space-x-0 h-full w-full lg:flex-col lg:justify-start lg:items-stretch lg:space-y-5">
        <p className="text-center text-xl text-gray-700 font-bold">Ues Cases</p>

        <div
          className={`flex justify-between items-center text-white font-bold ${
            selectedUseCase.case === 1 ? "bg-teal-400" : "bg-gray-400"
          }  text-gray-700 rounded-md w-full text-left p-2 space-x-6`}
        >
          <button
            onClick={() => setSelectedUseCase({ case: 1, input: 1 })}
            className="w-full text-left text-sm"
          >
            Automated Customer Support
          </button>
        </div>

        <div
          className={`flex justify-between items-center text-white font-bold ${
            selectedUseCase.case === 2 ? "bg-teal-400" : "bg-gray-400"
          }  text-gray-700 rounded-md w-full text-left p-2 space-x-6`}
        >
          <button
            onClick={() => setSelectedUseCase({ case: 2, input: 1 })}
            className="w-full text-left text-sm"
          >
            Automated HR Attendance Reporting System
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatRooms;

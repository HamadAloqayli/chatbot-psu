function ChatHeader({ selectedUseCase }) {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-b-gray-200">
      <div className="flex justify-center items-center space-x-5">
        <div>
          <p className="text-gray-600 font-bold text-xl">
            {selectedUseCase.case === 1
              ? "Automated Customer Support"
              : "Automated HR Attendance Reporting System"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;

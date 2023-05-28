import { Case1Values, Case2Values } from ".";

function ProfileArea({
  selectedUseCase,
  setSelectedUseCase,
  case1Values,
  case2Values,
  handleCase1Submit,
  case1Errors,
}) {
  return (
    <div className="customScroll bg-white shadow-lg rounded-lg lg:rounded-r-lg p-4 h-[120px] lg:h-[600px] py-4 px-4 w-full max-w-2xl lg:max-w-[300px] flex flex-col justify-between overflow-x-auto lg:overflow-y-auto mt-6 lg:mt-0 mb-8 lg:mb-0">
      <p className="text-center text-xl text-gray-700 font-bold mb-4">
        Requirements
      </p>

      <div className="flex flex-row justify-start items-center space-x-5 lg:space-x-0 h-full w-full lg:flex-col lg:justify-start lg:items-stretch lg:space-y-5">
        {selectedUseCase.case === 1 ? (
          <Case1Values
            selectedUseCase={selectedUseCase}
            setSelectedUseCase={setSelectedUseCase}
            case1Values={case1Values}
            case1Errors={case1Errors}
          />
        ) : (
          <Case2Values
            selectedUseCase={selectedUseCase}
            setSelectedUseCase={setSelectedUseCase}
            case2Values={case2Values}
          />
        )}
      </div>

      {selectedUseCase.case === 1 && (
        <button
          onClick={handleCase1Submit}
          className={`bg-teal-400 text-white font-bold rounded-md py-2`}
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default ProfileArea;

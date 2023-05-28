import {
  BsFillCheckCircleFill,
  BsFillXCircleFill,
  BsFillDashCircleFill,
} from "react-icons/bs";

function Case1Values({
  selectedUseCase,
  setSelectedUseCase,
  case1Values,
  case1Errors,
}) {
  return (
    <div>
      <div
        onClick={() => setSelectedUseCase({ case: 1, input: 1 })}
        className={` ${
          selectedUseCase.input === 1
            ? "bg-gray-200"
            : "bg-gray-100 cursor-pointer"
        }  p-2 rounded-md `}
      >
        <div className="flex justify-between items-center">
          <p className="w-5/6 truncate text-gray-600 text-sm">Email</p>
          {case1Errors.includes("email") ? (
            <BsFillXCircleFill className=" text-red-400 w-1/6" />
          ) : (
            <BsFillCheckCircleFill className=" text-teal-400 w-1/6" />
          )}
        </div>
        <div className="flex justify-between items-center text-gray-800 mt-1">
          <p>{!!case1Values.email ? case1Values.email : "No data provided"}</p>
        </div>
      </div>

      <div
        onClick={() => setSelectedUseCase({ case: 1, input: 2 })}
        className={`${
          selectedUseCase.input === 2
            ? "bg-gray-200"
            : "bg-gray-100 cursor-pointer"
        }  p-2 rounded-md mt-4 `}
      >
        <div className="flex justify-between items-center">
          <p className="w-5/6 truncate text-gray-600 text-sm">Feedback</p>
          <BsFillCheckCircleFill className=" text-teal-400 w-1/6" />
        </div>
        <div className="flex justify-between items-center text-gray-800 mt-1">
          <p>
            {!!case1Values.feedBack ? case1Values.feedBack : "No data provided"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Case1Values;

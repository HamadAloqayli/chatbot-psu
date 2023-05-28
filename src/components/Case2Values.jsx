import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

function Case2Values({ selectedUseCase, setSelectedUseCase, case2Values }) {
  return (
    <div>
      <div
        onClick={() => setSelectedUseCase({ case: 2, input: 1 })}
        className={` ${
          selectedUseCase.input === 1
            ? "bg-gray-200"
            : "bg-gray-100 cursor-pointer"
        }  p-2 rounded-md`}
      >
        <div className="flex justify-between items-center">
          <p className="w-5/6 truncate text-gray-600 text-sm">Manager Email</p>
          <BsFillCheckCircleFill className=" text-teal-400 w-1/6" />
        </div>
        <div className="flex justify-between items-center text-gray-800 mt-1">
          <p>
            {!!case2Values.managerEmail
              ? case2Values.managerEmail
              : "No data provided"}
          </p>
        </div>
      </div>
      <div className="bg-gray-100 p-2 rounded-md mt-4 ">
        <div className="flex justify-between items-center">
          <p className="w-5/6 truncate text-gray-600 text-sm">Employee Name</p>
          <BsFillCheckCircleFill className=" text-teal-400 w-1/6" />
        </div>
        <div className="flex justify-between items-center text-gray-800 mt-1">
          <p>
            test@test.com test@test.com test@test.com test@test.com
            test@test.com test@test.com test@test.com
          </p>
        </div>
      </div>
      <div className="bg-gray-100 p-2 rounded-md mt-4 ">
        <div className="flex justify-between items-center">
          <p className="w-5/6 truncate text-gray-600 text-sm">
            Attendance File
          </p>
          <BsFillXCircleFill className=" text-red-400 w-1/6" />
        </div>
        <div className="flex justify-between items-center text-gray-800 mt-1">
          <p>Attendance.png</p>
        </div>
      </div>
    </div>
  );
}

export default Case2Values;

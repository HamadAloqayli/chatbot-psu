import { RxExternalLink } from "react-icons/rx";

function ProfileArea() {
  return (
    <div className="customScroll bg-white shadow-lg rounded-lg lg:rounded-r-lg p-4 h-[120px] lg:h-[600px] py-4 px-4 w-full max-w-2xl lg:max-w-[300px] flex flex-col justify-between overflow-x-auto lg:overflow-y-auto mt-6 lg:mt-0 mb-8 lg:mb-0">
      <div className="flex flex-row justify-start items-center space-x-5 lg:space-x-0 h-full w-full lg:flex-col lg:justify-start lg:items-stretch lg:space-y-5">
        <div className="bg-gray-100 text-gray-700 p-2 rounded-md ">
          <div className="flex justify-between items-start">
            <p className="w-5/6 truncate">Hello Bot!</p>
            <RxExternalLink className="text-lg text-teal-400 w-1/6" />
          </div>
          <div className="flex justify-between items-center text-xs text-gray-400 mt-4">
            <p>First Chat</p>
            <p>23/05/2023</p>
          </div>
        </div>

        <div className="bg-gray-100 text-gray-700 p-2 my-3 rounded-md">
          <div className="flex justify-between items-start">
            <p className="w-5/6 truncate">Hello Bot!</p>
            <RxExternalLink className="text-lg text-teal-400 w-1/6" />
          </div>
          <div className="flex justify-between items-center text-xs text-gray-400 mt-4">
            <p>First Chat</p>
            <p>23/05/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileArea;

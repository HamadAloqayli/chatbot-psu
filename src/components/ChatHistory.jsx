import { Case1Values, Case2Values } from ".";

function ProfileArea({ selectedUseCase, case1Values, case2Values }) {
  return (
    <div className="customScroll bg-white shadow-lg rounded-lg lg:rounded-r-lg p-4 h-[120px] lg:h-[600px] py-4 px-4 w-full max-w-2xl lg:max-w-[300px] flex flex-col justify-between overflow-x-auto lg:overflow-y-auto mt-6 lg:mt-0 mb-8 lg:mb-0">
      <div className="flex flex-row justify-start items-center space-x-5 lg:space-x-0 h-full w-full lg:flex-col lg:justify-start lg:items-stretch lg:space-y-5">
        {selectedUseCase === 1 ? <Case1Values /> : <Case2Values />}
      </div>
    </div>
  );
}

export default ProfileArea;

import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

function Case1Values() {
  return (
    <div>
      {" "}
      <div className="bg-gray-100 p-2 rounded-md ">
        <div className="flex justify-between items-center">
          <p className="w-5/6 truncate text-gray-600 text-sm">Email</p>
          <BsFillCheckCircleFill className=" text-teal-400 w-1/6" />
        </div>
        <div className="flex justify-between items-center text-gray-800 mt-1">
          <p>test@test.com</p>
        </div>
      </div>
      <div className="bg-gray-100 p-2 rounded-md mt-4 ">
        <div className="flex justify-between items-center">
          <p className="w-5/6 truncate text-gray-600 text-sm">Feedback</p>
          <BsFillCheckCircleFill className=" text-teal-400 w-1/6" />
        </div>
        <div className="flex justify-between items-center text-gray-800 mt-1">
          <p>
            Objective: To develop a Flask server capable of receiving user
            commands, pre-processing them, creating prompts for the GPT3.5
            model, and returning the AI-generated responses to the front-end.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Case1Values;

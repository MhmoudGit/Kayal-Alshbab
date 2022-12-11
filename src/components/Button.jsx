import { AiOutlinePlus } from "react-icons/ai";

const Button = ({ name, fun }) => {
  return (
    <button
      className="bg-blue-500 lg:bg-inherit 
        p-2 lg:p-10 w-full rounded-full 
        text-lg lg:text-xl font-bold text-white my-5 
        lg:rounded-md lg:text-blue-500 lg:border lg:border-blue-500 
        lg:hover:bg-blue-500 lg:hover:text-white duration-300 flex justify-center items-center"
      onClick={fun}
    >
      <AiOutlinePlus className="text-md mx-1" />
      {name}
    </button>
  );
};

export default Button;

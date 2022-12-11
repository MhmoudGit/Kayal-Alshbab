import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Listitems = ({ data }) => {
  const [list, setList] = useState(false);

  return (
    <div className="border my-4 mx-6 rounded-lg ">
      <p
        className="bg-white text-xl cursor-pointer py-5 px-3"
        onClick={() => setList(!list)}
      >
        {data.name}
      </p>
      {list && (
        <div>
          <p className="bg-white text-xl p-10">{data.name}</p>
          <button className="text-sm border rounded-full p-4 text-blue-500 flex justify-center m-4">
            <AiOutlinePlus className="mx-1" /> اضف صنف
          </button>
        </div>
      )}
    </div>
  );
};

export default Listitems;

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const Listitems = ({ data, id, dlt }) => {
  const [list, setList] = useState(false);
  const [menu, setmenu] = useState(false);
 
  
  return (
    <div className="border my-4 mx-6 rounded-lg ">
      <div className="flex items-center">
        <p
          className="bg-white text-xl cursor-pointer py-5 px-3 w-full flex items-center"
          onClick={() => setList(!list)}
        >
          <AiOutlinePlus className="mx-2"/> {data.title}
        </p>
        <div className="relative">
          <BsThreeDotsVertical
            className="cursor-pointer text-2xl mx-3"
            onClick={() => setmenu(!menu)}
          />
          <div
            className={`${
              menu ? "block" : "hidden"
            } absolute bg-white p-2 px-5 left-3 m-2 text-sm shadow-md z-10`}
          >
            <p className="m-2">تعديل</p>
            <p className="m-2" onClick={() => dlt(id)}>مسح</p>
          </div>
        </div>
      </div>
      {list && (
        <div>
          <p className="bg-white text-xl p-10">{data.name}</p>
          <button className="text-sm border rounded-full p-4 text-blue-500 flex justify-center m-4">
            <AiOutlinePlus className="mx-1"/> اضف صنف
          </button>
        </div>
      )}
    </div>
  );
};

export default Listitems;

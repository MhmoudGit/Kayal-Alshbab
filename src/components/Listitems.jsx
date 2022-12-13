import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Classtype from "./Classtype";
import AddItem from "./AddItem";

const Listitems = ({ data, id, dlt }) => {

  const [list, setList] = useState(false);
  const [menu, setmenu] = useState(false);
  const [additem, setaddItem] = useState(false);
  const open = () => {
    setaddItem(true);
  };

  return (
    <div className="border m-4 rounded-lg ">
      {additem && (
        <AddItem
          close={() => {
            setaddItem(false);
          }}
          categoryId={id}
        />
      )}
      <div className="flex items-center">  {/**/}
        <p
          className="bg-white text-xl cursor-pointer py-5 px-3 w-full flex items-center"
          onClick={() => setList(!list)}
        >
          <AiOutlinePlus className="mx-2" /> {data.title}
        </p>
        <div className="relative">
          <BsThreeDotsVertical
            className="cursor-pointer text-2xl mx-3"
            onClick={() => setmenu(!menu)}
          />
          <div
            className={`${
              menu ? "block" : "hidden"
            } absolute bg-white py-1 left-3 m-2 text-sm shadow-md z-10`}
          >
            <p className="p-2 px-6 cursor-pointer hover:bg-blue-800 hover:text-white">
              تعديل
            </p>
            <p
              className="p-2 px-6 cursor-pointer hover:bg-blue-800 text-red-600 hover:text-white"
              onClick={() => dlt(id)}
            >
              مسح
            </p>
          </div>
        </div>
      </div>
      {list && (
        <div>
          <div className="bg-whitetext-xl p-2">
            <Classtype />
          </div>
          <button
            className="text-sm border rounded-full p-4 text-blue-500 flex justify-center m-4"
            onClick={open}
          >
            <AiOutlinePlus className="mx-1" /> اضف صنف
          </button>
        </div>
      )}
    </div>
  );
};

export default Listitems;

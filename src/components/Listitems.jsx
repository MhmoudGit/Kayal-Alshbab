import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Classtype from "./Classtype";
import AddItem from "./AddItem";
import Deletemenu from "./Deletemenu";

const Listitems = ({ data, id, dlt }) => {
  const [list, setList] = useState(false);
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
      <div className="flex items-center">
        <p
          className="bg-white text-xl cursor-pointer py-5 px-3 w-full flex items-center"
          onClick={() => setList(!list)}
        >
          <AiOutlinePlus className="mx-2" /> {data.title}
        </p>

        {/* Delete Menu */}
        <Deletemenu id={id} dlt={dlt} />
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

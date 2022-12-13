import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Deletemenu = ({ item, dlt}) => {
  const [menu, setmenu] = useState(false);
  const [edit, setEdit] = useState(false)


  return (
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
        {" "}
        {/* delete menu */}
        <p className="p-2 px-6 cursor-pointer hover:bg-blue-800 hover:text-white"
        onClick={() => setEdit(true)}
        >
          تعديل
        </p>
        <p
          className="p-2 px-6 cursor-pointer hover:bg-blue-800 text-red-600 hover:text-white"
          onClick={() => dlt(item._id)}
        >
          مسح
        </p>
      </div>
    </div>
  );
};

export default Deletemenu;

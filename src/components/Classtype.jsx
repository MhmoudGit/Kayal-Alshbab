import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Classtype = () => {
  const [menu, setmenu] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5">
        <img
          src="https://i.pinimg.com/originals/3a/69/ae/3a69ae3942d4a9da6c3cbc93b1c8f051.jpg"
          alt="img"
          className="w-16"
        />
        <div>
          <p>اسم</p>
          <p>سعر</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button>toggle</button>
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
            <p className="p-2 px-6 cursor-pointer hover:bg-blue-800 text-red-600 hover:text-white">
              مسح
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classtype;

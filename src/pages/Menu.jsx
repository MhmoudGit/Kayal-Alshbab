import { useState } from "react";
import AddMenu from "../components/AddMenu";
import Button from "../components/Button";
import Listitems from "../components/Listitems";
import { fake } from "../data";

const Menu = () => {
  const [addMenu, setaddMenu] = useState(false);
  const open = () => {
    setaddMenu(true);
  };

  return (
    <div className="lg:w-4/5 select-none">
      {addMenu && (
        <AddMenu
          close={() => {
            setaddMenu(false);
          }}
        />
      )}
      {/* <AddMenu/> */}
      <hr className="hidden lg:block lg:my-10" />
      <div className="py-2 px-3 lg:px-10 lg:mt-11">
        <h1 className="text-2xl lg:text-4xl font-bold mx-3 mt-3">
          ادارة القوائم
        </h1>
        <div className="my-2 border-b">
          <p className="text-lg py-4 mx-3 text-blue-500 w-fit border-b-2 border-blue-500">
            نظرة عامة
          </p>
        </div>
        <div className="shadow-sm my-3 p-5 text-xl bg-white">
          <p className="bg-white text-xl py-7 px-5 border-b">تصنيف</p>
          {fake.map((data) => (
            <Listitems data={data} />
          ))} {/*list items*/}
          <Button name="اضف تصنيف" fun={open} />
        </div>
      </div>
    </div>
  );
};

export default Menu;

import axios from "axios";
import { useEffect, useState } from "react";
import AddMenu from "../components/AddMenu";
import Button from "../components/Button";
import Listitems from "../components/Listitems";

const Menu = () => {
  const [addMenu, setaddMenu] = useState(false);
  const [items, setItems] = useState();
  const open = () => {
    setaddMenu(true);
  };

  const fetchData = () => {
    axios
      .get("http://192.168.1.7:8000/menu/getCategory")
      .then((res) => setItems(res.data.Data));
  };

  const deleteData = (id) => {
    axios.delete(`http://192.168.1.7:8000/controlBoard/deleteCategory/${id}`)
        .then(res => console.log(res))
  }

  useEffect(() => {
    fetchData();
  }, [addMenu, deleteData]);

  return (
    <div className="lg:w-5/6 select-non max-h-[70vh] lg:max-h-[100vh] overflow-y-auto">
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
        <div className="shadow-sm my-3 lg:p-5 lg:mx-3 text-xl bg-white">
          <p className="bg-white text-xl py-7 px-5 border-b">تصنيف</p>
          {items?.map((data) => (
            <Listitems data={data} key={data._id} id={data._id} dlt={deleteData} />
          ))}
          {/*list items*/}
          <Button name="اضف تصنيف" fun={open} />
        </div>
      </div>
    </div>
  );
};

export default Menu;

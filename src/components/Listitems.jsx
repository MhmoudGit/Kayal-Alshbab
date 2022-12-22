import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Classtype from "./Classtype";
import AddItem from "./AddItem";
import Deletemenu from "./Deletemenu";
import axios from "axios";
import UpdateCategory from "./UpdateCategory";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Listitems = ({ data, dlt, dltItem,setEndCategory}) => {
  // Updating category
  const [edit, setEdit] = useState(false);
  const [endItem, setEndItem] = useState();

  const toastopen =(success,message)=>{
    if (success===true) {
      toast.info(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }else{
      toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  const openEditCategory = () => {
    setEdit(true);
    setEndCategory(true)
  };

  const closeEditCategory = (success,message)=>{
    toastopen(success,message);
    setEdit(false);
    setEndCategory(false);
  }

  const Update = <UpdateCategory oldData={data} close={() => {
    setEdit(false);
    setEndCategory(false);
  }} closeEditCategory={closeEditCategory} />;
  // -----------------------------------------

  const [list, setList] = useState(false);
  const [additem, setAddItem] = useState(false);
  const [items, setGetItem] = useState();

  const GetItemsData = () => {
    axios
      .get(`https://victorious-pink-turtleneck-shirt.cyclic.app/controlBoard/getItem/${data._id}`)
      .then((res) => setGetItem(res.data.Data));
  };

  const open = () => {
    setAddItem(true);
  };

  const closeAddItem = (success,message)=>{
    toastopen(success,message);
    setAddItem(false);
  }

  useEffect(() => {
    GetItemsData();
  },[additem, dltItem,endItem]);

return (
    <div className="border m-4 rounded-lg font-semibold ">
      {additem && (
        <AddItem
          closeAddItem={closeAddItem}
          close={() => {
            setAddItem(false);
          }}
          categoryId={data._id}
        />
      )}
      <ToastContainer className='text-base font-semibold' />
      <div className="flex items-center">
        <p
          className="bg-white text-xl cursor-pointer py-5 px-3 w-full flex items-center"
          onClick={() => setList(!list)}
        >
          <AiOutlinePlus className="mx-2" /> {data.title}
        </p>

        {/* Delete Menu */}
        <Deletemenu
          item={data}
          dlt={dlt}
          editCat={edit}
          updateCategory={Update}
          open={openEditCategory}
        />
      </div>

      {list && (
        <div>
          <div className="bg-whitetext-xl p-2 font-semibold">
            {items?.map((one, i) => (
              <Classtype item={one} dltItem={dltItem} key={i}  setEndItem={setEndItem} />
            ))}
            {/* Looooppppppppp */}
          </div>
          <button
            className="text-sm border font-bold rounded-full p-4 text-blue-500 flex justify-center m-4 items-center"
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

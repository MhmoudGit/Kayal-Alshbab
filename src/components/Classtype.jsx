
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
// import { useLocation } from "react-router-dom";
import Deletemenu from "./Deletemenu";
import Singleitem from "./Singleitem";
import Toggle from "./Toggle";
import UpdateItem from "./UpdateItem";

const Classtype = ({ item, dltItem ,setEndItem}) => {
  const [editItem, setEditItem] = useState(false);
  // const location = useLocation();
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
  const closeEditCategory = (success,message)=>{
    toastopen(success,message);
    setEditItem(false);
    setEndItem(false);
  }
  const openEditItem = () => {
    setEditItem(true);
    setEndItem(true);
  };

  const Update = <UpdateItem oldData={item} close={() =>{
    setEditItem(false)
    setEndItem(false)
  }}  closeEditCategory={closeEditCategory}/>;
  return (
    <div className="flex justify-between items-center p-3 gap-2">
      <Singleitem item={item} /> {/* Single items inside the class list */}
      <ToastContainer className='text-base font-semibold' />
      <div className="flex flex-wrap-reverse gap-2">
        {/* toggle */}
        <Toggle status={item}/>
        {/* Delete Menu */}
        <Deletemenu
          dlt={dltItem}
          item={item}
          updateItem={Update}
          edit={editItem}
          open={openEditItem}
        />
      </div>
    </div>
  );
};

export default Classtype;

import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import AddMenu from '../components/AddMenu';

const Menu = () => {
  const [addMenu,setaddMenu]=useState(false);
  return (
    <div className="lg:w-4/5">
      {addMenu&&<AddMenu close={()=>{setaddMenu(false)}}/>}
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
        <button className="bg-blue-500 lg:bg-inherit 
        p-2 lg:p-10 w-full rounded-full 
        text-lg lg:text-xl font-bold text-white my-5 
        lg:rounded-md lg:text-blue-500 lg:border lg:border-blue-500 
        lg:hover:bg-blue-500 lg:hover:text-white duration-300 flex justify-center items-center"
        onClick={()=>{setaddMenu(true)}}
        >
          <AiOutlinePlus className='text-md mx-1'/>
          اضف قائمة
        </button>
      </div>
    </div>
  );
};

export default Menu;

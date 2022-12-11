import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
function AddMenu() {
return (
    <div className= "fixed inset-x-0 top-0 w-full h-full bg-gray-500/50 visible">
        <div className="flex flex-col gap-4  bg-white p-10  shadow-xl w-full md:w-[50%]  fixed right-0 top-0 z-40 h-full">
                <button className="flex gap-2 items-center text-3xl font-extrabold bg-transparent border-none ">
                    <AiOutlineArrowRight/> 
                    <h1>إضافة قائمة</h1>
                </button>

        </div>
    </div>
    )
}

export default AddMenu
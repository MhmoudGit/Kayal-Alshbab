import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { AiOutlineArrowRight } from 'react-icons/ai';
import axios from 'axios';
import FormData from "form-data";

function AddItem({close,categoryId,closeAddItem}) {
    const [img,setimg]=useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (values) => {
        var form = new FormData();
        // console.log(values)
        form.append("categoryId",categoryId);
        form.append("title",values.itemName);
        form.append("price",values.price);
        form.append("image",values.itemImage[0]);
        form.append("description",values.description);
        form.append("calories",values.calories);

        axios.post("http://192.168.1.5:8000/controlboard/createItem",form).then((res)=>{
            // console.log(res.data.success);
            if(res.data.success){
                closeAddItem(res.data.success,res.data.message);
            }else{
                closeAddItem(res.data.success,res.data.message);
            }
        })
    };
return (
    <div className="fixed inset-x-0 top-0 w-full h-full backdrop-blur-sm bg-gray/30 z-50">
        <div className="flex flex-col gap-2  bg-white py-10  shadow-xl w-full md:w-[80%] lg:w-[60%] fixed right-0 top-0 z-50 h-full ">
            <button className="flex gap-2 items-center text-3xl font-extrabold bg-transparent border-none px-5"
                onClick={close}
                >
                <AiOutlineArrowRight/> 
                <h1>إضافة صنف</h1>
            </button>
            <form className="flex flex-col justify-between gap-5 w-full mt-10 overflow-hidden px-6 h-full font-semibold text-xl" onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-col gap-10 w-full  overflow-y-auto px-6">
                    <div className="flex flex-col gap-2 w-full">
                        <label>اسم الصنف</label>
                        <input type="text" {...register("itemName", {
                            required:{ value: true, message: "هذا الحقل مطلوب" },
                        })} className={`py-3 px-4 rounded-full border outline-none ${errors?.itemName ?"bg-red-100 border-red-300":"bg-gray-100   border-gray-300"}`} />
                        {errors?.itemName && (
                            <small className="text-red-500 text-xs pr-4">
                                {errors?.itemName.message}
                            </small>
                            )}
                    </div>
                    <div className='flex flex-col md:flex-row w-full justify-between items-center gap-5 lg:gap-5'>
                        <div className='flex flex-col gap-4 justify-around w-full md:w-[50%] h-full '>
                            <div className="flex flex-col gap-2 w-full">
                                <label>السعر</label>
                                <div className="w-full relative">
                                    <input type="number" {...register("price", {
                                        required:{ value: true, message: "هذا الحقل مطلوب" },})} 
                                        className={`py-3 px-4 rounded-full w-full border outline-none ${errors?.price ?"bg-red-100 border-red-300":"bg-gray-100   border-gray-300"}`} />
                                    <p className='absolute left-[0px] inset-y-0 rounded-l-full py-3 px-6 bg-gray-300 font-semibold'>SAR</p>
                                </div>
                                {errors?.price && (
                                <small className="text-red-500 text-xs pr-4">
                                    {errors?.price.message}
                                </small>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label>السعرات الحرارية</label>
                                <div className="w-full relative">
                                    <input type="number" {...register("calories", {
                                        required:{ value: true, message: "هذا الحقل مطلوب" },})} 
                                        className={`py-3 px-4 rounded-full w-full border outline-none ${errors?.calories ?"bg-red-100 border-red-300":"bg-gray-100   border-gray-300"}`} />
                                    <p className='absolute left-[0px] inset-y-0 rounded-l-full py-3 px-6 bg-gray-300 font-semibold'>Kcal</p>
                                </div>
                            {errors?.calories && (
                                <small className="text-red-500 text-xs pr-4">
                                    {errors?.calories.message}
                                </small>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between w-full md:w-[50%]">
                            <div className="flex  items-center justify-center bg-logo w-full bg-contain bg-no-repeat bg-center ">
                            <label  className={`overflow-hidden backdrop-grayscale bg-white/30 backdrop-blur-sm flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer ${errors?.itemImage?"border-red-300":"border-gray-300"}`}>
                                {img===""?<div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-900 "><span className="font-semibold">اسحب الصورة هنا </span> أو اضغط لتصفح الملفات</p>
                                    <p className="text-xs text-gray-900 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>:<div className='bg-white w-full h-full flex justify-center items-center'>
                                        <img src={img} alt="" className="w-[50%] m-auto" />
                                        </div>}
                                    <input id="dropzone" {...register("itemImage",{
                                        onChange: (e) => setimg(URL.createObjectURL(e.target.files[0])),
                                        required:{ value: true, message: "هذا الحقل مطلوب" },
                                        })} accept="image/*" type="file" className="hidden"/>
                                </label>
                            </div> 
                            {errors?.itemImage && (
                                <small className="text-red-500 text-xs ">
                                    {errors?.itemImage.message}
                                </small>
                                )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-[80%] md:w-[60%]">
                            <label>وصف الصنف</label>
                            <textarea
                                rows={"4"}
                                {...register("description")} 
                                className="py-3 px-4 rounded-xl border outline-none bg-gray-100  border-gray-300" />
                            <small className="text-xs pr-4">
                            هذا الحقل اختياري
                            </small>
                    </div>
                </div>
                <div className="flex justify-end gap-3 items-center">
                    <button className="text-red-500 hover:text-red-600 bg-transparent" onClick={()=>closeAddItem(false,"تم تجاهل اضافه تصنيف")}>تجاهل</button>
                    <input type="submit" value="حفظ" className="bg-blue-500 hover:bg-blue-700 w-[80px] text-white py-2 rounded-full"/>
                </div>
            </form>
        </div>
    </div>
)
}

export default AddItem
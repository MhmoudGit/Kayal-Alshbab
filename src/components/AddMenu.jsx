import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { AiOutlineArrowRight } from 'react-icons/ai';
import axios from 'axios';
import FormData from "form-data";

function AddMenu({close}) {
    const [img,setimg]=useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (values) => {
        var form = new FormData();
        console.log(values)
        form.append("title",values.categoryName);
        form.append("image",values.categoryImage[0]);
        axios.post("http://192.168.1.7:8000/controlboard/createCategory",form).then((res)=>{
            console.log(res.data.success);
            if(res.data.success){
                close();
            }else{
            }
        })
    };
return (
    <div className= "fixed inset-x-0 top-0 w-full h-full backdrop-blur-sm bg-gray/30 z-50">
        <div className="flex flex-col gap-4  bg-white py-10  shadow-xl w-full md:w-[50%] fixed right-0 top-0 z-50 h-full">
                <button className="flex gap-2 items-center text-3xl font-extrabold bg-transparent border-none px-5 "
                onClick={close}
                >
                    <AiOutlineArrowRight/> 
                    <h1>إضافة تصنيف</h1>
                </button>
                <form className="flex flex-col gap-5 w-full px-6 my-10" onSubmit={handleSubmit(onSubmit)} >
                    <div className="flex flex-col gap-4 w-full">
                        <label>اسم تصنيف</label>
                        <input type="text" {...register("categoryName", {
                        required:{ value: true, message: "هذا الحقل مطلوب" },
                        })} className={`py-5 px-4 rounded-full border outline-none ${errors?.categoryName ?"bg-red-100 border-red-300":"bg-gray-100   border-gray-300"}`} />
                    {errors?.categoryName && (
                        <small className="text-red-500 text-xs">
                            {errors?.categoryName.message}
                        </small>
                        )}
                    </div>
                    <div className="flex flex-col justify-between gap-3">
                        <div class="flex  items-center justify-center bg-logo w-full md:w-[50%] bg-contain bg-no-repeat bg-center ">
                            <label  class={`overflow-hidden backdrop-grayscale bg-white/30 backdrop-blur-sm flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer ${errors?.categoryImage?"border-red-300":"border-gray-300"}`}>
                                {img===""?<div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p class="mb-2 text-sm text-gray-900 "><span class="font-semibold">اسحب الصورة هنا </span> أو اضغط لتصفح الملفات</p>
                                    <p class="text-xs text-gray-900 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>:<div className='bg-white w-full h-full flex justify-center items-center'>
                                        <img src={img} alt="" srcset="" className="w-[50%] m-auto" />
                                        </div>}
                                <input id="dropzone" {...register("categoryImage",{
                                    onChange: (e) => setimg(URL.createObjectURL(e.target.files[0])),
                                    required:{ value: true, message: "هذا الحقل مطلوب" },
                                    })} accept="image/*" type="file" class="hidden"/>
                            </label>
                        </div> 
                        {errors?.categoryImage && (
                            <small className="text-red-500 text-xs">
                                {errors?.categoryImage.message}
                            </small>
                            )}
                    </div>
                    <div className="flex justify-end gap-3 items-center">
                        <button className="text-red-500 hover:text-red-600 bg-transparent" onClick={close}>تجاهل</button>
                        <input type="submit" value="حفظ" className="bg-blue-500 hover:bg-blue-700 w-[80px] text-white p-4 rounded-full"/>
                    </div>
                </form>
        </div>
    </div>
    )
}

export default AddMenu
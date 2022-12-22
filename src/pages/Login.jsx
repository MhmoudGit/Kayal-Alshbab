import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { AiFillEye , AiFillEyeInvisible } from 'react-icons/ai';
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (values) => console.log(values);
    const [see ,setsee] = useState("password");
    const seepassward = ()=>{
        if(see === "password"){
            setsee("text")
        }else{
            setsee("password")
        }
    }
    return (
    <div className='w-full'>
        <h1 className='font-semibold text-3xl max-w-xl mx-auto mt-10 mb-5'>ﺗﺴﺠﻴﻞ اﻟﺪﺧﻮل</h1>
        <div className='max-w-xl bg-white mx-auto p-4 rounded-xl'>
            <form className='w-full flex flex-col gap-4 px-4 h-full'  onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-col gap-2 w-full">
                            <label className='text-gray-500 px-5'>البريد الإلكتروني</label>
                            <div className='w-full relative ' dir='ltr'>
                            <input type="email" {...register("userEmail", {
                            required:{ value: true, message: "هذا الحقل مطلوب" },
                            })} className={` w-full py-[0.65rem] pr-12 pl-5 rounded-full border outline-none  ${errors?.userEmail ?"bg-red-100 border-red-300":"bg-gray-100   border-gray-300"}`} />
                            <MdEmail className='absolute right-[20px] top-[27%] text-xl  font-semibold'/>
                            </div>
                        {errors?.userEmail && (
                            <small className="text-red-500 text-xs pr-4">
                                {errors?.userEmail.message}
                            </small>
                            )}
                </div >
                <div className="flex flex-col gap-2 w-full">
                            <label className='text-gray-500 px-5'>الرقم السري </label>
                            <div className='w-full relative ' dir='ltr'>
                            <input type={see} {...register("password", {
                            required:{ value: true, message: "هذا الحقل مطلوب" },
                            })} className={` w-full py-[0.65rem] pr-12 pl-5 rounded-full border outline-none  ${errors?.password ?"bg-red-100 border-red-300":"bg-gray-100   border-gray-300"}`} />
                            {see==="password"?<AiFillEye className='absolute right-[20px] top-[27%] text-xl  font-semibold'  onMouseDown={seepassward} />:
                            <AiFillEyeInvisible className='absolute right-[20px] top-[27%] text-xl  font-semibold' onMouseUp={seepassward}/>}
                            </div>
                        {errors?.password && (
                            <small className="text-red-500 text-xs pr-4">
                                {errors?.password.message}
                            </small>
                            )}
                </div >
                <input type="submit" value="تسجيل الدخول"  className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-3 rounded-full cursor-pointer"/>
            </form>
        </div>
    </div>
    )
}

export default Login
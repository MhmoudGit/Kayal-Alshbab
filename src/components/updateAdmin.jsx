import React from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

function UpdateAdmin({oldData, close,closeEditAdmin,EditUser}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (values) => console.log(values);
    
return (
    <div className={`fixed top-0 h-full transition-all w-full duration-[0.5s] z-50 ${
        EditUser ? "inset-x-0 backdrop-blur-sm" : "backdrop-blur-0 left-[100vw]"
      }`}>
        <div className={`flex flex-col gap-4 bg-white py-10 transition-all duration-[1s] shadow-xl w-full md:w-[50%] fixed right-0 top-0 z-50 h-full ${
        EditUser ? "inset-x-0" : "left-[100vw]"
        }`}>
            <button className="flex gap-2 items-center text-3xl font-extrabold bg-transparent border-none px-5"
                    onClick={close}
                    >
                    <AiOutlineArrowRight/> 
                    <h1>تعديل مستخدم</h1>
            </button>
            <form className="flex flex-col  gap-4 w-full mt-10  px-8 h-full overflow-y-scroll font-semibold" onSubmit={handleSubmit(onSubmit)} >
                    <h1 className='font-semibold text-[1.5rem]'>ملف المستخدم</h1>
                    <p className='text-sm text-gray-500 font-light mt-3'>سيرسل بريد دعوة تلقائيا للمستخدم المدعو</p>
                <div className="flex flex-col gap-2 w-full">
                        <label className='text-gray-500 px-5'>الاسم</label>
                        <input type="text" {...register("userName", {
                        required:{ value: true, message: "هذا الحقل مطلوب" },
                        })} className={`py-[0.65rem] px-4 rounded-full border outline-none  ${errors?.userName ?"bg-red-100 border-red-300":"bg-gray-100   border-gray-300"}`} />
                    {errors?.userName && (
                        <small className="text-red-500 text-xs pr-4">
                            {errors?.userName.message}
                        </small>
                        )}
                </div>
                    <h1 className='font-semibold text-[1.5rem]'>معلومات التواصل</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <label className='text-gray-500 px-5'>البريد الإلكتروني</label>
                        <div className='w-full relative'>
                        <input type="email" {...register("userEmail", {
                        required:{ value: true, message: "هذا الحقل مطلوب" },
                        })} className={` w-full py-[0.65rem] px-12 rounded-full border outline-none  ${errors?.userEmail ?"bg-red-100 border-red-300":"bg-gray-100   border-gray-300"}`} />
                        <MdEmail className='absolute right-[20px] top-[27%] text-xl  font-semibold'/>
                        </div>
                    {errors?.userEmail && (
                        <small className="text-red-500 text-xs pr-4">
                            {errors?.userEmail.message}
                        </small>
                        )}
                </div >
                <div className="flex flex-col gap-2 w-full">
                    <label className='text-gray-500 px-5'>رقم الجوال (اختياري)</label>
                        <input type="" {...register("phone")} className={`w-full py-[0.65rem] px-4 rounded-full border outline-none bg-gray-100 border-gray-300 `} />
                </div>
                <div className="flex justify-end gap-3 mt-3 items-center">
                        <button className="text-red-500 hover:text-red-600 bg-transparent" onClick={close}>تجاهل</button>
                        <input type="submit" value="حفظ" className="bg-blue-500 hover:bg-blue-700 w-[70px] text-white px-2 py-3 rounded-full cursor-pointer"/>
                </div>
            </form>
        </div>
    </div>
)
}

export default UpdateAdmin
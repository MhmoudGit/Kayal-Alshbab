import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineArrowRight } from "react-icons/ai"
import axios from "axios"
import FormData from "form-data"

function UpdateCategory({ oldData, close, closeEditCategory, edit }) {
  const [img, setimg] = useState(
    `https://kayal-api.onrender.com/${oldData.image}`
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  let form = new FormData()

  const onSubmit = (values) => {
    if (values.image.length === 0) {
      form.append("image", oldData.image)
      form.append("title", values.title)
    } else if (values.image.length === 1) {
      form.append("image", values.image[0])
      form.append("title", values.title)
    }
    axios
      .post(
        `https://kayal-api.onrender.com/controlboard/updateCategory/${oldData._id}`,
        form
      )
      .then((res) => {
        if (res.data.success) {
          closeEditCategory(res.data.success, res.data.message)
        } else {
          closeEditCategory(res.data.success, res.data.message)
        }
      })
  }

  return (
    <div
      className={`fixed top-0 h-full transition-all w-full duration-[0.5s] z-50 ${
        edit ? "inset-x-0 backdrop-blur-sm" : "backdrop-blur-0 left-[100vw]"
      }`}
    >
      <div
        className={`flex flex-col gap-4 bg-white py-10 transition-all duration-[1s] shadow-xl w-full md:w-[50%] fixed right-0 top-0 z-50 h-full ${
          edit ? "inset-x-0" : "left-[100vw]"
        }`}
      >
        <button
          className="flex gap-2 items-center text-3xl font-extrabold bg-transparent border-none px-5 "
          onClick={close}
        >
          <AiOutlineArrowRight />
          <h1>تعديل تصنيف</h1>
        </button>
        <form
          className="flex flex-col gap-5 w-full px-6 my-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4 w-full">
            <label>اسم تصنيف</label>
            <input
              defaultValue={oldData.title}
              type="text"
              {...register("title", {
                required: { value: true, message: "هذا الحقل مطلوب" },
              })}
              className={`py-5 px-4 rounded-full border outline-none ${
                errors?.title
                  ? "bg-red-100 border-red-300"
                  : "bg-gray-100   border-gray-300"
              }`}
            />
            {errors?.title && (
              <small className="text-red-500 text-xs">
                {errors?.title.message}
              </small>
            )}
          </div>
          <div className="flex flex-col justify-between gap-3">
            <div className="flex  items-center justify-center bg-logo w-full md:w-[50%] bg-cover bg-no-repeat">
              <label
                className={`overflow-hidden backdrop-grayscale bg-white/30 backdrop-blur-sm flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer ${
                  errors?.image ? "border-red-300" : "border-gray-300"
                }`}
              >
                {img === "" ? (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-900 ">
                      <span className="font-semibold">اسحب الصورة هنا </span> أو
                      اضغط لتصفح الملفات
                    </p>
                    <p className="text-xs text-gray-900 ">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                ) : (
                  <div className="bg-white w-full h-full flex justify-center items-center">
                    <img src={img} alt="old" className="w-[50%] m-auto" />
                  </div>
                )}
                <input
                  id="dropzone"
                  {...register("image", {
                    onChange: (e) =>
                      setimg(URL.createObjectURL(e.target.files[0])),
                    // required:{ value: true, message: "هذا الحقل مطلوب" },
                  })}
                  accept="image/*"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
            {errors?.image && (
              <small className="text-red-500 text-xs">
                {errors?.image.message}
              </small>
            )}
          </div>
          <div className="flex justify-end gap-3 items-center">
            <button
              className="text-red-500 hover:text-red-600 bg-transparent"
              onClick={close}
            >
              تجاهل
            </button>
            <input
              type="submit"
              value="حفظ"
              className="bg-blue-500 hover:bg-blue-700 w-[80px] text-white p-4 rounded-full cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateCategory

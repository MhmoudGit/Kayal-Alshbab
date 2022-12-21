import { useState } from "react"
import { IoIosCopy } from "react-icons/io"
import profile from "../img/profile.png"
import cover from "../img/cover.png"
import { useForm } from "react-hook-form"
import { BsTrash } from "react-icons/bs"

const Restaurant = () => {
  const [coverImg, setCoverImg] = useState("")
  const [profileImg, setProfileImg] = useState("")

  const regex = /^(ftp|http|https):\/\/[^ "]+$/
  const phoneRegex = /^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  const removeImg = (e, setState) => {
    e.preventDefault()
    setState("")
  }

  return (
    <div className="lg:w-5/6 select-non max-h-[70vh] lg:max-h-[100vh] overflow-y-auto">
      <hr className="hidden lg:block lg:my-10" />
      <div className="flex flex-col gap-2 py-2 px-3 lg:px-10 lg:mt-11">
        <h2 className="text-2xl lg:text-4xl font-bold mx-3 mt-3">
          معلومات المطعم
        </h2>
        <span className="text-gray-400 text-base">ID: Yalla4131</span>
      </div>
      <div className="rounded-xl bg-white max-w-5xl md:mx-auto overflow-hidden mx-4">
        <div className="bg-[#e0f6f4] p-3.5 flex flex-col gap-2 text-lg font-medium text-[#5b5a87]">
          <p className="flex items-center gap-2">
            رابط لمواقع التواصل :{" "}
            <a
              href="yousef-omar.yallaqrcodes.com"
              className="text-[#3b38cc] text-lg"
            >
              yousef-omar.yallaqrcodes.com
            </a>
            <IoIosCopy className="text-[#3b38cc] text-lg" />
          </p>
          <p>شارك هذا الرابط على مطعمك في انستقرام وقوقل ماب</p>
        </div>
        <form
          className="max-w-2xl mx-auto py-8 px-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className="flex items-center justify-center w-full bg-cover bg-no-repeat rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${cover})` }}
          >
            <label className="overflow-hidden flex flex-col items-center justify-center w-full h-[22rem] cursor-pointer">
              {coverImg === "" ? (
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
                <div className="bg-white w-full h-full relative flex justify-center items-center">
                  <img src={coverImg} alt="cover" />
                  <button
                    className="absolute top-4 left-4 w-8 h-8 p-1.5 rounded-full bg-red-500 text-white flex items-center justify-center"
                    onClick={(e) => removeImg(e, setCoverImg)}
                  >
                    <BsTrash className="text-lg" />
                  </button>
                </div>
              )}
              <input
                id="dropzone"
                {...register("cover", {
                  onChange: (e) =>
                    setCoverImg(URL.createObjectURL(e.target.files[0])),
                })}
                accept="image/*"
                type="file"
                className="hidden"
              />
            </label>
          </div>
          <div className="group relative bottom-16 rounded-full w-fit overflow-hidden">
            <div
              className="flex items-center justify-center overflow-hidden w-[160px] h-[160px] rounded-full bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${profile})` }}
            >
              <label className="overflow-hidden flex flex-col items-center justify-center cursor-pointer w-[160px] h-[160px] rounded-full">
                {profileImg === "" ? (
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
                    <p className="mb-2 text-xs text-center text-gray-900">
                      <span className="font-semibold">اسحب الصورة هنا </span> أو
                      اضغط لتصفح الملفات
                    </p>
                  </div>
                ) : (
                  <div className="bg-white relative w-[160px] h-[160px] rounded-full overflow-hidden flex justify-center items-center">
                    <img src={profileImg} alt="profile" />
                    <button
                      className="absolute top-6 left-6 w-8 h-8 p-1.5 rounded-full bg-red-500 text-white flex items-center justify-center"
                      onClick={(e) => removeImg(e, setProfileImg)}
                    >
                      <BsTrash className="text-lg" />
                    </button>
                  </div>
                )}
                <input
                  id="dropzone"
                  {...register("profile", {
                    onChange: (e) =>
                      setProfileImg(URL.createObjectURL(e.target.files[0])),
                  })}
                  accept="image/*"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="text-[#5b5a87] flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                اﺳﻢ اﻟﻤﻄﻌﻢ - EN
              </label>
              <input
                type="text"
                className={`rounded-full p-3.5 outline-none border ${
                  errors.name
                    ? "border-red-500 bg-red-200"
                    : "border-[#d7d6ff] bg-[#f5f5ff]"
                }`}
                {...register("name", {
                  required: { value: true, message: "هذا الحقل مطلوب" },
                })}
              />
              {errors.name ? (
                <small className="text-xs text-red-500">
                  {errors.name.message}
                </small>
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                الموقع الإلكتروني
              </label>
              <input
                type="text"
                className={`rounded-full p-3.5 outline-none border ${
                  errors.website
                    ? "border-red-500 bg-red-200"
                    : "border-[#d7d6ff] bg-[#f5f5ff]"
                }`}
                {...register("website", {
                  required: { value: true, message: "هذا الحقل مطلوب" },
                  pattern: {
                    value: regex,
                    message: "فضلاًً أدخل موقعاً إلكترونياً صالحاً",
                  },
                })}
              />
              {errors.website ? (
                <small className="text-xs text-red-500">
                  {errors.website.message}
                </small>
              ) : (
                <small className="text-xs">هذا الحقل اختياري</small>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                رقم الجوال
              </label>
              <input
                type="tel"
                defaultValue="+966"
                className={`rounded-full p-3.5 outline-none border ${
                  errors.phone
                    ? "border-red-500 bg-red-200"
                    : "border-[#d7d6ff] bg-[#f5f5ff]"
                }`}
                dir="ltr"
                {...register("phone", {
                  required: { value: true, message: "هذا الحقل مطلوب" },
                  pattern: {
                    value: phoneRegex,
                    message: "فضلاًً أدخل رقم جوال صالح",
                  },
                })}
              />
              {errors.phone ? (
                <small className="text-xs text-red-500">
                  {errors.phone.message}
                </small>
              ) : (
                <small className="text-xs">هذا الحقل اختياري</small>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                Whatsapp
              </label>
              <input
                type="text"
                className="rounded-full p-3.5 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
                {...register("whatsapp")}
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                Instagram
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-full p-3.5 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
                {...register("instagram")}
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                Snapchat
              </label>
              <input
                type="text"
                className="rounded-full p-3.5 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
                {...register("snapchat")}
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                Tiktok
              </label>
              <input
                type="text"
                className="rounded-full p-3.5 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
                {...register("tiktok")}
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                Twitter
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-full p-3.5 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
                {...register("twitter")}
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                Facebook
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-full p-3.5 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
                {...register("facebook")}
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                رابط خرائط قوقل
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-full p-3.5 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
                {...register("google_map")}
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                موقع المطعم
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-full p-3.5 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
                {...register("menu_site")}
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <button
              className="rounded-full py-3 px-5 bg-blue-900 text-white w-fit font-semibold text-base"
              type="submit"
            >
              حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Restaurant

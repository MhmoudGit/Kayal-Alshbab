import { useState } from "react"
import { IoIosCopy } from "react-icons/io"
import { MdEdit } from "react-icons/md"
import profile from "../img/profile.png"
import cover from "../img/cover.png"

const Restaurant = () => {
  const [coverImg, setCoverImg] = useState()
  const [profileImg, setProfileImg] = useState()
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
        <div className="bg-[#e0f6f4] p-4 flex flex-col gap-2 text-lg font-medium text-[#5b5a87]">
          <p className="flex items-center gap-2">
            رابط لمواقع التواصل :{" "}
            <a href="" className="text-[#3b38cc] text-lg">
              yousef-omar.yallaqrcodes.com
            </a>
            <IoIosCopy className="text-[#3b38cc] text-lg" />
          </p>
          <p>شارك هذا الرابط على مطعمك في انستقرام وقوقل ماب</p>
        </div>
        <form className="max-w-2xl mx-auto py-8 px-4">
          <div className="w-full h-44 md:h-[20rem] rounded-xl overflow-hidden">
            {coverImg ? (
              <img
                src={URL.createObjectURL(coverImg) || cover}
                alt="user cover image"
                className="object-cover w-full h-full"
              />
            ) : (
              <img
                src={cover}
                alt="user cover image"
                className="object-cover w-full h-full"
              />
            )}
            <label
              htmlFor="cover"
              className="absolute cursor-pointer top-4 right-4 text-white p-2 text-xl rounded-full bg-oxford-800 hover:bg-oxford-900"
            >
              <MdEdit />
              <input
                type="file"
                id="cover"
                className="hidden"
                onChange={(e) =>
                  setCoverImg(e.target.files && e.target.files[0])
                }
              />
            </label>
          </div>
          <div className="group relative bottom-16 w-full">
            {profileImg ? (
              <img
                src={URL.createObjectURL(profileImg) || profile}
                alt=""
                className="border-2 rounded-full object-cover w-[160px] h-[160px]"
              />
            ) : (
              <img
                src={profile}
                alt=""
                className="border-2 rounded-full object-cover w-[160px] h-[160px]"
              />
            )}
            <label
              htmlFor="profile"
              className="absolute hidden cursor-pointer bottom-1 right-1 text-white p-1 text-xl rounded-full bg-oxford-800 hover:bg-oxford-900 group-hover:flex"
            >
              <MdEdit />
              <input
                type="file"
                id="profile"
                className="hidden"
                onChange={(e) =>
                  setProfileImg(e.target.files && e.target.files[0])
                }
              />
            </label>
          </div>
          <div className="text-[#5b5a87] flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                اﺳﻢ اﻟﻤﻄﻌﻢ - EN
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                الموقع الإلكتروني
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                رقم الجوال
              </label>
              <input
                type="number"
                placeholder=""
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                Whatsapp
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
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
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                Snapchat
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
              />
              <small className="text-xs">هذا الحقل اختياري</small>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-base font-semibold">
                Tiktok
              </label>
              <input
                type="text"
                placeholder=""
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
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
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
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
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
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
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
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
                className="rounded-full p-3 outline-none border border-[#d7d6ff] bg-[#f5f5ff]"
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

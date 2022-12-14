import QRCode from "react-qr-code";

const qrCode = () => {
  return (
    <div className="lg:w-5/6">
      <hr className="hidden lg:block lg:my-10" />
      <div className="py-2 px-3 lg:px-10 lg:mt-11">
        <h1 className="text-2xl lg:text-4xl font-bold mx-3 mt-3">
          الكيو ار كود
        </h1>
      </div>
      <div className="flex justify-between flex-col gap-3 text-xl font-bold bg-white shadow-md rounded-lg m-2 p-3">
        <h2 className="text-lg">تم انشاء القائمة!</h2>
        <div className="text-sm text-gray-400 flex gap-2">
          <p className="bg-sky-100 py-1 px-2 font-semibold text-gray-500 rounded-md">
            الرابط : kayalalshbab.com{" "}
          </p>
          <button className="text-blue-500 ">تعديل</button>
        </div>

        {/*qr code */}
        <div className="flex flex-col gap-4 p-2 lg:flex-row lg:w-full lg: justify-between">
        <div className="flex flex-col gap-3 lg:w-1/2">
        <div className="flex items-center gap-2 p-3 rounded-lg border hover:bg-blue-300 duration-300">
            <input
              id="bordered-checkbox-1"
              type="radio"
              value=""
              name="bordered-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded-full"
            />
            <label
              for="bordered-checkbox-1"
              className="py-4 w-full text-lg font-bold cursor-pointer"
            >
              الكيو ار كود الاساسي
            </label>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg border hover:bg-blue-300 duration-300">
            <input
              id="bordered-checkbox-2"
              type="radio"
              value=""
              name="bordered-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded-full"
            />
            <label
              for="bordered-checkbox-2"
              className="py-4 w-full text-lg font-bold cursor-pointer"
            >
              ﻣﻠﺼﻖ
            </label>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg border hover:bg-blue-300 duration-300">
            <input
              id="bordered-checkbox-3"
              type="radio"
              value=""
              name="bordered-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded-full"
            />
            <label
              for="bordered-checkbox-3"
              className="py-4 w-full text-lg font-bold cursor-pointer"
            >
              مطوية
            </label>
          </div>
          
        </div>
        <QRCode value="https://www.google.com.eg/" className="flex justify-center items-center w-1/2" />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-2">
          <button className="bg-blue-800 lg:p-3 lg:px-7 hover:bg-blue-900 duration-200 p-2 text-sm text-white rounded-full">
            تحميل الكيو ار كود
          </button>
        </div>
      </div>
    </div>
  );
};

export default qrCode;

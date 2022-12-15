import { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [editLink, setEditLink] = useState("www.google.com");
  const [enableWriting, setEnableWriting] = useState(true);

  const onImageDownload = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

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
          <p className="bg-sky-100 py-1 px-2 font-semibold text-gray-500 rounded-md select-none">
            الرابط :{" "}
            <input
              type="text"
              className="bg-sky-100 focus:outline-none"
              disabled={enableWriting}
              value={editLink}
              onChange={(e) => setEditLink(e.target.value)}
            />
          </p>
          <button
            className="text-blue-500 focus:outline-none"
            onClick={() => setEnableWriting(!enableWriting)}
          >
            {enableWriting ? "تعديل" : "حفظ"}
          </button>
        </div>

        {/*qr code style */}
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
          <QRCode
            value={editLink}
            className="flex justify-center items-center w-1/2"
            renderas="svg"
            id="QRCode"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-2">
          <button
            onClick={() => onImageDownload()}
            className="bg-blue-800 lg:p-3 lg:px-7 hover:bg-blue-900 duration-200 p-2 text-sm text-white rounded-full"
          >
            تحميل الكيو ار كود
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrCode;

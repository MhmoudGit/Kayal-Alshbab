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
            <p className="bg-sky-100 py-1 px-2 font-semibold text-gray-500 rounded-md">الرابط : kayalalshbab.com </p>
            <button className="text-blue-500 ">تعديل</button>
          </div>
      </div>
    </div>
  );
};

export default qrCode;

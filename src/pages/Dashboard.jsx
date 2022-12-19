const Dashboard = () => {
  return (
    <div className="lg:w-5/6">
      <hr className="hidden lg:block lg:my-10" />
      <div className="py-2 px-3 lg:px-10 lg:mt-11">
        <h1 className="text-2xl lg:text-4xl font-bold mx-3 mt-3">
          لوحة التحكم
        </h1>
        <div className="my-2 border-b">
          <p className="text-lg py-4 mx-3 text-blue-500 w-fit border-b-2 border-blue-500 font-semibold">
            أداء المطعم
          </p>
        </div>
        <div className="text-sm font-light text-gray-600 px-3 lg:flex lg:items-center lg:my-5 lg:text-lg">
          <p>نوفمبر 11 -ديسمبر 11, 2022</p>
          <div className="mx-5 lg:text-sm">اخر 30 يوم</div>
        </div>
        <div className="flex justify-between mt-4 text-xl font-bold">
          <div className="w-2/3 bg-white shadow-md rounded-lg p-3 m-2 ">
            <p>عدد مرات فتح القائمة</p>
            <p className="my-3">6</p>
            <p className="my-3 h-40">Graph</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-3 h-fit w-2/5 m-2">
            <p>مراجعة</p>
            <p>0</p>
            <p>0.00</p>
            <p>Stars</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

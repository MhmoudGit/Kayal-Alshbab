const Singleitem = ({item}) => {

  return (
    <div className="flex gap-5">
      <img
        src={`http://192.168.1.5:8000/${item.image}`}
        alt="img"
        className="w-16 rounded-md h-16"
      />
      <div className="flex flex-col gap-2">
        <p>{item.title}</p>
        <div className="flex gap-3 text-sm justify-center items-center flex-wrap">
            <p className="bg-sky-100 py-1 px-2 font-semibold text-gray-500 rounded-md">{item.price} ريال سعودي</p>
            <p className="font-semibold text-gray-500">{item.calories} سعرة حرارية</p>
        </div>
      </div>
    </div>
  );
};

export default Singleitem;

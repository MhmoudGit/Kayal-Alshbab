const Singleitem = ({item}) => {

  return (
    <div className="flex gap-5">
      <img
        src={`http://192.168.1.5:8000/${item.image}`}
        alt="img"
        className="w-16"
      />
      <div>
        <p>{item.title}</p>
        <p>سعر</p>
      </div>
    </div>
  );
};

export default Singleitem;

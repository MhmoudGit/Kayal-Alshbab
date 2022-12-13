import Deletemenu from "./Deletemenu";
import Singleitem from "./Singleitem";
import Toggle from "./Toggle";

const Classtype = ({ item, dltItem }) => {
  return (
    <div className="flex justify-between items-center p-3">
      <Singleitem item={item} /> {/* Single items inside the class list */}
      <div className="flex gap-2">
        {/* toggle */}
        <Toggle />

        {/* Delete Menu */}
        <Deletemenu dlt={dltItem} item={item} />
      </div>
    </div>
  );
};

export default Classtype;

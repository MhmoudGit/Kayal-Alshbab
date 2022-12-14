
import { useState } from "react";
import Deletemenu from "./Deletemenu";
import Singleitem from "./Singleitem";
import Toggle from "./Toggle";
import UpdateItem from "./UpdateItem";

const Classtype = ({ item, dltItem}) => {
  const [editItem, setEditItem] = useState(false);

  const Update = <UpdateItem oldData={item} close={() => setEditItem(false)} />;
  const open = () => {
    setEditItem(true);
  };
  
  return (
    <div className="flex justify-between items-center p-3 gap-2">
      <Singleitem item={item} /> {/* Single items inside the class list */}
      <div className="flex flex-wrap-reverse gap-2">
        {/* toggle */}
        <Toggle status={item}/>
        {/* Delete Menu */}
        <Deletemenu
          dlt={dltItem}
          item={item}
          updateItem={Update}
          edit={editItem}
          open={open}
        />
      </div>
    </div>
  );
};

export default Classtype;

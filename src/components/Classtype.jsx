import { useState } from "react";
import Deletemenu from "./Deletemenu";
import Singleitem from "./Singleitem";
import Toggle from "./Toggle";
import UpdateItem from "./UpdateItem";

const Classtype = ({ item, dltItem }) => {
  const [edit, setEdit] = useState(false);
  const Update = <UpdateItem oldData={item} close={() => setEdit(false)} />;
  const open = () => {
    setEdit(true);
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
          edit={edit}
          open={open}
        />
      </div>
    </div>
  );
};

export default Classtype;

import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Classtype from "./Classtype";
import AddItem from "./AddItem";
import Deletemenu from "./Deletemenu";
import axios from "axios";
import UpdateCategory from "./UpdateCategory";

const Listitems = ({ data, dlt, dltItem , edit, setEdit}) => {
  // Updating category
  const Update = <UpdateCategory oldData={data} close={() => setEdit(false)} />;
  const opens = () => {
    setEdit(true);
  };
  // -----------------------------------------

  const [list, setList] = useState(false);
  const [additem, setAddItem] = useState(false);
  const [items, setGetItem] = useState();
  const open = () => {
    setAddItem(true);
  };

  const [editItem, setEditItem] = useState(false);

  const GetItemsData = () => {
    axios
      .get(`http://192.168.1.5:8000/controlBoard/getItem/${data._id}`)
      .then((res) => setGetItem(res.data.Data));
  };

  console.log('loop');
  useEffect(() => {
    GetItemsData();
  }, [additem, dltItem,editItem]);

  return (
    <div className="border m-4 rounded-lg font-semibold ">
      {additem && (
        <AddItem
          close={() => {
            setAddItem(false);
          }}
          categoryId={data._id}
        />
      )}
      <div className="flex items-center">
        <p
          className="bg-white text-xl cursor-pointer py-5 px-3 w-full flex items-center"
          onClick={() => setList(!list)}
        >
          <AiOutlinePlus className="mx-2" /> {data.title}
        </p>

        {/* Delete Menu */}
        <Deletemenu
          item={data}
          dlt={dlt}
          editCat={edit}
          updateCategory={Update}
          open={opens}
        />
      </div>

      {list && (
        <div>
          <div className="bg-whitetext-xl p-2 font-semibold">
            {items?.map((one, i) => (
              <Classtype item={one} dltItem={dltItem} key={i} editItem={editItem} setEditItem={setEditItem} />
            ))}
            {/* Looooppppppppp */}
          </div>
          <button
            className="text-sm border font-bold rounded-full p-4 text-blue-500 flex justify-center m-4 items-center"
            onClick={open}
          >
            <AiOutlinePlus className="mx-1" /> اضف صنف
          </button>
        </div>
      )}
    </div>
  );
};

export default Listitems;

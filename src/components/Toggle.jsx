import axios from "axios";

const Toggle = ({ status }) => {
  const toggle = () => {
    axios
      .post(
        `https://kayal-api.onrender.com/controlBoard/updateItemStatus/${status._id}`,
        {}
      )
      .then((res) => res.data.success);
  };

  const sts = () => {
    if (status.status === "active") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <label className="flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={sts()}
        className="sr-only peer"
        onChange={() => toggle()}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer border peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-300 peer-checked:bg-blue-500"></div>
    </label>
  );
};

export default Toggle;

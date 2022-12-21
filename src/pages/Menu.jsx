import axios from "axios"
import { useEffect, useState } from "react"
import AddMenu from "../components/AddMenu"
import Button from "../components/Button"
import Listitems from "../components/Listitems"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import promo from "../img/promo.png"
import { useForm } from "react-hook-form"

const Menu = () => {
  const [addMenu, setaddMenu] = useState(false)
  const [items, setItems] = useState()
  const [endCategory, setEndCategory] = useState()
  const [value, setValue] = useState(0)

  const tabs = ["نظرة عامة", "العرض الدعائي"]

  const open = () => {
    setaddMenu(true)
  }

  const fetchData = () => {
    axios
      .get("https://kayal-api.onrender.com/menu/getCategory")
      .then((res) => setItems(res.data.Data))
  }

  const toastopen = (success, message) => {
    if (success === true) {
      toast.info(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    } else {
      toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }

  const deleteData = (id) => {
    axios
      .delete(
        `https://kayal-api.onrender.com/controlBoard/deleteCategory/${id}`
      )
      .then((res) => {
        toastopen(res.data.success, res.data.message)
        fetchData()
      })
  }

  const deleteItem = (id) => {
    axios
      .delete(`https://kayal-api.onrender.com/controlBoard/deleteItem/${id}`)
      .then((res) => {
        toastopen(res.data.success, res.data.message)
        fetchData()
      })
  }

  const closeAddmenu = (s, m) => {
    toastopen(s, m)
    setaddMenu(false)
  }

  useEffect(() => {
    fetchData()
  }, [addMenu, endCategory])

  return (
    <div className="lg:w-5/6 select-non max-h-[70vh] lg:max-h-[100vh]  overflow-y-auto">
      {addMenu && (
        <AddMenu closeAddmenu={closeAddmenu} close={() => setaddMenu(false)} />
      )}
      <ToastContainer className="text-base font-semibold" />
      {/* <AddMenu/> */}
      <hr className="hidden lg:block lg:my-10" />
      <div className="py-2 px-3 lg:px-10 lg:mt-11">
        <h1 className="text-2xl lg:text-4xl font-bold mx-3 mt-3">
          ادارة القوائم
        </h1>
        <div className="flex gap-2 border-b my-4">
          {tabs.map((tab, i) => (
            <p
              key={i}
              className={`text-base py-4 mx-3 cursor-pointer w-fit font-semibold  ${
                value === i
                  ? "border-blue-500 border-b-2 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setValue(i)}
            >
              {tab}
            </p>
          ))}
        </div>
        {value === 0 ? (
          <MenuSection
            items={items}
            deleteItem={deleteItem}
            setEndCategory={setEndCategory}
            open={open}
            deleteData={deleteData}
          />
        ) : (
          <PromotionalSection />
        )}
      </div>
    </div>
  )
}

const MenuSection = ({
  items,
  deleteItem,
  setEndCategory,
  open,
  deleteData,
}) => {
  return (
    <div className="shadow-sm my-3 lg:p-5 lg:mx-3 text-xl bg-white">
      <p className="bg-white text-xl py-7 px-5 border-b font-semibold">تصنيف</p>
      {items?.map((data) => (
        <Listitems
          data={data}
          key={data._id}
          dlt={deleteData}
          dltItem={deleteItem}
          setEndCategory={setEndCategory}
        />
      ))}
      {/*list items*/}
      <Button name="اضف تصنيف" fun={open} />
    </div>
  )
}

const PromotionalSection = () => {
  const [promoImg, setPromoImg] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className="shadow-sm my-3 rounded-xl lg:p-5 lg:mx-3 text-xl bg-white">
      <h2 className="text-2xl p-5 font-bold">الصورة الدعائية</h2>
      <div className="flex flex-col text-base px-5">
        <p>يتم عرض الصورة الدعائية للزبائن قبل عرض القائمة، ويمكنهم اغلاقها</p>
        <p>
          . مكان الصورة الدعائية له حواف دائرية بمقدار 32pt . ويوجد زر اغلاق
          بالأعلى على الركن الأيمن/الأيسر، لذلك احرص على جعل هذين المكانين بدون
          نص او عنصر مهم
        </p>
      </div>
      <form
        className="flex flex-col gap-6 mt-8 w-[300px] h-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="flex items-center justify-center rounded-xl overflow-hidden w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${promo})` }}
        >
          <label
            className={`overflow-hidden backdrop-grayscale bg-white/30 backdrop-blur-sm flex flex-col items-center justify-center w-full h-full border-2 border-dashed rounded-lg cursor-pointer ${
              errors?.itemImage ? "border-red-300" : "border-gray-300"
            }`}
          >
            {promoImg === "" ? (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-900">
                  <span className="font-semibold">اسحب الصورة هنا </span> أو
                  اضغط لتصفح الملفات
                </p>
                <p className="text-xs text-gray-900 ">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            ) : (
              <div className="bg-white w-full h-full flex justify-center items-center">
                <img src={promoImg} alt="" className="w-[50%] m-auto" />
              </div>
            )}
            <input
              id="dropzone"
              {...register("itemImage", {
                onChange: (e) =>
                  setPromoImg(URL.createObjectURL(e.target.files[0])),
                required: { value: true, message: "هذا الحقل مطلوب" },
              })}
              accept="image/*"
              type="file"
              className="hidden"
            />
          </label>
        </div>
        {errors?.itemImage && (
          <small className="text-red-500 text-xs ">
            {errors?.itemImage.message}
          </small>
        )}
        <button
          type="submit"
          className="w-fit py-3 px-5 rounded-full bg-blue-900 text-white"
        >
          حفظ
        </button>
      </form>
    </div>
  )
}
export default Menu

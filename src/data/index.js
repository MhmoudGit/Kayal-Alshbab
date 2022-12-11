import { BiPencil, BiQrScan, BiRestaurant, BiTrendingUp } from "react-icons/bi";

export const navLinks = [
  { id: 1, name: "لوحة التحكم", route: "/dashboard", icon: <BiTrendingUp /> },
  { id: 2, name: "المطعم", route: "/restaurant", icon: <BiRestaurant /> },
  { id: 3, name: "القائمة", route: "/", icon: <BiPencil /> },
  { id: 4, name: "الكيو ار كود", route: "/qr-code", icon: <BiQrScan /> },
];

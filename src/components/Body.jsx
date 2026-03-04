import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASEURL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(store=>store.user)
  console.log("userData",userData)
  const fetchUser = async () => {
    try {
      const res = await axios(BASEURL + "/profile/view", {
        withCredentials: true,
      });
      console.log("res...", res.data);
      dispatch(addUser(res.data));
    } catch (err) {
        console.log("err.status",err.status)
      if (err.status == 401) {
        navigate("/login");
      }

      console.error(err);
    }
  };
  useEffect(() => {
    if(!userData){
 fetchUser();
    }
   
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};
export default Body;

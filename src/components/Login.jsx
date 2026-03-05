import axios from "axios";
import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../constants";
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [emailId, setEmailId] = useState("dhoni@gmail.com");
  const [password, setPassword] = useState("Dhoni@21");
  const [error, setError] = useState("");
  const handleLogin = async () => {
    try {
      const res = await axios.post(BASEURL+"/login", {
        emailId,
        password,
      },{
        withCredentials:true
      });
      console.error("res",res)
dispatch(addUser(res.data))
 navigate('/')
    } catch (err) {
      setError(err?.response?.data || "Something went wrong")
      console.error("Error", err.response);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card card-border bg-base-200 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login Page</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your EmailId"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

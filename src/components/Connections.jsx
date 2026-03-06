import axios from "axios";
import React, { useEffect } from "react";
import { BASEURL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  console.log("connections",connections)
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASEURL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err.response.data);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  if(!connections)return;
  if(connections ==0){
    return <h1>No connections Found</h1>
  }
  return(
    <div className="text-center my-10">
        <h1 className="text-bold">Connections</h1>
        {
            connections?.map((item,index)=>{
                const {firstName,lastName,photoUrl,age,gender,about} = item
                console.log("photoUrl",photoUrl)
                return (
                    <div className="m-4 p-4 border rounder">
                        <img alt="photo" className="w-50 h-20" src={photoUrl}/>
                        <h1>{firstName+' '+ lastName}</h1>
                        <p>{about}</p>
                        <p>{age && gender && age+" "+gender}</p>
                        </div>
                )
            })
        }
    </div>
  )
};
export default Connections;

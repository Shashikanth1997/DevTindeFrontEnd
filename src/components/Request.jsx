import axios from "axios";
import React, { useEffect } from "react";
import { BASEURL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequestConnections } from "../utils/RequestSlice";
const Request = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASEURL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequestConnections(res.data.data));
    } catch (err) {
      console.log(err.response.data);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return;
  if (requests == 0) {
    return <h1>No Requests Found</h1>;
  }
  console.log("requests", requests);
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-bold">Request Connections</h1>
        {requests?.map((item, index) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            item.fromUserId;
          console.log("photoUrl", photoUrl);
          return (
            <div key={_id} className="m-4 p-4 border rounder">
              <img alt="photo" className="w-50 h-20" src={photoUrl} />
              <h1>{firstName + " " + lastName}</h1>
              <p>{about}</p>
              <p>{age && gender && age + " " + gender}</p>
              <div>
                <button className="btn btn-primary mx-2">Reject</button>
                <button className="btn btn-secondary mx-2">Accept</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Request;

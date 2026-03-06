import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASEURL } from "../constants";
import { useDispatch,useSelector  } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
const Feed = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
   const feed = useSelector((store) => store.feed);
  const getFeed = async () => {
    if(feed)return
    try {
      const res = await axios.get(BASEURL + "/feed", { withCredentials: true });
      console.log("res in feed", res.data);
      dispatch(addFeed(res.data));
    } catch (err) {
      setError(err.response.data || "something went wrong");
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  console.log("feed",feed)
  return (
    <div>
        {feed &&  <UserCard user = {feed.data[0]}/>}
     
    </div>
  );
};
export default Feed;

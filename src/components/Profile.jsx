import React from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
const Profile = () => {
  const user = useSelector(store =>store.user)
  return (
    <div>
      <h1>Profile Page</h1>
      {user && <EditProfile user={user}/>}
      {/* <UserCard/> */}
    </div>
  );
};
export default Profile;

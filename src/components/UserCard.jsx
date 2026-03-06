import React from "react";
const UserCard = ({user}) => {
    console.log("user",user)
    const {firstName,lastName,photoUrl,age,gender,about}= user
  return (
    <div className="flex justify-center my-5">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={user.photoUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName+" "+lastName}</h2>
          <p>
      {age+" "+ gender}
          </p>
          <p>
          {about}
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Ignored</button>
            <button className="btn btn-secondary">Interested </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;

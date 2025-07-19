/* eslint-disable react/prop-types */

import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const EditProfile = ({user}) => {
    

    const [firstName,setFirstName] = useState(user.firstName)
    const [lastName,setLastName]= useState(user.lastName)
    const [photoUrl,setPhotoUrl]= useState(user.photoUrl)
    const [gender,setGender] = useState(user.gender);
    const [error,setError] = useState("")
  const dispatch = useDispatch();



    const saveProfile =async()=>{
        setError("")
        try {
            const res = await axios.patch(
              BASE_URL + "/profile/edit",
              {
                firstName,
                lastName,
                photoUrl,
                gender,
               
              },
              { withCredentials: true },
            );
            dispatch(addUser(res?.data?.data));
          }catch(err){
            setError(err.response.data)
        }
    }


  return (
    <div className="flex justify-center my-10">
    <div className="flex justify-center items-center min-h-screen bg-white mx-10">
    <div className="card bg-base-100 w-96 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title justify-center text-2xl font-bold mb-4">Edit Profile</h2>
        <div className="space-y-4">
          <div>
            <input
               value={firstName}
              placeholder="FirstName"
              className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setFirstName(e.target.value)}
            />
          </div>
          <div>
            <input
           value={lastName}
              placeholder="LastName"
              className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
           value={photoUrl}
              placeholder="PhotoUrl"
              className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setPhotoUrl(e.target.value)}
            />
          </div>
          <div>
            <input
           value={gender}
              placeholder="Gender"
              className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setGender(e.target.value)}
            />
          </div>
        </div>
        { <p className="text-red-500">{error}</p> }
        <div className="card-actions justify-center mt-6">
          <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white"onClick={saveProfile} >
            Save Profile
          </button>
        </div>
        {/* <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div> */}
      </div>
    </div>
  </div>
<UserCard user={{firstName,lastName,photoUrl,gender}}/>
  </div>
  )
}

export default EditProfile
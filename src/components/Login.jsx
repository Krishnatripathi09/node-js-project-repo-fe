import { useState } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const LogIn = () => {

const [email,setEmailId] = useState("")
const [password,setPassword]= useState("")
const [firstName,setFirstName]= useState("")
const [lastName,setLastName]= useState("")
const [gender,setGender]= useState("")
const [photoUrl,setPhotoUrl]= useState("")
const [isLoginForm,setIsLoginForm] = useState(true)
const [error, setError] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();


const handleLogin= async()=>{
    
try {
    const res = await axios.post(BASE_URL+"/signin",{
    email,
    password
},{withCredentials:true});
  dispatch(addUser(res.data)); 
 return navigate("/"); 
}
catch (err){
   console.log(err)
    setError(err?.response?.data || "Something Went Wrong")
    console.log(err)
}
}


const handleSignUp = async()=>{
  try{
    const res = await axios.post(BASE_URL+"/signup",{firstName,lastName,gender,photoUrl,email,password},
      {withCredentials:true})
    dispatch(addUser(res?.data?.data));
    return navigate("/"); 
  } catch(err){
    setError(err?.response?.data || "Something Went Wrong")
  }
}

    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="card bg-base-100 w-96 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl font-bold mb-4">{isLoginForm? "Sign-In":"Sign-Up"}</h2>
            <div className="space-y-4">
           {!isLoginForm &&<> <div>
                <input
                  //type="email"
                  value={firstName}
                  placeholder="FirstName"
                  className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </div>
              <div>
                <input
                  //type="email"
                  value={lastName}
                  placeholder="LastName"
                  className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>setLastName(e.target.value)}
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
              <div>
                <input
                 
                  value={photoUrl}
                  placeholder="PhotoUrl"
                  className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>setPhotoUrl(e.target.value)}
                />
              </div>
              </>}
              <div>
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>setEmailId(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={isLoginForm ? handleLogin:handleSignUp}>
                {isLoginForm? "Sign-In" : "Sign-Up"}
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-blue-600 hover:underline cursor-pointer" onClick={()=>setIsLoginForm((value)=>!value)}>
               {isLoginForm?"New User? Sign-Up Here 🐭":"Existing User! Login Here ✅"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LogIn;
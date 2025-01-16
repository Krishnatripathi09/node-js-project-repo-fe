import { useState } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {

const [email,setEmailId] = useState("Musk@gmail.com")
const [password,setPassword]= useState("Musk@123456")
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
    setError(err?.response?.data || "Something Went Wrong")
    console.error(err)
}
}
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="card bg-base-100 w-96 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl font-bold mb-4">Login</h2>
            <div className="space-y-4">
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
                  //type="password"
                  value={password}
                  placeholder="Password"
                  className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleLogin}>
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
import { useState } from "react";
import axios from 'axios'
const Login = () => {

const [email,setEmailId] = useState("")
const [password,setPassword]= useState("")

const handleLogin= async()=>{
try {
    const res = await axios.post("http://localhost:3000/signin",{
    email,
    password
},{withCredentials:true});
}catch (err){
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
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="input input-bordered input-primary w-full focus:ring-2 focus:ring-blue-500"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
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
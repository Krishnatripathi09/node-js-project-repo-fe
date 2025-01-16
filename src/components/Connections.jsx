/* eslint-disable react/jsx-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionsSlice';

const Connections = () => {
//const [error,setError] = useState("")
const connections = useSelector(store =>store.connections)
const dispatch = useDispatch();
const fetchConnection = async()=>{
    try{
const res = await axios.get(BASE_URL +"/user/connections",{withCredentials:true})
    
dispatch(addConnections(res.data.data))
}catch(err){
       //Log the Error
    }
}
useEffect(()=>{
    fetchConnection()
},[]);


if(!connections) return;

if(connections.length ==0) return <h1 className="text-bold text-2xl">No Connections Found</h1>
  return (
    <div className="flex flex-col text-center justify-center my-10">
<h1 className="text-bold text-blue-400 text-3xl">Connections</h1>

{connections.map((connection)=>{
    const {firstName,lastName,photoUrl,gender} = connection; 
    return(
        <div className=" flex m-4 p-4 border rounded-lg border-base-300 w-5/12 mx-auto">
            <div>  <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl}/></div>
            <div className="text-left mx-3 my-3">
                <h2 className="font-bold text-xl">
                {firstName+" "+lastName}
                </h2>
                   
            <p>{gender}</p>
            </div>
        </div>
    )
})}
    </div>
  )
}

export default Connections
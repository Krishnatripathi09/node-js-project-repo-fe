/* eslint-disable no-empty */
/* eslint-disable react/jsx-key */
import axios from 'axios'
import  { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/requestSlice'

const Requests = () => {
const requests = useSelector((store)=>store.requests)
const dispatch = useDispatch();  


const reviewRequest = async(status,_id)=>{
    try{
        const res = await axios.post(BASE_URL +"/request/review/"+status+"/"+ _id,{},{withCredentials:true})
    dispatch(removeRequest(_id))
    }catch(err){

    }
}


const fetchRequests = async () => {
   try
   { 
    const res = await axios.get(BASE_URL +"/user/requests/received",{
withCredentials:true});


dispatch(addRequests(res.data.data));

   }
   catch (error){
console.log(error)
   }

};

useEffect(()=>{
fetchRequests();
},[])

if(!requests) return;

if(requests.length === 0) return <h1 className="flex justify-center my-10">No Requests Found</h1>
  return (
    <div className="flex  flex-col text-center justify-center my-10">
<h1 className="text-bold text-blue-400 text-3xl">Connection Requests</h1>

{requests.map((request)=>{
    const {_id,firstName,lastName,photoUrl,gender} = request.fromUserId; 
    return(
        <div key={_id} className=" flex justify-between m-4 p-4 border rounded-lg border-base-300 w-7/12 mx-auto">
            <div>  <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl}/></div>
            <div className="text-left mx-3 my-3">
                <h2 className="font-bold text-xl">
                {firstName+" "+lastName}
                </h2>
                   
            <p>{gender}</p>
            </div>
            <div>
            <button className="btn btn-primary mx-3 my-3" onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
            <button className="btn btn-secondary mx-3 my-3"  onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
            </div>
        </div>
    )
})}
    </div>
  )
}

export default Requests
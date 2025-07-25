import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
const dispatch = useDispatch();
const feed  = useSelector((store)=>store.feed)


const getFeed = async () => {
  if (feed?.length > 0) return; // Prevent redundant API calls
  try {
    const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
    console.log("API Response====>",res)
    dispatch(addFeed(res?.data)); 

  } catch (err) {
    console.error("Error fetching feed:", err); // Log the error
  }
};


useEffect(()=>{
getFeed();
},[])

if(feed.length <= 0) return <h1 className="flex justify-center my-10">No New Users Found !</h1>

  return feed && (
    <div className="flex justify-center my-10"><UserCard user={feed[0]}/></div>
  )
}

export default Feed ;

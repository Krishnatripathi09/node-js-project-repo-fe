import axios from "axios"
import { BASE_URL } from "../utils/constants"

const Premium = () => {

const handleBuyClick = async(type) =>{
    const order = await axios.post(BASE_URL+"/payment/create",{
        membershipType:type,
    },{withCredentials:true})
    
const {amount,keyId,currency,notes,orderId} =order.data 

    //It should Open the Razorpay Dialogue Box:
const options = {
        key: keyId, // Replace with your Razorpay key_id
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        name: 'Dev Tinder',
        description: 'Connect to other Devs',
        order_id: orderId, // This is the order_id created in the backend
        prefill: {
          name: notes.firstName +" "+ notes.lastName,
          email: notes.email,
        },
        theme: {
          color: '#F37254'
        },
      };

 const rzp = new window.Razorpay(options);
      rzp.open()
}

  return (
    <div className="m-10">
  <div className="flex w-full flex-col lg:flex-row">

    {/* Silver Membership */}
    <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center">
      <h1 className="font-bold text-3xl bg-gradient-to-r from-[#BCC6CC] via-[#EEE] to-[#A9A9A9] bg-clip-text text-transparent drop-shadow">
        Silver Membership
      </h1>
      <ul>
        <li>- Chat With Other People</li>
        <li>- 100 Connection Request Per Day</li>
        <li>- Blue Tick</li>
        <li>- 3 Months</li>
      </ul>
    <div className="mt-6 flex justify-center">
        <button onClick={()=>handleBuyClick("silver")} className="btn btn-outline btn-secondary">Buy Silver</button>
      </div>
    </div>

    <div className="divider lg:divider-horizontal">OR</div>

    {/* Gold Membership */}
    <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center">
      <h1 className="font-bold text-3xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent drop-shadow">
        Gold Membership
      </h1>
      <ul>
        <li>- Chat With Other People</li>
        <li>- 500 Connection Request Per Day</li>
        <li>- Blue Tick</li>
        <li>- 6 Months</li>
      </ul>
      <div className="mt-6 flex justify-center">
        <button onClick={()=>handleBuyClick("gold")} className="btn btn-outline btn-primary">Buy Gold</button>
      </div>
    </div>

  </div>
</div>


  )
}

export default Premium
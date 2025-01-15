
const UserCard = ({user}) => {
const {firstName,lastName,photoUrl} = user;
console.log(firstName,lastName,photoUrl)
  return (
   <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img 
         src={user.photoUrl}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  )
}

export default UserCard;
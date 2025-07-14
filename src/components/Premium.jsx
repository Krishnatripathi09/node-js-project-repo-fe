
const Premium = () => {
  return (
    <div className="m-10">
        <div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center">
    <h1 className="font-bold text-3xl">Silver Membership</h1>
<ul>
    <li> - Chat With Other People</li>
    <li> - 100 Connection Request Per Day</li>
    <li> - Blue Tick</li>
    <li> - 3 Months</li>
</ul>
<button className="btn btn-secondary">Buy Silver</button>
  </div>
  <div className="divider lg:divider-horizontal">OR</div>
  <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center">
    <h1 className="font-bold text-3xl">Gold Membership</h1>
<ul>
    <li> - Chat With Other People</li>
    <li> - 500 Connection Request Per Day</li>
    <li> - Blue Tick</li>
    <li> - 6 Months</li>
</ul>
<button className="btn btn-primary">Buy Gold</button>
</div>
</div>
    </div>
  )
}

export default Premium
import React, { ChangeEvent, useState } from 'react'

let Shipping = () => {
    const [shippingInfo, setShippingInfo] = useState({
        address : "", 
        city : "", 
        state : "", 
        country : "", 
        pincode : ""
    })

    let stateChange = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setShippingInfo((prev) => ({...prev, [e.target.name] : e.target.value}));
    };
  return (
    <div className='shippingDetails'>
        <h1>Shipping</h1>
        <form>
            <input type="text"
            placeholder="address"
            name = "address"
            value = {shippingInfo.address}
            onChange= {stateChange}
            required
            />
            <input type="text"
            placeholder="city"
            name = "city"   
            value = {shippingInfo.city}
            onChange= {stateChange}
            required
            />
            <input type="text"
            placeholder="state"
            name = "state"
            value = {shippingInfo.state}
            onChange= {stateChange}
            required
            />
            <select name="country" 
            value={shippingInfo.country}
            onChange={stateChange}
            >
            <option value="India">India</option>
            <option value="US">Us</option>
            <option value="Japan">Japan</option>
            </select>

            <input type="text"
            placeholder="pincode"
            name = "pincode"
            value = {shippingInfo.pincode}
            onChange= {stateChange}
            required
            />
        </form>
        <button className="btn-pay">pay now</button>
    </div>
  )
}
export default Shipping;

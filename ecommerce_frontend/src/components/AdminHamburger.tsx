import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminHamburger = () => {
    const [isOpen, setIsOpen] = useState(false); 

return (
    <>
    {isOpen && (<div className='overlay visible' onClick={()=>setIsOpen((prev) => !prev)}></div>)}
    <button className={`cancel-btn ${isOpen? 'open' : ''}`}>X</button>
    <div className="admin-hamburger">
        <button className="admin-hamburger-btn" onClick={()=>setIsOpen((prev) => !prev)}>
            <span></span><span></span><span></span>
        </button>
     <div className= {`admin-hamburger-content ${isOpen? 'open' : ''}`} >
        <ul>
            <li><Link to="admin/product/create" onClick={()=>setIsOpen((prev) => !prev)}>create product</Link></li>
            <li><Link to="admin/product/update" onClick={()=>setIsOpen((prev) => !prev)}>update product</Link></li>
            <li><Link to="admin/product/process" onClick={()=>setIsOpen((prev) => !prev)}>transactions</Link></li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default AdminHamburger; 
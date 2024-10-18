import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='vh-100' style={{background:"black"}}>
    <div className='container row'>
    <div className='col-sm-6 col-12'>
        <img src="https://static.vecteezy.com/system/resources/previews/021/054/300/non_2x/profile-contact-illustration-with-3d-render-style-free-png.png" className='p-5' alt="" style={{height:'100vh'}} />
    </div>
    <div className=' mt-5 col-12 col-sm-6 align-items-center justify-content-center d-flex'>
        <div className='d-flex  align-items-center flex-column '>
          <p className='justify-content-centern' style={{color:"white"}}>Streamline Your Connections with ContactKeeper!</p>
        <Link to='/create' className='btn btn-danger px-4 mt-5 '>Get Started</Link>
        <Link to='/home' className='btn btn-warning mt-4 px-5 '>View Contact</Link>
        </div>
    </div>
    
    </div>
    
         
    </div>
    </>
  )
}

export default Landing
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Create() {
  const [values,setValues]=useState({
    name: '',
    email: '',
    phone: ''
})


const navigate = useNavigate();

const handleSubmit = (event)=>{
  event.preventDefault();
  if(values.name && values.email && values.phone){
    axios.post('https://ckserver-leor.onrender.com/',values)
    .then(res => {
    console.log(res);
    navigate('/')
    
  })
  .catch(err => console.log(err));
  }else{
    alert("Enter valid input")
  }
  
}
  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center ' style={{background: "black"}}>
      <div className=' border bg-secondary shadow px-5 pt-3 pb-5 rounded'>
        <h4 className='text-secondary d-flex justify-content-center align-items-center h4'>Create New Contact</h4>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-2' style={{color:'white'}}>
            <label htmlFor="name">Name :</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name'
            onChange={e=>setValues({...values,name:e.target.value})}/>

          </div>
          <div className='mb-2' style={{color:'white'}}>
            <label htmlFor="emai;">Email :</label>
            <input type="email" name='email' className='form-control' placeholder='Enter Email'
            onChange={e=>setValues({...values,email:e.target.value})}/>

          </div>
          <div className='mb-2' style={{color:'white'}}>
            <label htmlFor="name">Phone :</label>
            <input type="number" name='phone' className='form-control' placeholder='Enter Number'
            onChange={e=>setValues({...values,phone:e.target.value})}/>

          </div>
          <div className='mb-3 mt-4 d-flex justify-content-between'>
            <Link to="/" className='btn btn-primary ' >Back</Link>
            <button className='btn btn-success ms-5 '>Submit</button>
          </div>
          
          
        </form>
      </div>
    </div>
    </>
  )
}

export default Create
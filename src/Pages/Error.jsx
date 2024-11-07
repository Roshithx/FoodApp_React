import React from 'react'
import PageNotFound from '../assets/404.gif'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <>
     <div style={{minHeight:'100vh'}} >
        <h1 className='text-center mt-20 font-bold mb-0 text-4xl'>404</h1>
          <div className='flex justify-center items-center'>
            <img width={580} src={PageNotFound} alt="" />
          </div>
          <div>
          <Link to={'/'} className=' justify-center items-center  text-center flex font-semibold '>Back to Home</Link>
          </div>
       
     </div>
     
    </>
  )
}

export default Error
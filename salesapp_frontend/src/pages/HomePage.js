import React from 'react'
import Layout from '../component/Layout/Layout'
import { useAuth } from '../context/auth'
import salesapp from '../images/salesapp.jpg'

const HomePage = () => {
  const[auth]=useAuth()

  return (
   <Layout title = "HomePage - Sales App">
     <div className='d-flex justify-content-center mt-4'>
     <h1>Welcome  {auth.user? auth?.user.firstname:" to salesapp"}</h1>
    
     </div>
     <div className='d-flex justify-content-center mt-5'>
      <img src={salesapp} alt='salesapp' width={"350px"} height={"350px"}/>
     </div>
  
   
    {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
    </Layout>
  )
}

export default HomePage

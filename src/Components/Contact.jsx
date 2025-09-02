import React from 'react'

const Contact = () => {
  return (
    <>
      <>
        <div >
          <div className='flex justify-center items-center mt-10'>
          <h1 className='text-3xl md:text-5xl'>Contact Details</h1>
        </div>
      <div className='flex flex-col md:flex-row justify-around items-center mt-10 p-5 m-5 w-70 sm:w-200 md:w-350 text-xl'>
        <div>
          <h1>Email Id</h1>
        <p>info@gmail.com</p>
      </div>
      <div>
        <h1>Mobile No.</h1>
        <p>1234567891</p>
      </div>
      <div>
        <h1>Address</h1>
        <p>Surat, Gujrat</p>
      </div>
      </div>
        </div>
      </>
    </>
  )
}

export default Contact
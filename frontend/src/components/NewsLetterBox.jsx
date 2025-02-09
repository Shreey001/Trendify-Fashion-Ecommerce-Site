import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => { 
        // Send the email to the server
        event.preventDefault();
        console.log('Email submitted successfully');
  
    }

  return (
    <div className='text-center bg-black py-10 px-4 rounded-2xl shadow-lg border border-gray-700'>
          <p className='text-2xl font-bold text-white'>Subscribe Now and Get 20% off</p>
          <p className='text-gray-300 mt-3'>
              Stay updated with the latest fashion trends, promotions, and special offers.
          </p>
          <form onSubmit={ onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-600 rounded-lg pl-3'>
              <input type='email' className='w-full sm:flex-1 outline-none py-2 px-3 bg-transparent text-white placeholder-gray-500' placeholder='Enter your email' />
              <button type='submit' className='bg-white text-black text-xs px-6 py-2 rounded-lg' >SUBSCRIBE</button>
          </form>
      
    </div>
  )
}

export default NewsLetterBox














// import React from 'react'

// const NewsLetterBox = () => {
//     const onSubmitHandler = (event) => { 
//         // Send the email to the server
//         event.preventDefault();
//         console.log('Email submitted successfully');
  
//     }

//   return (
//     <div className='text-center'>
//           <p className='text-2xl fontme'>Subscribe Now and Get 20% off </p>
//           <p className='text-gray-400 mt-3'>
//               Stay updated with the latest fashion trends, promotions, and special offers.
//           </p>
//           <form onSubmit={ onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
//               <input type='email' className='w-full sm:flex-1 outline-none' placeholder='Enter your email' />
//               <button type='submit' className='bg-black text-white text-xs px-10 py-4' >SUBSCRIBE</button>
//           </form>
      
//     </div>
//   )
// }

// export default NewsLetterBox
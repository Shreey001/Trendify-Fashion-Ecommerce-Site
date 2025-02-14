import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { useState } from 'react'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const [token, setToken] = useState('')

  return (
    <div className='bg-gray-50 min-h-screen'>
      {token === ""
        ? <Login />
        :


        <>
          <Navbar />
          <hr />

          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<h1>{<Add />}</h1>} />
                <Route path='/list' element={<h1>{<List />}</h1>} />
                <Route path='/orders' element={<h1>{<Orders />}</h1>} />
              </Routes>
            </div>

          </div>

        </>

      }

    </div>
  )
}

export default App

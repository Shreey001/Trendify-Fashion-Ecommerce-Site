import axios from 'axios'
import React, {
    useState, useEffect} from 'react'
import { backendUrl, currency } from '../App'
import { toast } from'react-toastify';

const List = ({token}) => {

    const [list, setList] = useState([])
    
    const fetchList = async() => {
        
        try {
            const response = await axios(backendUrl + '/api/product/list')
            if (response.data.success) {
                setList(response.data.products);

            }
            else {
                toast.error(response.data.message)
            }
                

           
    
        } catch (error) {
            console.error(error);
            toast.error(error.message)
    
}

    }
    const removeProduct = async (id) => {
        try {

            const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList();
            } else {
                
                toast.error(response.data.message)

                }
            }
            
         catch (error) {
            console.error(error);
            toast.error(error.message)
    
            
        }
        
    }

    useEffect(() => {
        fetchList()
    }, [])

  return (
      <>
          <p className='mb-2'>All products list</p>
          <div className='flex flex-col gap-2'>
              {/* // list table title  */}
              <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border-gray-200 border bg-gray-100 text-sm'>
              <b>Image</b>
              <b>Name</b>
              <b>Category</b>
              <b>Price</b>
              <b className='text-center'>Action</b>
              </div>
              {/* // list table data  */}
              {
                  list.map((item, index) => (
                      <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border border-gray-200 text-sm ' key={index}>
                          <img className='w-12' src={item.image[0]} alt='' />
                          <b>{item.name}</b>
                          <b>{item.category}</b>
                          <b>{currency}{item.price}</b>
                          <b onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</b>
                  
                      </div>
                  ))
              }
          </div>
      </>
  )
}

export default List

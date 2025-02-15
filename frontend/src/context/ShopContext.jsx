import {createContext, useEffect, useState} from "react";
// import { products } from "../assets/assets";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";



 const ShopContext = createContext();

const ShopContextProvider = (props) => {

  
    
    const currency = 'Rs ';
    const delivery_fee = 110;

 const backendUrl = import.meta.env.VITE_BACKEND_URL;
// console.log("Backend URL:", backendUrl); 
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const[token,setToken] = useState('');
    const navigate = useNavigate();

    //add to cart function

    const addToCart = async (itemId,size) => {

if (!size) {
    toast.error("Select Product Size");
    return;
}


        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

        //add to cart api call

        if (token){
            try {
                await axios.post(backendUrl + '/api/cart/add',{itemId,size},{headers:{token}})
            } 
            catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
        }
        

    }

    //get cart count function

    const getCartCount = () => {

        let totalCount = 0;
        for(const items in cartItems) {
            for(const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                }  catch(error){

                    }

            }
        }
        return totalCount;

    }

    //update quantity function

const updateQuantity = async (itemId,size,quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;

        setCartItems(cartData);

        //update quantity api call
        if (token){
            try {
                await axios.post(backendUrl + '/api/cart/update',{itemId,size,quantity},{headers:{token}})


            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
        }
}

//get cart amount function

const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
        for (const item in cartItems[items]) {
            try {
                if (cartItems[items][item] > 0) {
                    const product = products.find(prod => prod._id === items);
                    if (product) {
                        totalAmount += product.price * cartItems[items][item];
                    }
                }
            } catch (error) {
                console.error("Error calculating total amount:", error);
            }
        }
    }
    return totalAmount;
};

//get products data function

const getProductsData = async () => {
    try {
        
        const response = await axios.get(backendUrl + "/api/product/list");
if (response.data.success) {
    setProducts(response.data.products);
} else {
    toast.error(response.data.message);
}


       
    } catch (error) {
       console.log(error);
       toast.error(error.message);
       
    }
};


//get user cart function

const getUserCart = async ( token ) => {
    try {
        const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})

        if (response.data.success){
            setCartItems(response.data.cartData);
        }
       
    } catch(error) {
        console.log(error);
        toast.error(error.message);
    }
}



    useEffect(() => {
        getProductsData();
    }, [])


    useEffect(()=>{
       
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
    },[]);
    

    const value = {
products,currency,delivery_fee,search,showSearch,setSearch,setShowSearch,cartItems,setCartItems,addToCart,getCartCount
,updateQuantity,getCartAmount,navigate,backendUrl,token,setToken,setCartItems

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
    </ShopContext.Provider>
)
}
export { ShopContextProvider, ShopContext };


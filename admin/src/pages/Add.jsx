import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';

const Add = ({token}) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      // Make API call to add product
      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}});
    
      



    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          {[setImage1, setImage2, setImage3, setImage4].map((setImage, index) => {
            const image = [image1, image2, image3, image4][index];
            return (
              <label key={index} htmlFor={`image${index + 1}`}>
                <img className="w-20" src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id={`image${index + 1}`} hidden />
              </label>
            );
          })}
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input onChange={(e) => setName(e.target.value || "")} value={name || ""} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Enter product name" required />
      </div>

      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea onChange={(e) => setDescription(e.target.value || "")} value={description || ""} className="w-full max-w-[500px] px-3 py-2" placeholder="Enter details" required />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub-category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input onChange={(e) => setPrice(e.target.value || "")} value={price || ""} className="w-full px-3 py-2 sm:w-[120px]" type="number" placeholder="25" required />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size} onClick={() => setSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))}>
              <p className={`${sizes.includes(size) ? "bg-pink-100" : "bg-slate-200"} px-3 py-2 cursor-pointer`}>{size}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input onChange={() => setBestseller((prev) => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;

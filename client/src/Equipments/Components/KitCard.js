import { useEffect, useState } from "react";
import axios from "axios";
import  {Carousel}  from "flowbite-react"

import { useDispatch } from "react-redux";
import { addToKit} from "../../Slices/EquipmentSlices";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";



export function KitCard({ product }) {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const { _id, Company, Model, Images ,Imageexist  ,Description , CPrice ,Build , Daily, Weekly ,Monthly,SPrice , Condition, Serial } = product;
  
  const [style, setStyle] = useState("bg-red-400   rounded-xl border border-1 border-cyan-100 w-56 h-80 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col ")
 const [styleagain,setagainStyle] = useState();
  const [edit, setEdit] = useState(false)

  const [productDetails, setProductDetails] = useState({_id: _id})
  const [prodImages, setProdImages] = useState([])
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleChange = (e) =>{
    let name= e.target.name;
    let value= e.target.value;
    setProductDetails({...productDetails, [name]:value})
  }
  const [update, setUpdate]= useState(false)
    const handleUpdate =() =>{
      setUpdate(!update);
    };
  const handleUploadImages = (e) =>{
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (re) => {
      prodImages.push(re.target.result)
     
    };
  }

  
  const handleSubmit=async(e)=>{
if(typeof console !== 'undefined'){
    try {
      e.preventDefault()
      const thisProd = {...productDetails, ["Images"]:prodImages}
      console.log(thisProd)
      await axios.post(`${API_URL}/kit/updateKit`, thisProd).then( setTimeout(refreshpage , 2000))

        
      dispatch(addToKit(product))    
        
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/kit");
    }
    
    }
  
function refreshpage(){
  window.location.reload()
}
    
 
  
  const handleSelling=async(e)=>{
    e.preventDefault();
    const thisProduct = {...productDetails, ["Images"]:prodImages}
    console.log(thisProduct)
    await axios.post(`${API_URL}/kit/sellKit/`, thisProduct  ).then( setTimeout(refreshpage , 1000))
   
 
  
  }
 
  const getStyle=()=>{
    if(product.Status==="Available"){
      setStyle(" rounded-l-2xl border-l-16 border-l-green-500 rounded-xl border border-1  w-56 h-80 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col ")
    }    
  }


  const getSellingStyle=()=>{
    if(product.SellStatus==="Selling"){
      setagainStyle("relative")
    
    }    
  }

 
  useEffect(()=>{

    getStyle();
    getSellingStyle();
   
  },[])
  const [deleteit, setDelete] = useState(false)
  const handleDelete = () => {
    setDelete(!deleteit);
  };
  


  const removeProductFromKit = async (e) => {
    e.preventDefault();
    
      
        await axios.delete(`${API_URL}/kit/${_id}`).then( setTimeout(refreshpage ,1000))

     
  };

 
  
  
  return (
    <>
  
  
      <div  
       className={style}  >
      
      <button 
      onClick={() => handleEdit(true)}
      >

        
    <div className="bg-gray-100 mt-2 mx-2" > <img src={Imageexist}  alt="equipment" className="  w-40 mx-auto  h-32 w-full p-3  "/> {styleagain && (<span class="material-icons relative -top-32 text-4xl text-red-600  -right-16">
sell
</span>)}</div>
    
        
         <h5 className=" font-medium text-center text- mb-2 text-3xl dark:text-white">{Company}</h5>
            
         
         
            <h3 className="mb-2 text-center font-normal tracking-tight   mt-4 dark:text-white">{Model}</h3>
            <div className="flex   p-1  bg-gray-200 rounded-lg mb-2 w-40 mx-auto items-center justify-between bg-white  py-2 text-gray-400 hover:text-gray-500">
                   <span className="font-medium mx-auto text-gray-900">{Serial}</span>
                   </div>
      
        
        </button>
        {
          edit &&(
            <>

            <div className=" w-1/4  absolute z-40 flex flex-col flex-grow  bg-white   border border-4 rounded-2xl mx-auto left-0 right-0 bottom-2 shadow-2xl  ">
           
              <div  className="flex flex-col">
              <div className="p-4 my-auto">
             <h5 className=" font-semibold  text-center mb-2 text-2xl ">{Company}</h5>
                
             
             
                <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">{Model}</h3>
              </div>
              <div className="  h-44 w-full px-12 bg-gray-500">
  <Carousel
   
  >
    <img
      src={Images[0]}
      alt=""
      
 
    />
    <img
      src={Images[1]}
      alt=""
    />
    <img
      src={Images[2]}
      alt=""
    />
    <img
      src={Images[3]}
      alt=""
    />
    <img
      src={Images[4]}
      alt=""
    />
    <img
      src={Images[5]}
      alt=""
    />
  </Carousel>
</div>
      
          
              </div>
 
            
              
              <button onClick={() => handleUpdate(true)}>
              
              
              <div className=" mb-2 flex  mx-24 rounded-xl border-2 border-black mt-2 hover:bg-yellow-300">
                 <span className="material-icons-outlined text-black ml-4 text-3xl ">
                   edit
                 </span>
                 <span className="mb-2  text-black font-medium text-base">Edit Details</span>
                 </div>
                
               </button>
              
              
              <button >
              
              <div className=" mb-2 flex  mx-24 rounded-xl border-2 border-blue-600 mt-2 hover:bg-yellow-300">
                 <span className="material-icons-outlined text-blue-600 ml-4 text-3xl ">
                 calendar_month
                 </span>
                 <span className="mb-2  text-blue-600 font-medium text-base">View Schedule</span>
                 </div>
                
               </button>
              <button >
              
              <div className=" mb-2 p-1 flex mx-24 rounded-xl  mt-2 bg-gray-300 hover:bg-yellow-300">
                 <span className="material-icons-outlined text-white ml-4 text-3xl  ">
                 visibility
                 </span>
                 <span className="mb-2  text-gray-100 font-medium text-m"> Show On Profile</span>
                 </div>
                
               </button>
              <button >
              
              <div className=" mb-2 p-1 flex mx-24 rounded-xl  mt-2 bg-gray-300 hover:bg-yellow-300">
                 <span className="material-icons-outlined text-white ml-4 text-3xl "> request_quote
               
 </span>
                 <span className="mb-2  text-gray-100 font-medium text-m"> Add to Job</span>
                 </div>
                 
               </button>
              <button >
              
              <div onClick={handleSelling} className=" mb-2 p-1 flex mx-24 rounded-xl mt-2  bg-gray-300 hover:bg-yellow-300">
                 <span className="material-icons-outlined text-white ml-4 text-3xl ">
                   sell
                 </span>
                 <span className="mb-2  text-gray-100 font-medium text-m">Sell Item</span>
                 </div>
                
               </button>
              <button  >
              
              <div className=" mb-2 p-1  flex mx-24 rounded-xl bg-gray-300 mt-2 hover:bg-yellow-300">
                 <span className="material-icons-outlined ml-4 text-white text-3xl ">
                   logout
                 </span>
                 <span className="mb-2  text-gray-100 font-medium text-m">Mark as Sold</span>
                 </div>

                 <span  className="material-icons-outlined flex-row  ml-4 text-gray-300 text-3xl " onClick={() => handleDelete(true)}>
                   delete
                 </span>
               </button>
           </div>
           {deleteit && (
             <div className="dialog-content-container"  onClick={() => handleDelete(false)}   >
             <section className="dialog-content text-xl  font-medium text-black text-center">
              
               <div className="dialog-body mx-12">
                 <p >You are about to delete this item from your kit</p>
               </div>
               <footer className="dialog-footer mx-12">
                 <p>All details and images will be deleted </p>
                 <button
                   className="mt-3"
                  
                 >
                   <div className="  px-4  rounded-xl bg-gray-400 mt-2 hover:bg-yellow-300"  onClick={(e) => removeProductFromKit(e)}>
                 <span className="material-icons-outlined  text-white text-base ">
                   delete
                 </span>
                 <span className="mb-2  text-gray-100 font-medium text-base">Delete from kit</span>
                 </div>
                 </button>
               </footer>
             </section>
           </div>
              
           )}
           
           <div   onClick={() => handleEdit(false)} className=" fixed  w-full right-0 top-0 h-screen bg-black bg-opacity-50" >
   
           </div>
           </>
          )
        }
       
       
      </div>
      
         {update &&
         <>
         <div className=" w-2/6 h-fit absolute z-50 flex flex-col bg-white border-4 rounded-2xl mx-auto left-0 right-0 bottom-2 shadow-2xl">
          <form onSubmit={handleSubmit}>
          <div className="mt-4 w-full mb-6 flex flex-col justify-around items-center">
            <p className="font-bold mb-3 text-3xl">{Company}</p>
            <p className="font-bold text-xl">{Model}</p>
          </div>
          <div className=" w-full flex flex-col justify-center items-center">
          <div className=" w-full  flex flex-col">
              <div className=" flex flex-row   mb-4">
              <span className="mb-2 mr-12 ml-12 text-base font-medium font-medium text-gray-900 dark:text-gray-300">Serial #</span>
            <input type="text"  onChange={handleChange} name="Serial" placeholder={Serial}  className="w-72 h-6  border border-gray-300 text-lime-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
              </div>
              <div className=" flex flex-row   mb-4">
              <span  className="mb-2 mr-12 ml-12 text-base font-medium font-medium text-gray-900 dark:text-gray-300">Description</span>
            <input type="text" onChange={handleChange} name="Desc"  placeholder={Description}  className="w-72 h-16 mr-12 text-left border border-gray-300 text-lime-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"required ></input>
              </div>
              </div>
          
           
            </div>
            <div className=" w-full flex">
              <div className=" flex flex-row   ">
                
              <span className="mb-2 ml-12 mr-6 text-base font-medium font-medium text-gray-900 dark:text-gray-300">Cost Price</span>
            <input type="text" onChange={handleChange} name="CP" placeholder={CPrice} className="w-24 h-6 mr-12 border border-gray-300 text-lime-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required></input>
              </div>
              <div className=" flex flex-row   mb-4">
                
                <span className="mb-2  mr-6 text-base font-medium font-medium text-gray-900 dark:text-gray-300">Build Year</span>
              <input type="text" onChange={handleChange} name="year" placeholder={Build} className="w-24 h-6  border border-gray-300 text-lime-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>
            </div>
            
            <div className="h-2/6 gap-3 mb-3 w-full flex justify-center items-center flex-wrap">
            
        <label for="photo" class="flex flex-col justify-center items-center w-1/4 h-1/4  rounded-lg border-2 border-gray-300  cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
             <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            </div>
          <input
                        id="photo"
                        className="document document w-32 h-24 border-2"
                        onChange={handleUploadImages}
                        accept="image/*"
                        type="file"
                        name="image1"
                        src={Images[0]}
                        class="hidden"
                        required></input>
    </label>

    <label for="photo" class="flex flex-col justify-center items-center w-1/4 h-1/4  rounded-lg border-2 border-gray-300  cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
             <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            </div>
            <input
                        id="photo"
                        className="document document w-32 h-24 border-2"
                        onChange={handleUploadImages}
                        accept="image/*"
                        type="file"
                        name="image2"
                        class="hidden"
                        ></input>
     </label> 
     <label for="photo" class="flex flex-col justify-center items-center w-1/4 h-1/4  rounded-lg border-2 border-gray-300  cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
             <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            </div>              
            <input
                        id="photo"
                        className=" document document w-32 h-24 border-2"
                       
                        onChange={handleUploadImages}
                        accept="image/*"
                        type="file"
                        name="image3"
                        class="hidden"
                        ></input>
       </label>

       <label for="photo" class="flex flex-col justify-center items-center w-1/4 h-1/4  rounded-lg border-2 border-gray-300  cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
             <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            </div>                 
            <input
                        id="photo"
                        className="document document w-32 h-24 border-2"
                        onChange={handleUploadImages}
                        accept="image/*"
                        type="file"
                        name="image4"
                        class="hidden"
                        ></input>
         </label>  

         <label for="photo" class="flex flex-col justify-center items-center w-1/4 h-1/4  rounded-lg border-2 border-gray-300  cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
             <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            </div>             
            <input
                        id="photo"
                        className="document w-32 h-24 border-2"
                        onChange={handleUploadImages}
                        accept="image/*"
                        type="file"
                        name="image5"
                        class="hidden"
                        ></input>
            </label>

            <label for="photo" class="flex flex-col justify-center items-center w-1/4 h-1/4  rounded-lg border-2 border-gray-300  cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
             <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            </div>            
            <input
            
                        id="photo"
                        className="w-32 h-24 border-2"
                        onChange={handleUploadImages}
                        accept="image/*"
                        type="file"
                        name="image6"
                        class="hidden"
                        ></input>
             </label>           
                        </div>
                        <div className="h-1/6 w-full flex flex-col">
            <div className=" w-full flex flex-col">
            <div className="  border-b-2 mb-4 ml-16 mr-16  flex flex-col">
              <p className="text-center text-base text-gray-400">Hire Rates</p>
            </div>
            <div className="h-1/2 w-full flex ">
            <div className=" h-full flex ">
            <span className="mb-2 ml-12 mr-4 text-base font-medium text-gray-900 dark:text-gray-300">Daily</span>
            <input type="text" onChange={handleChange} name="day" placeholder={Daily}  className="w-16 h-6 mr-4 border border-gray-300 text-lime-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required ></input>
              
            </div>
            
            <div className=" h-full flex ">
            <span className="mb-2 mr-4 text-base font-medium text-gray-900 dark:text-gray-300">Weekly</span>
            <input type="text"  onChange={handleChange} name="week" placeholder={Weekly} className="w-16 h-6 mr-4 border border-gray-300 text-lime-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required ></input>
              
            </div>
            
            <div className=" h-full flex ">
            <span className="mb-2 mr-4 text-sm text-base font-medium text-gray-900 dark:text-gray-300">Monthly</span>
            <input type="text" onChange={handleChange} name="month" placeholder={Monthly}  className=" w-16 h-6  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required ></input>
              
            </div>
            
            </div>
            <div className="  border-b-2 mb-4 ml-16 mr-16  flex flex-col">
              <p className="text-center text-base text-gray-400">Sale Details</p>
            </div>
            <div className="h-1/2 w-full flex  mb-4">
            <div className=" h-full flex ">
            <span className="mb-2 ml-12 mr-4 text-base font-medium text-gray-900 dark:text-gray-300">Price</span>
            <input type="text" onChange={handleChange}  name="price" placeholder={SPrice} className="w-16 h-6 mr-4 border border-gray-300 text-lime-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
              
            </div>
            
            <div className=" h-full flex ">
            <span  className="mb-2 mr-4 text-base font-medium text-gray-900 dark:text-gray-300">Condition</span>
            <input type="text" onChange={handleChange}  name="condition" placeholder={Condition}  className="w-44 h-6 mr-4 border border-gray-300 text-lime-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
              
            </div>
          
            
           
            
            </div>
  
           
            
            </div>
          </div>
          <div className=" text-xl text-center font-bold">
                        <button type="submit" classname="cursor-pointer hover:text-gray-500" >Submit</button>
                        </div>
          </form>
         
          </div>
           <div   onClick={() => handleUpdate(false)} className=" fixed  w-full right-0 top-0 h-screen bg-black bg-opacity-50" >
   
           </div>
           </>} 
          
     
   
  </>
 
  );
}
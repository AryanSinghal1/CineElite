

export function CompareBody({product}) {
  
    const {  typeOfBrand, image, name,description,details,points} = product;

    return(
        
  
       <div>
            <div className="   text-gray-700 bg-gray-100 border border-2 body-font  border-0 rounded-2xl overflow-hidden ">
              <div className="container ">
                <div className="w-full  flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className="lg:w-72 h-45 my-auto  bg-white bg-cover rounded border border-gray-20"
                    src={image}
                  />
                  <div className=" w-full ">
                    <h2 className="text-md title-font text-gray-500 tracking-widest">
                      {typeOfBrand}
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {name}
                    </h1>
  
                    <p className="leading-relaxed text-2xl">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
        </div>
            </div>
       
         
    )
}
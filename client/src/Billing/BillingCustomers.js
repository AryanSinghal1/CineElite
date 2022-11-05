import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CineLogo from '../Logo/logo.png'
function BillingCustomers() {
  const [add, setAdd] = useState(false);
  const [customer, setCustomer] = useState({});
  const [customers, setCustomers] = useState([]);
  const getCustomers = async()=>{
    await axios.get("http://localhost:8000/customers/get").then(e=>setCustomers(e.data)).catch(e=>console.log(e));
  }
  useEffect(()=>{
    getCustomers();
  },[])
const handleValues=(e)=>{
  setCustomer({...customer, [e.target.name]:e.target.value})
}  
const handleSubmit=async(e)=>{
  e.preventDefault();
  await axios.post('http://localhost:8000/customers', customer);
}
  return (
    <div className='flex-col h-[200vh] w-full relative'>
      {add&&<div className='h-screen w-full bg-black bg-opacity-20 absolute z-10 flex justify-center items-center'>
      <div className='h-2/3 w-2/5 flex bg-white justify-center items-center rounded-3xl'>
      <div className='h-[85%] w-[85%] flex flex-col justify-between items-center'>
      <div className='h-[10%] w-full flex items-center justify-between'>
        <p className='font-bold text-2xl'>Add Customer</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={(e)=>{setAdd(false)}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

      </div>
      <div className='h-[80%] w-full flex justify-center items-center'>
        <form className='w-full h-full flex flex-col' onChange={handleValues} onSubmit={handleSubmit}>
          <div className='h-5/6 w-full flex flex-wrap justify-between items-center'>
            <div className='h-[30%] w-[45%] flex flex-col justify-around items-start'>
              <label>Customer Name</label>
              <input type="text" name='custName' className='border border-slate-400 py-0.5 w-full rounded-lg'></input>
            </div>
            <div className='h-[30%] w-[45%] flex flex-col justify-around items-start'>
              <label>Company</label>
              <input type="text" name='company' className='border border-slate-400 py-0.5 w-full rounded-lg'></input>
            </div>
            <div className='h-[30%] w-[45%] flex flex-col justify-around items-start'>
              <label>Phone Number</label>
              <input type="Number" name='Phone' className='border border-slate-400 py-0.5 w-full rounded-lg'></input>
            </div>
            <div className='h-[30%] w-[45%] flex flex-col justify-around items-start'>
              <label>Email</label>
              <input type="text" name='email' className='border border-slate-400 py-0.5 w-full rounded-lg'></input>
            </div>
            <div className='h-[30%] w-[45%] flex flex-col justify-around items-start'>
              <label>Country</label>
              <input type="text" name='country' className='border border-slate-400 py-0.5 w-full rounded-lg'></input>
            </div>
          </div>
          <div className='h-1/6 w-full flex justify-center items-center'>
            <button className='px-5 py-1 border rounded-lg bg-yellow-400'>Add</button>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>}
    <div className='flex bg-billingBlue flex justify-center items-center h-[5%] w-full'>
    <div className='flex items-center h-[80%] w-[95%]'>
    <div className='flex items-center h-full w-1/5'>
      <h1 className='text-white text-2xl font-bold'>Billing</h1>
    </div>
    <div className='flex h-1/2 items-center w-3/5'>
    <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
      <p>Overview</p>
    </div>
    <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
      <p>Documents</p>
    </div>
    <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
      <p>Customers</p>
    </div>
    <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
      <p>Suppliers</p>
    </div>
    <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
      <p>Config</p>
    </div>
    <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
      <p>History</p>
    </div>
    </div>
    <div className='flex items-center justify-end h-full w-1/5'>
      <img className='w-12 h-12' src={CineLogo}></img>
    </div>
    </div>
    </div>
    <div className='flex h-[95%] w-full bg-background justify-center items-center'>
    <div className='flex flex-col h-[95%] w-[95%] '>
        <div className='w-full h-1/6 flex flex-col items-center justify-center'>
            <div className='h-1/3 w-full'>
                <h3 className='font-bold text-3xl'>Customers</h3>
            </div>
            <div className='h-2/3 w-full flex flex-col items-center justify-center'>
            <div className='h-1/3 w-full flex justify-between items-center'>
            <div className='h-full w-1/2'>
                
<form className="flex items-center h-full w-3/5">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full h-full">
        <div className="flex absolute h-full inset-y-0 left-0 items-center pl-3 justify-center pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" className="h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  rounded-2xl focus:border-blue-500 block w-full pl-10 p-2.5 z-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required=""/>
    </div>
</form>
            </div>
            <div className='h-full w-[26%] flex justify-between items-center'>
            <button className="bg-transparent hover:bg-cineBlue text-cineBlue hover:text-white py-2 px-4 border border-cineBlue hover:border-transparent rounded-2xl" onClick={()=>{setAdd(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-flex" type="button" data-modal-toggle="defaultModal">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>
  Add Customer
</button>
<button className=" bg-cineBlue text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-flex">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

  Export CSV
</button>
            </div>
            </div>
            <div className='h-1/2 w-full flex justify-end items-center'>

            <button className="bg-transparent hover:bg-blue-500 text-cineBlue font-semibold hover:text-white hover:border-transparent rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-flex">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>

  Import CSV
</button>
            </div>
            </div>
        </div>
        <div className='w-full h-5/6 bg-white rounded-lg flex justify-center items-center'>
    <div className='flex flex-col h-[95%] w-[95%] justify-between items-center'>
    <div className='flex flex-col h-[90%] w-full'>
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Customer Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Company
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Phone Number
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Country
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-slate-400">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((e)=>{return(
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{e.Name}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e.Company}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e.Phone}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e.email}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e.Country}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e.Status=="Active"?"Active":"Inactive"}
              </td>
            </tr>
              )})}
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Name</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Company
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Phone
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Email
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Country
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Status
              </td>
            </tr>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Name</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Company
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Phone
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Email
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Country
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Status
              </td>
            </tr>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Name</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Company
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Phone
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Email
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Country
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Status
              </td>
            </tr>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Name</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Company
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Phone
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Email
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Country
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Status
              </td>
            </tr>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Name</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Company
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Phone
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Email
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Country
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Status
              </td>
            </tr>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Name</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Company
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Phone
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Email
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Country
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Status
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className='flex justify-between items-center h-[5%] w-full'>
<div className='w-2/6 h-full flex items-center'>
    <p className='text-slate-600'>Showing data 1 to 8 of 256k entries</p>
</div>
<div className='w-2/6 h-full flex justify-center items-center'>
    
  <ul className="w-full h-full flex justify-between items-center items-center">
    <li className='h-8 w-8 bg-background flex justify-center items-center rounded-md'>
      <a href="#" className="block ml-0 leading-tight text-gray-500 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
    <li className='h-8 w-8 bg-background flex justify-center items-center rounded-md bg-cineBlue text-white'>
      <a href="#" className="leading-tight hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li className='h-8 w-8 bg-background flex justify-center items-center rounded-md'>
      <a href="#" className=" leading-tight text-gray-500 bg-background hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li className='h-8 w-8 bg-background flex justify-center items-center rounded-md'>
      <a href="#" aria-current="page" className="z-10 leading-tight hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li className='h-8 w-8 bg-background flex justify-center items-center rounded-md'>
      <a href="#" className=" leading-tight text-gray-500 bg-background hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li className='h-8 w-8 bg-background flex justify-center items-center rounded-md'>
      <a href="#" className=" leading-tight text-gray-500 bg-background hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li className='h-8 w-8 bg-background flex justify-center items-center rounded-md'>
      <a href="#" className="block leading-tight text-gray-500 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
  </ul>

</div>
    </div>
    </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default BillingCustomers
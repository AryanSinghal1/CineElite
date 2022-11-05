import React, { useState } from 'react'
import CineLogo from '../Logo/logo.png';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import { Data } from '../Data';
function Billing() {
  const [chartData, setChartData] = useState({
    labels: Data.map(e=>e.month),
    datasets:[{
      label: "Expenses",
      data: Data.map(e=>e.plvalue),
      backgroundColor: "#E3FFF3",
      borderWidth: 1,
      width:1
    }]
  })
  const [chartOptions, setChartOptions] = useState({
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 14
                }
            }
        }
    }
})
  return (
    <div className='flex-col h-[200vh] w-full'>
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
    </div>
    <div className='flex items-center justify-end h-full w-1/5'>
      <img className='w-12 h-12' src={CineLogo}></img>
    </div>
    </div>
    </div>
    <div className='flex h-[95%] w-full bg-background justify-center items-center'>
    <div className='flex-col h-[95%] w-[95%]'>
    <div className='flex items-center h-[5%] w-full'>
        <h1 className='text-3xl font-bold'>Overview</h1>
    </div>
    <div className='flex-col justify-center items-center h-[95%] w-full'>
    <div className='flex items-center h-[15%] w-full'>
    <div className='flex-col items-center h-full w-1/5'>
    <div className='h-2/5 flex items-center'>
    <p className='text-xl font-bold'>View</p>
    </div>
    <div className='h-2/5 w-4/5 rounded-xl flex justify-center items-center bg-white'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth="1.5" stroke="currentColor" className="w-1/5 h-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>

    <select className='font-bold outline-none h-full w-3/5 rounded-lg'>
      <option>This Week</option>
      <option>This Month</option>
      <option>This Year</option>
    </select>
    </div>
    </div>
    <div className='flex justify-center items-center h-full w-4/5'>
    <div className='flex-col items-center h-full w-[95%]'>
      <div className='h-2/5 w-full flex justify-between items-center'>
    <p className='text-xl'>Services</p>
    <div className='w-[13%] h-full flex justify-between items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
<span>Create New</span></div>
      </div>
    <select className='px-6 outline-none font-bold h-2/5 w-[12%] rounded-xl'>
      <option>All</option>
      <option>This Month</option>
      <option>This Year</option>
    </select>
    </div>
    </div>
    </div>
    <div className='flex items-center h-[80%] w-full '>
    <div className='flex items-center h-full w-full'>
    <div className='flex-col items-center h-full w-1/5'>
        <div className='flex justify-center items-start w-[90%] h-1/4'>
        <div className='flex-col rounded-xl w-full rounded-xl bg-white h-[90%]'>
        <div className='w-full h-2/5 flex items-center'>
          <p className='text-xl font-bold px-4'>Year To Date</p>
        </div>
        <div className=' w-full h-3/5 flex justify-center items-center'>
          <p className='text-xl font-bold'>&euro; 1,000.62</p>
        </div>
        </div>
        </div>
        
        <div className='flex justify-center items-start w-[90%] h-1/4'>
        <div className='flex-col rounded-xl w-full rounded-xl bg-white h-[90%]'>
        <div className='w-full h-2/5 flex items-center'>
          <p className='text-xl font-bold px-4'>Receivable</p>
        </div>
        <div className=' w-full h-3/5 flex justify-center items-center'>
          <p className='text-xl font-bold'>&euro; 1,000.62</p>
        </div>
        </div>
        </div>
        
        <div className='flex justify-center items-start w-[90%] h-1/4'>
        <div className='flex-col rounded-xl w-full rounded-xl bg-white h-[90%]'>
        <div className='w-full h-2/5 flex items-center'>
          <p className='text-xl font-bold px-4'>Payable</p>
        </div>
        <div className=' w-full h-3/5 flex justify-center items-center'>
          <p className='text-xl font-bold'>&euro; 1,000.62</p>
        </div>
        </div>
        </div>
        
        <div className='flex justify-center items-start w-[90%] h-1/4'>
        <div className='flex-col rounded-xl w-full rounded-xl bg-white h-[90%]'>
        <div className='w-full h-2/5 flex items-center'>
          <p className='text-xl font-bold px-4'>Scheduled</p>
        </div>
        <div className=' w-full h-3/5 flex justify-center items-center'>
          <p className='text-xl font-bold'>&euro; 1,000.62</p>
        </div>
        </div>
        </div>
        
    </div>
    <div className='flex-col items-center h-full w-4/5'>
    <div className='flex h-4/6 w-full justify-center'>
    <div className='flex items-center justify-center h-[95%] w-[95%] rounded-xl bg-white'>
    <div className='flex-col items-center h-[90%] w-[95%]'>
    <div className='flex items-center h-[10%] w-full '>
        <h3 className='text-2xl font-bold'>Profit and Loss</h3>
    </div>
    <div className='flex items-center justify-center h-[90%] w-full'>
     <Bar data={chartData} style={{ height:"85%", width:"80%"}}
      options={chartOptions}/>   
    </div>
    </div>
    </div>
    </div>
    <div className='flex items-start h-2/6 w-full justify-center'>
    
    <div className='flex h-[95%] w-[95%] rounded-xl bg-white'>
        <div className='w-full h-[20%]'>
          <div className='w-[10%] h-full flex items-center justify-between mx-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg><span className='text-xl font-bold'>Alarms</span></div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Billing
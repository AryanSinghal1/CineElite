import React from 'react'
import CineLogo from '../Logo/logo.png'
function DayScheduling() {
    const year = 2022;
    const currentMonth = "May";
    const months=[{
        id:0,
        name: "January",
        months: 31
    },
    {
        id:1,
        name: "February",
        months: 28
    },
    {
        id:2,
        name: "March",
        months: 31
    },
    {
        id:3,
        name: "April",
        months: 30
    },
    {
        id:4,
        name: "May",
        months: 31
    },
    {
        id:5,
        name: "June",
        months: 30
    },
    {
        id:6,
        name: "July",
        months: 31
    },
    {
        id:7,
        name: "August",
        months: 31
    },
    {
        id:8,
        name: "September",
        months: 30
    },
    {
        id:9,
        name: "October",
        months: 31
    },
    {
        id:10,
        name: "November",
        months: 30
    },
    {
        id:11,
        name: "December",
        months: 31
    },
]
const AllMonths = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentMonthArr=months.filter(x=>x.name==currentMonth);
console.log(currentMonthArr);
const daysArray = [];
for(let i=1;i<=currentMonthArr[0].months;i++){
    let date = new Date(year, currentMonthArr[0].id, i);
    let currentDay=AllMonths[date.getDay()];
    let monthDates = {
        date:i,
        day:currentDay,
        events:[{
            appointment:"Appointment 1",
            text:"Lorem Ipsum"
        }]
    }
    daysArray.push(monthDates);
}
  return (
           <div className='flex flex-col justify-between items-center h-[150vh] w-full'>
            <div className='w-full h-[7%] bg-cineBlue flex justify-center items-center'>
            <div className='flex items-center justify-between h-[80%] w-[95%]'>
          <div className='flex items-center h-full w-1/5'>
            <h1 className='text-white text-2xl font-bold'>Scheduling</h1>
          </div>
          <div className='flex h-1/2 items-center w-3/6'>
          <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
            <p>Year</p>
          </div>
          <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
            <p>Monthly</p>
          </div>
          <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
            <p>Weekly</p>
          </div>
          <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
            <p>Activities</p>
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
            <div className='w-full h-[93%] flex justify-center items-center bg-background'>
              <div className='w-[95%] h-[90%] '>
                <div className='w-full h-[15%] flex justify-between items-center'>
                  <div className='h-full w-1/6 flex items-center'><p className='font-bold text-2xl'>Calendar : Month</p></div>
                </div>
                <div className='h-[85%] w-full flex flex-col justify-between items-start rounded-xl'>
                  <h2 className='font-bold text-3xl'>{currentMonthArr[0].name}</h2>
              <div className="w-full h-[92%] flex flex-col justify-between items-center ">
                {daysArray.map((e)=>{return <div className='border-b-2 border-slate-300 w-full flex items-center'>
                    <div className='h-full w-[8%] flex justify-center items-start'>
                        <p className='font-bold text-2xl mt-4'>{e.date}</p>
                    </div>
                    <div className='h-full w-[10%] flex justify-center items-start'>
                        <p className='text-2xl mt-4'>{e.day}</p>
                    </div>
                    <div className='h-full w-[82%] flex flex-col justify-center items-center my-4'>
                        {e.events.map((event)=>{
                            return(
                            <div className='h-[50px] w-full bg-red-500 rounded-xl flex justify-center items-center border-b-2 border-black'>
                            <div className='h-full w-[95%] flex justify-between items-center'>
                                <div className='w-1/3 h-full flex items-center'>
                                <div className='h-full w-[10px] bg-red-700'></div>
                                <p className='text-2xl mx-2'>{event.appointment}</p>
                                </div>
                                <div className='w-1/3 h-full flex justify-end items-center'>
                                    <p className='text-2xl'>{event.text}</p>
                                </div>
                            </div>
                            </div>
                            )
                        })
                        }
                    </div>
                </div>})}
            </div>
              </div>
              </div>
              </div>
          </div>
      
  )
}

export default DayScheduling
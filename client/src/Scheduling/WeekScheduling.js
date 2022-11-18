import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker';
// import Calendar from 'rc-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Scheduling.css'
import MonthCalendar from './MonthCalendar';
import CineLogo from '../Logo/logo.png'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import SideCalendar from './SideCalendar';

const localizer = momentLocalizer(moment)

function WeekScheduling() {
  const [currentDay, setCurrentDay] = useState(new Date());
    const [show, setShow] = useState(false);
    const [value1, onChange1] = useState(new Date());
    const [value2, onChange2] = useState(new Date());
    const [title, setTitle] = useState();
    const [create, setCreate] = useState(false);
    const [data, setData] = useState([]);
    const [updateUser, setUpdateUser] = useState({});
    const [newvalue1, newonChange1] = useState();
    const [newvalue2, newonChange2] = useState();
    const [newtitle, setNewTitle] = useState();
    const [page, setPage] = useState(0);
    const getData = async() =>{
      const thisCalendar = await axios.get("http://127.0.0.1:8000/api/getCalendar");
      if(thisCalendar.data){
        setData(thisCalendar.data);
      }
    }
    useEffect(()=>{
      getData();
    },[])
    const handleDelete = async(e)=>{
      console.log(e._id);
      await axios.delete(`http://127.0.0.1:8000/api/getCalendar/${e._id}`);
    }
    const handleUpdateCalendar = async(e)=>{
      e.preventDefault();
      let updateCalendar = {
        id: updateUser._id,
        title: newtitle,
        value1Date:newvalue1.toLocaleDateString(),value1Time:newvalue1.toLocaleTimeString(), value2Date:newvalue2.toLocaleDateString(),value2Time:newvalue2.toLocaleTimeString(),
        start: newvalue1.getTime(), end: newvalue2.getTime()
      }
      await axios.post('http://127.0.0.1:8000/api/getCalendar', updateCalendar);
    }
    const handleUpdate = async(e)=>{
      setUpdateUser(e);
      setShow(true);
      let startDate = new Date(e.book);
      let endDate = new Date(e.bookend);
      console.log(startDate, endDate)
      newonChange1(startDate);
      newonChange2(endDate);
      setNewTitle(e.title);
    }
    console.log(updateUser);
    const handleSubmit = async(e) =>{
        e.preventDefault();
        let thisobject = {
            value1Date:value1.toLocaleDateString(),value1Time:value1.toLocaleTimeString(), value2Date:value2.toLocaleDateString(),value2Time:value2.toLocaleTimeString(), title,
            start: value1.getTime(), end: value2.getTime()
        }
        if(thisobject.start<thisobject.end){
          if(data.length!=0){for(var i=0; i< data.length; i++){
            if(data[i].book==value1.getTime() && data[i].bookend==value2.getTime()){
              window.alert("Already scheduled");
            }else{
              console.log("Yess1");
              await axios.post("http://127.0.0.1:8000/api/schedule", thisobject);
              break;   
            }}}
            else{console.log("Yess");
    await axios.post("http://127.0.0.1:8000/api/schedule", thisobject);
    }
    }else{
          window.alert("Booking Time Invalid")
        }
    }
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekdaysSide = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const arrayTime = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  const changeCurrentDay = (e) =>{
    console.log(e.date.getMonth());
    setCurrentDay(e.date)
  }
  const InfoMonths=[{
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
const currentMonthArr=InfoMonths.filter(x=>x.name==months[currentDay.getMonth()]);
  const increment = (e) =>{
    let date = new Date(currentDay.getFullYear(), currentDay.getMonth()+1, 1);
    console.log(date);
    setCurrentDay(date);
  }
  const decrement = (e) =>{
    let date = new Date(currentDay.getFullYear(), currentDay.getMonth()-1, 1);
    console.log(date);
    setCurrentDay(date);
  }
  const daysArray = [];
  const next = () =>{
    if(page+7<currentMonthArr[0].months){
      setPage(page+7);
    }
  }
  const prev = () =>{
    if(page-7>=0){
    setPage(page-7);
    }
  }
for(let i=1;i<=currentMonthArr[0].months;i++){
    let date = new Date(currentDay.getFullYear(), currentDay.getMonth(), i);
    let currentDayToday=weekdaysSide[date.getDay()];
    let monthDates = {
        date:i,
        day:currentDayToday,
        events:[{
            appointment:"Appointment 1",
            text:"Lorem Ipsum"
        }]
    }
    daysArray.push(monthDates);
}
  return (
    <div className='flex flex-col justify-between items-center h-[200vh] w-full relative'>
      {create&&<div className='absolute top-0 h-[100vh] w-full flex justify-center items-center bg-slate-500/50'>
        <div className='h-2/3 rounded-3xl w-1/4 bg-white flex justify-center items-center'>
          <div className='h-[90%] w-[90%] flex flex-col  justify-between items-center'>
            <div className='h-[10%] w-full flex justify-between items-center'>
              <p className='font-bold text-xl'>Add Activity</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={()=>{setCreate(false)}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

            </div>
            <form className='h-[90%] w-full'>
              <div className='h-[80%] w-full flex flex-col justify-between items-center'>
                <div className='h-[30%] w-full flex flex-col justify-center items-start'>
              <p className=' text-lg'>Name</p>
              <input className='w-full h-1/2' type="text" placeholder="Enter Name"></input>
                </div>
                <div className='h-[30%] w-full flex flex-col justify-center items-start'>
              <p className='text-lg'>Date</p>
              <div className='w-full h-[80%] flex justify-between items-center'>
                <div className='w-[48%] h-full relative'>
                
                <div className="flex absolute left-0 items-center pl-3
                py-3 pointer-events-none">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
              <input
                            datepicker="true"
                            name="start"
                            type="text"
                            className="sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark: dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="From"
                            onFocus={(e) => (e.target.type = "date")}
                          />
                </div>
                <div className='w-[48%] h-full relative'>
                
                <div className="flex absolute py-3 left-0 items-center pl-3 pointer-events-none">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
              <input
                            datepicker="true"
                            name="start"
                            type="text"
                            className="sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark: dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="To"
                            onFocus={(e) => (e.target.type = "date")}
                          />
                </div>
              </div>
                </div>
                <div className='h-[30%] w-full flex flex-col justify-center items-start'>
              <p className=' text-lg'>Note</p>
              <input className='w-full h-1/2' type="text" placeholder="Enter Notes"></input>
                </div>
              </div>
              <div className='h-[20%] w-full flex items-center'>
                <button className='px-6 py-2 bg-yellow-300 rounded-lg font-bold'>Add</button>
              </div>
            </form>
          </div>
        </div>
        </div>}
      <div id="main" className='w-full h-[5%] bg-cineBlue flex justify-center items-center'>
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
      <div className='w-full h-[95%] flex justify-center items-center bg-background'>
        <div className='w-[95%] h-[98%] '>
          <div className='w-full h-[15%] flex justify-between items-center'>
            <div className='h-full w-1/6 flex items-center'><p className='font-bold text-2xl'>Weekly</p></div>
          </div>
          <div className='h-[85%] w-full flex justify-center items-center'>
          <div className='h-full w-full flex justify-between items-between '>
            <div className='h-full w-1/4 flex justify-between items-center'>
              <div className='h-full w-[90%]'>
            <div className='h-[33%] w-full flex flex-col justify-between items-center'>
              <div className='h-[10%] w-full flex justify-between items-center'>
                <p className='font-bold text-2xl'>{months[currentDay.getMonth()]}</p>
                <div className='h-full w-[20%] flex justify-between items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5" onClick={()=>{decrement()}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5" onClick={()=>{increment()}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

                </div>
              </div>
              <div className='h-[88%] w-full bg-white flex justify-center items-center'>
                <div className='h-[85%] w-[85%]'>
                  <div className='h-1/6 w-full flex justify-between items-center'>
                {weekdaysSide.map((weekday) => {
            return (
              <div className="w-[14%] h-full flex justify-center items-center">
                <p className='text-sm'>{weekday}</p>
              </div>
            );
          })}
                  </div>
                  <div className='h-5/6 w-full flex'>
                  <SideCalendar day={currentDay} changeCurrentDay={changeCurrentDay} />
                  </div>
                </div>
              </div>
              </div>
            <div className='h-[10%] w-full flex justify-start items-center'>
              <button className='bg-yellow-300 py-2 px-10 rounded-md font-bold text-lg flex' onClick={()=>{setCreate(true)}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg><p className='mx-2'><a href='#main'>Add</a></p></button>
            </div>
            <div className='h-[35%] w-full bg-white rounded-xl border border-slate-500'>
              <div className='h-full w-full border'>
                <div className='h-[15%] flex justify-center items-center w-full bg-cineBlue rounded-t-xl'>
                  <p className='font-normal text-xl text-white'>Select</p>
                </div>
                <div className='h-[85%] flex justify-center items-center w-full'>
                  <div className='h-[90%] w-[80%] flex flex-col justify-between items-center'>
                    <div className='h-[16%] w-full border border-black rounded-md flex items-center justify-center'>
                      <p className='font-bold text-xl'>Person 1</p>
                    </div>
                    <div className='h-[16%] w-full border border-black rounded-md flex items-center justify-center'>
                      <p className='font-bold text-xl'>Person 1</p>
                    </div>
                    <div className='h-[16%] w-full border border-black rounded-md flex items-center justify-center'>
                      <p className='font-bold text-xl'>Person 1</p>
                    </div>
                    <div className='h-[16%] w-full border border-black rounded-md flex items-center justify-center'>
                      <p className='font-bold text-xl'>Person 1</p>
                    </div>
                    <div className='h-[16%] w-full border border-black rounded-md flex items-center justify-center'>
                      <p className='font-bold text-xl'>Person 1</p>
                    </div>
                    
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute bottom-0 left-0" onClick={()=>{prev()}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute bottom-0 left-10" onClick={()=>{next()}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
        <div className="h-full w-3/4 flex items-center bg-white">
                <div className='h-full w-[12.5%] border flex flex-col justify-center items-center border-slate-300'>
            <div className='h-[5%] w-full bg-background flex flex-col justify-between items-center'>
                <div className='h-1/2 w-full'></div>
                <div className='h-1/2 w-full'></div>
            </div>
            <div className='h-[95%] w-full flex flex-col justify-between items-center'>
                
            {arrayTime.map((e)=>{
                        return <div className='h-[4.16%] w-full flex flex-col justify-center items-center'>
                            <div className='w-full h-1/2 flex items-center justify-end border'>
                            <p>{e}:00</p>
                            </div>
                            <div className='w-full h-1/2 flex items-center justify-end border'>
                            </div>
                            </div>
                    })}
            </div>
                </div>
                {daysArray.slice(page,page+7).map((e)=>{return (<div className='h-full w-[12.5%] border flex flex-col justify-center items-center border-slate-300'>
            <div className='h-[5%] w-full bg-background flex flex-col justify-between items-center'>
                <div className='h-1/2 w-full font-bold'>{e.date}</div>
                <div className='h-1/2 w-full'>{e.day}</div>
            </div>
            <div className='h-[95%] w-full flex flex-col justify-between items-center'>
            {arrayTime.map((e)=>{
                        return <div className='h-[4.16%] w-full flex flex-col justify-center items-center'>
                            <div className='w-full h-1/2 flex items-center justify-end border'>
                            </div>
                            <div className='w-full h-1/2 flex items-center justify-end border'>
                            </div>
                            </div>
                    })}
            
            </div>
                </div>)})}
      </div>
      </div>
        </div>
        </div>
        </div>
    </div>

  )
}

export default WeekScheduling
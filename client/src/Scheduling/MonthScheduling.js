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

const localizer = momentLocalizer(moment)

function MonthScheduling() {
    const [show, setShow] = useState(false);
    const [value1, onChange1] = useState(new Date());
    const [value2, onChange2] = useState(new Date());
    const [title, setTitle] = useState();
    const [data, setData] = useState([]);
    const [updateUser, setUpdateUser] = useState({});
    const [newvalue1, newonChange1] = useState();
    const [newvalue2, newonChange2] = useState();
    const [newtitle, setNewTitle] = useState();
    const [currentDay, setCurrentDay] = useState(new Date());
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
  const cday = new Date();
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
  const changeCurrentDay = (e) =>{
    setCurrentDay(e.date)
  }
  return (
    <div className='flex flex-col justify-between items-center h-[200vh] w-full'>
      <div className='w-full h-[5%] bg-cineBlue flex justify-center items-center'>
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
            <div className='h-full w-1/6 flex items-center'><p className='font-bold text-2xl'>Calendar : Month</p></div>
          </div>
          <div className='h-[85%] w-full flex justify-center items-center bg-white rounded-xl'>
          <div className='h-[95%] w-[95%] flex flex-col justify-between items-start'>
            <h2 className='font-bold text-3xl'>May</h2>
        <div className="w-full h-[95%] flex flex-col justify-center items-center">
          <div className='w-full h-4/5 flex justify-center items-center'>
          <div className='w-[98%] h-[95%] flex flex-col justify-between items-center'>
        <div className="w-full h-[5%] flex justify-around">
          {weekdays.map((weekday) => {
            return (
              <div className="w-[14%] h-full flex justify-center items-center">
                <p className='font-lg'>{weekday}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full h-[95%]">
          <MonthCalendar day={currentDay} changeCurrentDay={changeCurrentDay} />
        </div>
        </div>
        </div>
        <div className='w-full h-1/5 flex justify-center items-center'>
          <div className='h-[90%] w-[98%] flex justify-between items-center'>
          <div className='h-full w-[49.5%] bg-background rounded-lg flex justify-center items-center'>
            <div className='h-[90%] w-[95%]'>
              <p className='font-bold text-2xl'>Lorem Ipsum</p>
            </div>
          </div>
          <div className='h-full w-[49.5%] bg-background rounded-lg flex justify-center items-center'>
            <div className='h-[90%] w-[95%]'>
              <p className='font-bold text-2xl'>Lorem Ipsum</p>
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

export default MonthScheduling
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DateTimePicker from 'react-datetime-picker';
import Calendar from 'rc-year-calendar';
import './Scheduling.css'
import CineLogo from '../Logo/logo.png'
import { Link } from 'react-router-dom';
function Scheduling() {
    const [show, setShow] = useState(false);
    const [value1, onChange1] = useState(new Date());
    const [value2, onChange2] = useState(new Date());
    const [title, setTitle] = useState();
    const [data, setData] = useState([]);
    const [updateUser, setUpdateUser] = useState({});
    const [newvalue1, newonChange1] = useState();
    const [newvalue2, newonChange2] = useState();
    const [newtitle, setNewTitle] = useState();
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
    
  return (
    <div className='flex flex-col justify-between items-center h-[150vh] w-full'>
      <div className='w-full h-[7%] bg-cineBlue flex justify-center items-center'>
      <div className='flex items-center justify-between h-[80%] w-[95%]'>
    <div className='flex items-center h-full w-1/5'>
      <h1 className='text-white text-2xl font-bold'>Scheduling</h1>
    </div>
    <div className='flex h-1/2 items-center w-3/6'>
    <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
      
    <Link to="/scheduling"><p>Yearly</p></Link>
    </div>
    <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
      
      <Link to="/dscheduling"><p>Monthly</p></Link>
    </div>
    <div className='flex h-full w-1/5 justify-center items-center text-white text-md'>
      
    <Link to="/wscheduling"><p>Weekly</p></Link>
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
        <div className='w-[95%] h-[90%]'>
          <div className='w-full h-[15%] flex justify-between items-center'>
            <div className='h-full w-1/6 flex items-center'><p className='font-bold text-2xl'>Calendar : 2022</p></div>
            <div className='h-full w-1/6 rounded-xl flex justify-center items-center'>
            <div className='h-2/3 w-full rounded-xl flex justify-center items-center'>
              <select className='border-none w-full h-2/3 rounded-xl'>
                <option>Sort By:</option>
              </select>
            </div>
            </div>
          </div>
          <div className='h-[85%] w-full flex justify-center items-center'>
        {/* <form onSubmit={handleSubmit}>
        <input type="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder='Input Title'></input>
        <label>Start Date and Time</label>
      <DateTimePicker onChange={onChange1} value={value1} />
        <label>End Date and Time</label>
      <DateTimePicker onChange={onChange2} value={value2} />
      <input type="submit" value="Submit"></input>
      </form> */}
      {/* {data.map((e)=>{
        return (<>
          <p>{e.title}</p>
          <p>{e.date1}</p>
          <p>{e.time1}</p>
          <p>{e.date2}</p>
          <p>{e.time2}</p>
          <button onClick={()=>handleDelete(e)}>Delete</button>
          <button onClick={()=>handleUpdate(e)}>Update</button>
          </>
        )
      })} */}
      {/* { show &&
        <form onSubmit={handleUpdateCalendar}>
        <input type="title" onChange={(e)=>{setNewTitle(e.target.value)}} value={newtitle} placeholder='Input Title'></input>
        <label>Start Date and Time</label>
      <DateTimePicker onChange={newonChange1} value={newvalue1} />
        <label>End Date and Time</label>
      <DateTimePicker onChange={newonChange2} value={newvalue2} />
      <input type="submit" value="Submit"></input>
      </form>
        } */}
        <Calendar displayHeader={false}></Calendar>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Scheduling
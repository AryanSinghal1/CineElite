import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DateTimePicker from 'react-datetime-picker';

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
    <div>
        <form onSubmit={handleSubmit}>
        <input type="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder='Input Title'></input>
        <label>Start Date and Time</label>
      <DateTimePicker onChange={onChange1} value={value1} />
        <label>End Date and Time</label>
      <DateTimePicker onChange={onChange2} value={value2} />
      <input type="submit" value="Submit"></input>
      </form>
      {data.map((e)=>{
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
      })}
      { show &&
        <form onSubmit={handleUpdateCalendar}>
        <input type="title" onChange={(e)=>{setNewTitle(e.target.value)}} value={newtitle} placeholder='Input Title'></input>
        <label>Start Date and Time</label>
      <DateTimePicker onChange={newonChange1} value={newvalue1} />
        <label>End Date and Time</label>
      <DateTimePicker onChange={newonChange2} value={newvalue2} />
      <input type="submit" value="Submit"></input>
      </form>
        }
    </div>
  )
}

export default Scheduling
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DateTimePicker from 'react-datetime-picker';

function Scheduling() {
    const [value1, onChange1] = useState(new Date());
    const [value2, onChange2] = useState(new Date());
    const [title, setTitle] = useState();
    const [data, setData] = useState([]);
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
    const handleSubmit = async(e) =>{
        e.preventDefault();
        let thisobject = {
            value1Date:value1.toLocaleDateString(),value1Time:value1.toLocaleTimeString(), value2Date:value2.toLocaleDateString(),value2Time:value2.toLocaleTimeString(), title
        }
      data.map(async(e)=>{
      if(e.date1==value1.toLocaleDateString()&&e.time1==value1.toLocaleTimeString()){
        window.alert("Already scheduled");
      }else{
        await axios.post("http://127.0.0.1:8000/api/schedule", thisobject);
      }
    })
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
          <button onClick={()=>handleDelete(e)}>Update</button>
          </>
        )
      })}
    </div>
  )
}

export default Scheduling
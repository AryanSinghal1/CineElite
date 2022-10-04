import React, { useState } from 'react'
import Modal from 'react-modal'
function CalendarModal() {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <Modal>
        <form onSubmit={handleSubmit}>
            <input placeholder='title' value = {title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <input type="date" placeholder='start' value = {title} onChange={(e)=>{setStart(e.target.value)}}></input>
            <input type="date" placeholder='end' value = {title} onChange={(e)=>{setEnd(e.target.value)}}></input>
            <input placeholder='description' value = {title} onChange={(e)=>{setDescription(e.target.value)}}></input>
            <input type="submit" Value="Submit"></input>
        </form>
    </Modal>
  )
}

export default CalendarModal
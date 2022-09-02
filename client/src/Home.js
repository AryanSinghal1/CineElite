import React, { useState } from 'react'

function Home() {
    const [username, setUsername] = useState()
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(Math.floor(Math.random() * 899999) + 100000)
        console.log(username)
    }
  return (<>
    <div>Enter email</div>
    <form onSubmit={handleSubmit}>
        <input onChange={e=>setUsername(e.target.value)} type='text' placeholder='Enter Email'></input>
        <input type='submit' value='Send Email'></input>
    </form>
    </>
  )
}

export default Home
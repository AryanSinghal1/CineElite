import React from 'react'

function ChatCard(props) {
  return (
    <div
    className=
    {
      props.to.email==props.name.email?
      'w-full h-1/6 flex items-center justify-start'
      :'w-full h-1/6 flex items-center justify-end'
    }
    >
     <div
     className='w-fit h-full flex-col'
     >
     <span className=
     {props.to.email==props.name.email?
      'h-fit rounded-full bg-red-500 text-white px-3 py-1'
     :'h-fit rounded-full bg-green-500 text-white px-3 py-1'}
     >{props.chat}</span>
     </div>
    </div>
  )
}

export default ChatCard
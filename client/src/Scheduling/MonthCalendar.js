import React from 'react'

function MonthCalendar(props) {
    let firstDayOfMonth = new Date(
        props.day.getFullYear(),
        props.day.getMonth(),
        1
      );
      console.log(firstDayOfMonth.getDate());
      let weekdayOfFirstDay = firstDayOfMonth.getDay();
      let currentDays = [];
      for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate());
        } else if (day === 0) {
          firstDayOfMonth.setDate(
            firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
          );
        } else {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }
        let calendarDay = {
          currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
          date: new Date(firstDayOfMonth),
          month: firstDayOfMonth.getMonth(),
          number: firstDayOfMonth.getDate(),
          day: firstDayOfMonth.getDay(),
          selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
          year: firstDayOfMonth.getFullYear(),
        };
        currentDays.push(calendarDay);
      }
      
  return (
    
    <div className="flex flex-wrap justify-between w-full h-full">
      {currentDays.map((day) => {
        const dayColor = day.day==0||day.day==6?"bg-background":"";
        const selected = day.selected ? " text-red-600" : "";
        return (
          <div
            className={
              `w-[14%] h-[16%] border flex justify-center items-center rounded-lg ${selected} ${dayColor}`
            }
            onClick={() => props.changeCurrentDay(day)}
          >
            <div className='w-[90%] h-[95%] flex flex-col justify-between'>
            <p className='font-bold'>{day.number}</p>
            <div className='w-full h-[90%] flex flex-col items-center'>{props.events.map((e)=>{
          let eventDate = new Date(e.date1);
          let eventDateEnd = new Date(e.date2);
              if(eventDate.getDate()<=day.number&& day.number<=eventDateEnd.getDate()&&eventDate.getMonth()==day.month&&eventDate.getFullYear()==day.year){
                return (<div className='w-full h-[30%] bg-red-600 rounded-md mb-1'><p className='text-white'>{e.title}</p></div>)
              }
            })}
            </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default MonthCalendar
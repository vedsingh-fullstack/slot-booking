import React from 'react'

function ListAppointmentSlot(props) {

  return (
    <div>
      <h2> Your available slots</h2>
      <div className='list-slot'>
        {props.slots.map((slot) => {
          return <div className='slots'>
            <p>{slot}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default ListAppointmentSlot

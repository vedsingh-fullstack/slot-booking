import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Appointment.css'
import ListAppointmentSlot from "./ListAppointmentSlot";


// move to redux or service to be reused
const API_URL = "http://localhost:3000/api/v1/available-slots"

function getAvailableSlots(date, interval) {
  return axios.get(`${API_URL}?date=${date}&interval=${interval}`).then((response) => response.data)
}

function SlotBookingDetail() {
  const [startDate, setStartDate] = useState(new Date());
  const [slots, setAppointementSlot] = useState([])


  const handleClick = async () => {
    try {
      getAvailableSlots(startDate, 15).then((slots) => { setAppointementSlot(slots) })
    } catch (error) {
      console.log("Request error!");
    }
  };

  return (
    <div className="slot-booking">
      <h2> Choose time slot</h2>
      <div className="datepicker">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <button onClick={handleClick}>Select Slot</button>
      <ListAppointmentSlot slots={slots}/>
    </div>
  )
}

export default SlotBookingDetail

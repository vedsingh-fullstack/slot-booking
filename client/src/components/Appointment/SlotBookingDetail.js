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
      <div className="slot-booking-header">
        <div className="datepicker">
          <h3> Choose time slot</h3>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="slot-interval-input">
          <h3>
            Select Interval:
          </h3>
          <input type="text" name="interval" className="input-text" />

        </div>
      </div>
      <button onClick={handleClick}>Select Slot</button>
      <ListAppointmentSlot slots={slots} />
    </div>
  )
}

export default SlotBookingDetail

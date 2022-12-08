import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import SlotBookingDetail from './components/Appointment/SlotBookingDetail';


function App() {
  return (
    <div className="App">
      <h1>Slot Booking System</h1>
      <SlotBookingDetail/>
    </div>
  );
}

export default App;

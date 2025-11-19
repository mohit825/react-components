import React, { useState } from "react";
import Booking from "../components/Booking/Booking";

const BookingContainer = () => {
  const [seatSelected, setSeatSelected] = useState({});

  const onSeatSelected = (section, row, col) => {
    let key = `${section}-${row}-${col}`;
    setSeatSelected((prev) => {
      let updatedSeats = { ...prev };
      if (updatedSeats[key]) {
        delete updatedSeats[key];
      } else {
        if (Object.keys(updatedSeats).length < 5) {
          updatedSeats[key] = true;
        } else {
          alert("You can only book a maximum of 5 seats.");
        }
      }
      return updatedSeats;
    });
  };
  return (
    <>
      <Booking
        label={"VIP"}
        seatsRow={8}
        seatsColumn={5}
        onGridClickHandler={onSeatSelected}
        selected={seatSelected}
      />
      <Booking
        label={"General"}
        seatsRow={6}
        seatsColumn={6}
        onGridClickHandler={onSeatSelected}
        selected={seatSelected}
      />
      <Booking
        label={"Economy"}
        seatsRow={8}
        seatsColumn={8}
        onGridClickHandler={onSeatSelected}
        selected={seatSelected}
      />
    </>
  );
};

export default BookingContainer;

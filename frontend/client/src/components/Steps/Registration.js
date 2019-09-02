import React, { useState } from "react";
import axios from "axios";
require('dotenv').config();
let REACT_APP_G_API_KEY = process.env.REACT_APP_G_API_KEY;

// Verifies the geolocation (user's current location)
let currentLocation = selected => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, selected);
  });
};

// Provide address (reverse geocoding) based on geolocation (user's current coordinates)
currentLocation()
  .then(position => {
    console.log("position.coords.latitude:", position.coords.latitude);
    console.log("position.coords.longitude:", position.coords.longitude);
    axios
      .get(
        // Only for temporary use
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=KEY`

        // Enable the following and comment out the one above if you want to make request from Google API (results are displayed in the console):
        // `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${REACT_APP_G_API_KEY}`
      )
      .then(res => {
        console.log("res:", res)

        // // This formatted address isn't always ideal data. Perhaps it's better to concatenate pieces of data below (Street Number, Address, etc.)
        // console.log("Formatted Address:", res.data.results[0].formatted_address);

        // // Coordinates
        // console.log("Latitude:", res.data.results[0].geometry.location.lat);
        // console.log("Longitude:", res.data.results[0].geometry.location.lng);

        // // Pieces of data for various fields
        // console.log("Street Number:", res.data.results[0].address_components[0].long_name);
        // console.log("Address:",res.data.results[0].address_components[1].long_name);
        // console.log("City:", res.data.results[0].address_components[2].long_name);
        // console.log("Province/State:", res.data.results[0].address_components[3].long_name);
        // console.log("Country:", res.data.results[0].address_components[4].long_name);
        // console.log("Postal Code:", res.data.results[0].address_components[5].long_name);
      });
  })
  .catch(err => {
    console.log(err.message);
  });

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}

export default function Registration(props) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const email = useFormInput("");
  const password = useFormInput("");
  const passwordConfirmation = useFormInput("");
  const address = useFormInput("");
  const postalCode = useFormInput("");
  const city = useFormInput("");
  const province = useFormInput("");
  const [currentAddress, setCurrentAddress] = useState("");

  return (
    <main className="">
      <section className="">
        <form className="registration_fields">
          <input placeholder="First Name" {...firstName} required />
          <input placeholder="Last Name" {...lastName} required />
          <input placeholder="Email" {...email} required />
          <input
            placeholder="Password"
            {...password}
            required
            type="password"
          />
          <input
            placeholder="Confirm Password"
            {...passwordConfirmation}
            required
            type="password"
          />
          <input placeholder="Address" {...address} required />
          <input placeholder="Postal Code" {...postalCode} required />
          <input placeholder="City" {...city} required />
          <input placeholder="Province" {...province} required />
          <input type="submit" value="Submit" />
        </form>
      </section>
      <input placeholder="Auto-Generate Address" value={currentAddress} onChange={e => setCurrentAddress(e.target.value)} />
    </main>
  );
}

import React, { useState } from "react";
import {useDispatch} from "react-redux"
import axios from "axios";
import { setUser } from "../../store/app"

export default function ManualAddress(props) {
  const dispatch = useDispatch()

  let manualAddressEntry = {
    address: "",
    postalCode: "",
    city: "",
    province: ""
  };

  const [addressForm, updateAddressForm] = useState(manualAddressEntry);

  const handleSubmission = function(event) {
    event.preventDefault();
    console.log(addressForm);
    dispatch(setUser(addressForm))
    // axios
    //   .post("/api/households", { addressForm })
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
  };

  return (
    <main>
      <section className="">
        <h1>ManualAddress</h1>

        <form className="registration_fields" onSubmit={handleSubmission}>
          <input
            placeholder="Address"
            value={addressForm.address}
            onChange={event =>
              updateAddressForm({ ...addressForm, address: event.target.value })
            }
            required
          />
          <input
            placeholder="Postal Code"
            value={addressForm.postalCode}
            onChange={event =>
              updateAddressForm({ ...addressForm, postalCode: event.target.value })
            }
            required
          />
          <input
            placeholder="City"
            value={addressForm.city}
            onChange={event =>
              updateAddressForm({ ...addressForm, city: event.target.value })
            }
            required
          />
          <input
            placeholder="Province"
            value={addressForm.province}
            onChange={event =>
              updateAddressForm({ ...addressForm, province: event.target.value })
            }
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
      <button onClick={props.onBack} className="back-btn">Back</button>
      <button onClick={props.onNext} className="next-btn">Next</button>
      </footer>
    </main>
  );
}
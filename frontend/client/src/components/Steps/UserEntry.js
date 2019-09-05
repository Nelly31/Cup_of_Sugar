import React, { useState } from "react";
import axios from "axios";

export default function UserEntry(props) {
  let userEntry = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  };

  const [userForm, updateUserForm] = useState(userEntry);

  const handleSubmission = function(event) {
    event.preventDefault();
    console.log(userForm);

    axios
      .post("/api/users", { userForm })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  return (
    <main>
      <section className="">
        <h1>UserEntry</h1>

        <form className="registration_fields" onSubmit={handleSubmission}>
          <input
            placeholder="First Name"
            value={userForm.first_name}
            onChange={event =>
              updateUserForm({ ...userForm, first_name: event.target.value })
            }
            required
          />
          <input
            placeholder="Last Name"
            value={userForm.last_name}
            onChange={event =>
              updateUserForm({ ...userForm, last_name: event.target.value })
            }
            required
          />
          <input
            placeholder="Email"
            value={userForm.email}
            onChange={event =>
              updateUserForm({ ...userForm, email: event.target.value })
            }
            required
          />
          <input
            placeholder="Password"
            value={userForm.password}
            onChange={event =>
              updateUserForm({ ...userForm, password: event.target.value })
            }
            required
            type="password"
          />
          <input
            placeholder="Confirm Password"
            value={userForm.password_confirmation}
            onChange={event =>
              updateUserForm({
                ...userForm,
                password_confirmation: event.target.value
              })
            }
            required
            type="password"
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

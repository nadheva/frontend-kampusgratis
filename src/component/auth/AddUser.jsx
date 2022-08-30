import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUser } from "../../redux/actions/AuthAction";

function AddUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const { addUserResult } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // add kontak
    dispatch(
      addUser({
        email: email,
        password: password,
        fullName: fullName,
        phone: phone,
        gender: gender,
      })
    );
  };

  return (
    <div>
      <h4>Add Kontak </h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="email"
          placeholder="email ..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          name="password"
          placeholder="pass ..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="text"
          name="fullName"
          placeholder="Nama..."
          value={fullName}
          onChange={(event) => setFullname(event.target.value)}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone ..."
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          type="text"
          name="gender"
          placeholder="gender ..."
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;

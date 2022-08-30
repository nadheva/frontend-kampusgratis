import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addKontak,
  getListKontak,
} from "../../redux/actions/KontakAction";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");

  const { addKontakResult } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // add kontak
    dispatch(addKontak({ nama: nama, nohp: nohp }));
  };

  // reload jika add data
  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  return (
    <div>
      <h4>Add Kontak </h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="nama"
          placeholder="Nama ..."
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <input
          type="text"
          name="nohp"
          placeholder="No hp ..."
          value={nohp}
          onChange={(event) => setNohp(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKontak;

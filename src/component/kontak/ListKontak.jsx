import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../redux/actions/KontakAction";

const ListKontak = () => {
  const { getListKontakResult, getListKontakLoading, getListKontakError } =
    useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  //   get data awal
  useEffect(() => {
    // panggil action getlistkontak
    console.log("1. use effect component");
    dispatch(getListKontak());
  }, [dispatch]);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Aplikasi Kontak App</h2>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp} -
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "data Kosong"}</p>
      )}
    </div>
  );
};

export default ListKontak;

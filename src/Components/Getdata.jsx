import React from 'react';

const Getdata = () => {
    // const getdata = async ()=>{
    const data = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=2b5dce77")
    console.log(data.json());
    // }
  return (
    <>
    <h1>data</h1>
    </>
  )
}

export default Getdata;
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Page() {
  return (
    <div className="main-card bg-sky-50 ">
      <h1 className="text-3xl font-black text-slate-900">Contact</h1>
      <div className="h-1 bg-blue-500 flex-grow w-3/4"></div>
      <div className="w-full bg-white py-10 mt-10 mr-10 px-7 rounded-md">
      <h1 className="text-2xl font-bold text-slate-900">
         Hey there,
        </h1>
        <h1 className="text-2xl font-bold text-slate-900 mb-10">
         looking forward to connect with you
        </h1>
        <TextField
          fullWidth
          className="text-3xl mr-7 my-5 font-black text-slate-900"
          id="outlined-required"
          label="Name"
          defaultValue=""
        />
        <TextField
          fullWidth
          className="text-3xl mr-7 my-5 font-black text-slate-900"
          id="outlined-required"
          label="Email"
          defaultValue=""
        />
        <TextField
          fullWidth
          className="text-3xl mr-7 my-5 font-black text-slate-900"
          id="outlined-required"
          label="Message"
          defaultValue=""
        />
        <Button className="mt-5" variant="contained" size="medium">
          Submit
        </Button>
      </div>
    </div>
  );
}

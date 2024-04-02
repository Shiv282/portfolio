import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Page() {
  return (
    <div className="main-card bg-sky-50 dark:bg-zinc-900">
      <h1 className="text-3xl font-black text-slate-900 dark:text-white">Contact</h1>
      <div className="h-1 bg-blue-500 flex-grow w-3/4 dark:bg-sky-400"></div>
      <div className="w-full bg-white py-10 mt-10 mr-10 px-7 rounded-md">
      <h1 className="text-xl font-bold text-slate-900">
         Hey there,
        </h1>
        <h1 className="text-l font-bold text-slate-900 mb-10">
        Let's chat about potential freelancing gigs, projects, or anything else where I can lend a hand. Drop me a line via the links provided or fill out the form below. Excited to connect!
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

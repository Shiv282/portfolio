"use client"
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
//import nodemailer from 'nodemailer';
import axios from "axios";
import Snackbar from "./snackbar";

export default function Page() {

  
  const [name, setName] = useState('Empty');
  const [email, setEmail] = useState('Empty');
  const [text, setText] = useState('Empty');
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  async function sendMessage(){

    var body = {
      name: name,
      email: email,
      text: text
    }
    const resp = await axios.post('/api/mail', body);
    var elems = document.querySelectorAll('input[id]');
    for(var i=0;i<elems.length;i++){
      elems[i].value='';
    }
  console.log(resp);
  setSnackbarOpen(true);
}

const handleCloseSnackbar = () => {
  setSnackbarOpen(false);
};
  return (
    <div className="main-card bg-sky-50 dark:bg-zinc-900">
      <Snackbar
        message="Response has been stored successfully!"
        isOpen={isSnackbarOpen}
        onClose={handleCloseSnackbar}
      />
      <h1 className="text-3xl font-black text-slate-900 dark:text-white">Contact</h1>
      <div className="h-1 bg-blue-500 flex-grow w-3/4 dark:bg-sky-400"></div>
      <div className="w-full bg-white py-10 mt-10 mr-10 px-7 rounded-md">
      <h1 className="text-xl font-bold text-slate-900">
         Hey there,
        </h1>
        <h1 className="text-l mt-2 font-bold text-slate-900 mb-7">
        Let's chat about potential freelancing gigs, projects, or anything else where I can lend a hand. Drop me a line via the links provided or fill out the form below. Excited to connect!
        </h1>
        <TextField
          fullWidth
          className="text-3xl mr-7 my-5 font-black text-slate-900"
          id="outlined-required"
          label="Name"
          defaultValue=""
          onChange={(e)=>setName(e.target.value)}
        />
        <TextField
          fullWidth
          className="text-3xl mr-7 my-5 font-black text-slate-900"
          id="outlined-required"
          label="Email"
          defaultValue=""
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          className="text-3xl mr-7 my-5 font-black text-slate-900"
          id="outlined-required"
          label="Message"
          defaultValue=""
          onChange={(e)=>setText(e.target.value)}
        />
        <Button className="mt-5" variant="contained" size="medium" onClick={sendMessage}>
          Submit
        </Button>
      </div>
    </div>
  );
}

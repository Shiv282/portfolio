import mongoose from "mongoose";

import { Message } from "./models";

export async function POST(req) {
  const { email, name, text } = await req.json();
  const to = "shivarajcm02@gmail.com";
  const DB_url = process.env.DB_url
  mongoose
    .connect(DB_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DATABASE CONNECTION Successful");
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
    });

  const message = new Message({
    email: email,
    name: name,
    text: text,
  });

  const response = await message.save();

  return new Response(response);
}

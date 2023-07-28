"use client";
import React, { useState } from "react";
import InputText from "@/components/atoms/inputText/InputText";
import SendButton from "@/components/atoms/sendButton/SendButton";
const bcrypt = require("bcryptjs");

function SignUpForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === "nome") {
      setNome(value.toLowerCase());
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "email") {
      setEmail(value.toLowerCase());
    }
  }
  function checkEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  async function sendData(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!checkEmail(email)) {
      alert("Email non valida");
      return;
    } else {
      POST(nome, email, password);
    }
  }

  return (
    <>
      <div className=" bg-blue-100 w-1/2 h-screen flex flex-col items-center justify-center p-2">
        <InputText
          placeholder={"Nome Completo"}
          onChangeFunction={onChange}
          type={"text"}
          name={"nome"}
        />
        <InputText
          placeholder={"email"}
          onChangeFunction={onChange}
          type={"email"}
          name={"email"}
        />
        <InputText
          placeholder={"Password"}
          onChangeFunction={onChange}
          type={"password"}
          name={"password"}
        />
        <SendButton
          onClickFunction={sendData}
          buttonText={"Invia"}
          stileBottone={
            " h-12 rounded-full border border-black w-1/5 bg-green-950 text-white my-4"
          }
          key={0}
        />
      </div>
    </>
  );
}

async function POST(name: string, email: string, password: string) {
  const url = "http://localhost:3000/api/sign-in";
  var salt = bcrypt.genSaltSync(10);
  var hashPassword = bcrypt.hashSync(password, salt);
  const data = { name: name, email: email, password: hashPassword };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (response.ok) {
    window.location.href = response.url;
  }
}

export default SignUpForm;

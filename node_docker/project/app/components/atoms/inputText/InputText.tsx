import React from "react";

interface InputTextProps {
  placeholder: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
}

function InputText(props: InputTextProps) {
  const { placeholder, onChangeFunction, type, name } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChangeFunction}
      name={name}
      className="border-2 border-black rounded-md p-2 my-4 sm:w-1/2"
    />
  );
}

export default InputText;

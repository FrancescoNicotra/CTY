import React from "react";

interface SendButtonProps {
  onClickFunction: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText: string;
  key: number;
  stileBottone: string;
}

function SendButton(props: SendButtonProps) {
  const { onClickFunction, buttonText, stileBottone } = props;
  return (
    <>
      <button onClick={onClickFunction} className={stileBottone}>
        {buttonText}
      </button>
    </>
  );
}

export default SendButton;

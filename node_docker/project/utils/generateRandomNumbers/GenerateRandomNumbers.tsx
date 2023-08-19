import React from "react";

function GenerateRandomNumbers() {
  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumbers: number[] = [];
  const minNumber = 1;
  const maxNumber = 9;
  const numberOfRandomNumbers = 5;

  for (let i = 0; i < numberOfRandomNumbers; i++) {
    const randomNumber = getRandomNumber(minNumber, maxNumber);
    randomNumbers.push(randomNumber);
  }

  const session = randomNumbers.join("");
  return session;
}

export default GenerateRandomNumbers;

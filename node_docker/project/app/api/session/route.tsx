import { cookies } from "next/headers";
import { NextResponse } from "next/server";
async function POST(req: Request, res: Response) {
  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateRandomNumbers(): string {
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

  const sessionNumber: string = generateRandomNumbers();
  cookies().set({
    name: "session",
    value: sessionNumber,
    httpOnly: true,
    path: "/",
  });
  return NextResponse.json({ status: 200 });
}

export { POST };

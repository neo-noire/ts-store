import React, { useState } from "react";

interface Hello {
  name: string;
  enthusiasmLevel?: number | undefined;
}

export default function Hello({
  name,
  enthusiasmLevel = 0,
}: Hello): JSX.Element {
  const [enthusiasm, setEnthusiasm] = useState(enthusiasmLevel);

  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}

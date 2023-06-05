import { useState } from "react";
import Nav from "../ui/Nav";

export default function Home() {
  const [name, setName] = useState();
  const [id, setID] = useState();

  return (
    <>
      <Nav name={name} id={id} />
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        style={{ marginRight: 5 }}
        placeholder="Enter a name"
      />
      <input
        type="text"
        onChange={(event) => setID(event.target.value)}
        placeholder="Enter ID"
      />
      <p>Home</p>
    </>
  );
}

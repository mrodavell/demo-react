import { useParams } from "react-router-dom";
import Nav from "../ui/Nav";

export default function About() {
  const { name, id } = useParams();
  return (
    <>
      <Nav />
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      <p>About</p>
    </>
  );
}

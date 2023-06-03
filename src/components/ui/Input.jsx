import { string } from "prop-types";

export default function Input({ type = "text", name, placeholder, id }) {
  return <input id={id} type={type} name={name} placeholder={placeholder} />;
}

Input.propTypes = {
  type: string,
  name: string,
  placeholder: string,
  id: string
};

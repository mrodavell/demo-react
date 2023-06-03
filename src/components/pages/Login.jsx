import Button from "../ui/Button";
import Input from "../ui/Input";

export default function Login() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h4>Login</h4>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button color="red">Login</Button>
      <Button color="green"><b>Signup</b></Button>
    </div>
  );
}

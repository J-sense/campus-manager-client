import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login, { data, error }] = useLoginMutation();
  console.log(data);
  const onSubmit = (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    login(userInfo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">ID</label>
        <input type="text" id="id" {...register("id")} />
        <label htmlFor="">PASSWORD</label>
        <input type="password" id="password" {...register("password")} />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Login;

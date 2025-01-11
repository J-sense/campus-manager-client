import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { varifyToken } from "../utils/VvarifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [login, { data, error }] = useLoginMutation();
  console.log(data);
  const onSubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = varifyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
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

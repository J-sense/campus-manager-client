/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { varifyToken } from "../utils/VvarifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Phform from "../components/form/Phform";
import PhInput from "../components/form/PhInput";
import { Row } from "antd";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading..");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = varifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Login Success", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
    console.log(data);
  };
  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <Phform onSubmit={onSubmit}>
        <label htmlFor="">ID</label>
        <PhInput type="text" name="id" />
        <label htmlFor="">PASSWORD</label>
        <PhInput type="text" name="password" />
        <button type="submit">SUBMIT</button>
      </Phform>
    </Row>
  );
};

export default Login;

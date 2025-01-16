import Input from "antd/es/input/Input";
import { Controller } from "react-hook-form";

const PhInput = ({ type, name }) => {
  //   const { register } = useFormContext();
  //   console.log(register);
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} />}
      />
      {/* <input
        type={type}
        // id="password"
        {...register(name)}
        defaultValue={"admin123"}
      /> */}
    </div>
  );
};

export default PhInput;

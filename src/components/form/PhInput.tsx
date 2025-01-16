import Input from "antd/es/input/Input";
import { Controller } from "react-hook-form";
type TInfo = {
  type: string;
  name: string;
};
const PhInput = ({ type, name }: TInfo) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} />}
      />
    </div>
  );
};

export default PhInput;

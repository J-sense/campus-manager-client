import { Form } from "antd";
import Input from "antd/es/input/Input";
import { Controller } from "react-hook-form";
type TInfo = {
  type: string;
  name: string;
  label?: string;
};
const PhInput = ({ type, name, label }: TInfo) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PhInput;

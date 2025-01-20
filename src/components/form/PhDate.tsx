import { DatePicker, Form } from "antd";
// import Input from "antd/es/input/Input";
import { Controller } from "react-hook-form";
type TInfo = {
  type?: string;
  name: string;
  label?: string;
};
const PhDate = ({ name, label }: TInfo) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label} style={{ color: "blue" }}>
            <DatePicker {...field} style={{ width: "100%" }} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PhDate;

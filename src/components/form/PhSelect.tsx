import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TSelectType = {
  name: string;
  label: string;
  option: { value: string; label: string; disabled?: boolean }[];
};
const PhSelect = ({ name, label, option }: TSelectType) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            onChange={onChange}
            options={option}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;

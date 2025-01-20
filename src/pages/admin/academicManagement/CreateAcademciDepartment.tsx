import React from "react";
import Phform from "../../../components/form/Phform";
import PhInput from "../../../components/form/PhInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "antd";

const CreateAcademciDepartment = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Phform onSubmit={onSubmit}>
      <PhInput name="name" label="Name" type="text" />

      <Button htmlType="submit">Submit</Button>
    </Phform>
  );
};

export default CreateAcademciDepartment;

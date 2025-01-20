import React from "react";
import Phform from "../../../components/form/Phform";
import PhInput from "../../../components/form/PhInput";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
// import { useActionData } from "react-router-dom";
import { useAddAcademicFacultyMutation } from "../../../redux/features/academicFaculties/academicFaculteis.Api";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    addAcademicFaculty(data);
  };
  return (
    <div>
      <Phform onSubmit={onSubmit}>
        <PhInput type="text" name="name" label="Academic Faculty Name" />
        <Button htmlType="submit">Submit</Button>
      </Phform>
    </div>
  );
};

export default CreateAcademicFaculty;

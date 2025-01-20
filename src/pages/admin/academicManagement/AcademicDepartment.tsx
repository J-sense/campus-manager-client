import React from "react";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/academicDepartment/AcademicDepartment.Api";

const AcademicDepartment = () => {
  const { data } = useGetAllAcademicDepartmentQuery(undefined);
  console.log(data);
  return <div>all academic department</div>;
};

export default AcademicDepartment;

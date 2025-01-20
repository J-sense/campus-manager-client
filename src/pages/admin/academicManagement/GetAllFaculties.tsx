import React from "react";
import { useGetAllFacultiesQuery } from "../../../redux/features/academicFaculties/academicFaculteis.Api";

const GetAllFaculties = () => {
  const { data } = useGetAllFacultiesQuery(undefined);
  console.log(data);
  return <div>get all faculties</div>;
};

export default GetAllFaculties;

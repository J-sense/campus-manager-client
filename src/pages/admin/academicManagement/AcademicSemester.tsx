import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);

  return (
    <div>
      <p>Academic Semester</p>
    </div>
  );
};

export default AcademicSemester;

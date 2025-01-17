import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import Phform from "../../../components/form/Phform";
// import PhInput from "../../../components/form/PhInput";
import PhSelect from "../../../components/form/PhSelect";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAddAcademicSemesterMutation } from "../../../redux/features/academicSemester/academicSemesterApi";
import { toast } from "sonner";
// import { useAddAcademicSemesterMutation } from "../../../redux/features/academicSemester/academicSemesterApi";
// import { toast } from "sonner";
const academicSemesterSchema = z.object({
  name: z.string({ required_error: "name is required" }),
  // code: z.string({ required_error: "code is required" }),
  year: z.string({ required_error: "Please select a year" }),
  startMonth: z.string({ required_error: "Please select a Start Month" }),
  endMonth: z.string({ required_error: "Please select a End Month" }),
});
const semesterOption = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];
const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const startMonth = months.map((singleMonth) => ({
  value: String(singleMonth),
  label: String(singleMonth),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    console.log("clicked");
    const name = semesterOption[Number(data.name) - 1]?.label;
    console.log(name);
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
    try {
      const result = await addAcademicSemester(semesterData);
      console.log(result);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <Flex justify="center" align="center" style={{ height: "70vh" }} gap={6}>
      <Col span={6}>
        <Phform
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PhSelect name="name" label="Name" option={semesterOption} />
          <PhSelect name="year" label="Year" option={yearOptions} />
          {/* <PhSelect name="code" label="code" option={yearOptions} /> */}
          <PhSelect name="startMonth" label="Start Month" option={startMonth} />
          <PhSelect name="endMonth" label="End Month" option={startMonth} />
          <Button htmlType="submit">submit</Button>
        </Phform>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;

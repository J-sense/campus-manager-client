import React from "react";
import Phform from "../../../components/form/Phform";
import PhInput from "../../../components/form/PhInput";
import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import PhDate from "../../../components/form/PhDate";
import PhSelect from "../../../components/form/PhSelect";
import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/academicDepartment/AcademicDepartment.Api";
import { useAddStudentMutation } from "../../../redux/features/user/createStudent.Api";
// const defaultStudetnInfo = {
//   name: {
//     firstName: "I am ",
//     middleName: "Student",
//     lastName: "Number 1",
//   },

//   gender: "male",
//   dateOfBirth: "1990-01-01",
//   email: "student2@gmail.com",
//   contactNo: "1235678",
//   emergencyContactNo: "987-654-3210",
//   bloogGroup: "A+",

//   presentAddress: "123 Main St, Cityville",
//   permanentAddress: "456 Oak St, Townsville",

//   guardian: {
//     fatherName: "James Doe",
//     fatherOccupation: "Engineer",
//     fatherContactNo: "111-222-3333",
//     motherName: "Mary Doe",
//     motherOccupation: "Teacher",
//     motherContactNo: "444-555-6666",
//   },
//   localGuardian: {
//     name: "Alice Johnson",
//     occupation: "Doctor",
//     contactNo: "777-888-9999",
//     address: "789 Pine St, Villageton",
//   },
//   admissionSemester: "65b0104110b74fcbd7a25d92",
//   academicDepartment: "65b00fb010b74fcbd7a25d8e",
// };

const genders = ["male", "female"];
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const selectBloodGroup = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));
const SelectGender = genders.map((element) => ({
  value: element.toLowerCase(),
  label: element,
}));

const CreateStudent = () => {
  const { data: SData, isLoading } = useGetAllSemesterQuery(undefined);
  const { data: dData } = useGetAllAcademicDepartmentQuery(undefined);
  const selectDepartment = dData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));
  const selectSemester = SData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`, // Use backticks for the template literal
  }));
  const [addStudent] = useAddStudentMutation();
  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student1234",
      student: data,
    };
    const formData = new FormData();
    console.log(formData);
    formData.append("data", JSON.stringify(studentData));
    addStudent(formData);
  };
  return (
    <div>
      <Phform onSubmit={onSubmit}>
        <Divider>Personal Info</Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput type="text" name="name.firstName" label="First Name" />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput type="text" name="name.middleName" label="Middle Name" />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput type="text" name="name.lastName" label="Last Name" />
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhSelect option={SelectGender} name="gender" label="Gender" />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhDate name="dateOfBirth" label="Date Of Birth" />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput type="email" name="email" label="Email" />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput type="text" name="contactNo" label="Contact No" />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              name="emergencyContactNo"
              label="Emergency Contact No"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhSelect
              option={selectBloodGroup}
              name="bloogGroup"
              label="Blood Group"
            />
          </Col>
        </Row>
        <Divider>Address</Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
            <PhInput
              type="text"
              name="presentAddress"
              label="Present Address"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
            <PhInput
              type="text"
              name="permanentAddress"
              label="Permanent Address"
            />
          </Col>
        </Row>
        <Divider>Guardian Info</Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              name="guardian.fatherName"
              label="Father Name"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              name="guardian.fatherOccupation"
              label="Father Occupation"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              name="guardian.fatherContactNo"
              label="Father Contact No"
            />
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              name="guardian.motherName"
              label="Mother Name"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              name="guardian.motherOccupation"
              label="Mother Occupation"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PhInput
              type="text"
              name="guardian.motherContactNo"
              label="Mother Contact No"
            />
          </Col>
        </Row>
        <Divider>Local Guardian Info</Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <PhInput type="text" name="localGuardian.name" label="Name" />
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <PhInput
              type="text"
              name="localGuardian.occupation"
              label="Occupation"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <PhInput
              type="text"
              name="localGuardian.contactNo"
              label="Contact No"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <PhInput type="text" name="localGuardian.address" label="Address" />
          </Col>
        </Row>
        <Divider style={{ color: "blue" }}>Academic Info</Divider>
        <Row gutter={8}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
            <PhSelect
              option={selectSemester!}
              name="admissionSemester"
              label="Admission Semester"
            />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
            <PhSelect
              option={selectDepartment!}
              name="academicDepartment"
              label="Academic Department"
            />
          </Col>
        </Row>
        <Button htmlType="submit">Submit</Button>
      </Phform>
    </div>
  );
};

export default CreateStudent;

// {
//   "password": "student123",

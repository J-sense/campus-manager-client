import React from "react";
import Phform from "../../../components/form/Phform";
import PhInput from "../../../components/form/PhInput";
import { Button, Col, Row } from "antd";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";

const CreateStudent = () => {
  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Phform onSubmit={onSubmit}>
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
        </Row>
        <Button htmlType="submit">Submit</Button>
      </Phform>
    </div>
  );
};

export default CreateStudent;

import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  useForm,
} from "react-hook-form";
type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitErrorHandler<FieldValues>;
} & TFormConfig;
type TFormConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolver?: any;
};
const Phform = ({ children, onSubmit, resolver }: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default Phform;

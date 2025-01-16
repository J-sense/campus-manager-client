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
};
const Phform = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Phform;

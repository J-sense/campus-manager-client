import { FormProvider, useForm } from "react-hook-form";

const Phform = ({ children, onSubmit }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Phform;

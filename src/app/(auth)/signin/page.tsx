import AuthForm from "@/components/AuthForm";
import { FC } from "react";

const Signin: FC = () => {
  return (
    <div>
      <AuthForm mode="signin" />
    </div>
  );
};

export default Signin;

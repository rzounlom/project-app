import AuthForm from "@/components/AuthForm";
import { FC } from "react";

const Register: FC = () => {
  return (
    <div>
      {" "}
      <div>
        <AuthForm mode="register" />
      </div>
    </div>
  );
};

export default Register;

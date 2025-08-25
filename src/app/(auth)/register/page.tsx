import RegisterForm from "@/components/auth/RegisterForm";
import RegisterLeft from "@/components/auth/RegisterLeft";

export default function RegisterPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen ">
      <RegisterLeft />

      <RegisterForm />
    </div>
  );
}

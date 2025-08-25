import { RegisterForm, RegisterLeft } from "@/components/auth";

export default function RegisterPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen ">
      <RegisterLeft />

      <RegisterForm />
    </div>
  );
}

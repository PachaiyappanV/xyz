import { LoginForm, LoginLeft } from "@/components/auth";

export default function RegisterPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen ">
      <LoginLeft />
      <LoginForm />
    </div>
  );
}

import LoginForm from "@/components/auth/LoginForm";
import LoginLeft from "@/components/auth/LoginLeft";

export default function RegisterPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen ">
      <LoginLeft />
      <LoginForm />
    </div>
  );
}

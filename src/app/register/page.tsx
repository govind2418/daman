import type { Metadata } from "next";
import { AuthLayout } from "@/components/shared/AuthLayout";
import { RegisterForm } from "@/components/forms/RegisterForm";

export const metadata: Metadata = {
  title: "Register",
  description: "Create your free Daman Game account and start competing.",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Join the arena"
      description="Create your free account in under a minute and jump into your first ranked match today."
    >
      <RegisterForm />
    </AuthLayout>
  );
}

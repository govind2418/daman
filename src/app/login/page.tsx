import type { Metadata } from "next";
import { AuthLayout } from "@/components/shared/AuthLayout";
import { LoginForm } from "@/components/forms/LoginForm";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your Daman Game account.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Get back in the arena"
      description="Pick up your rank, tournaments, and rewards right where you left off."
    >
      <LoginForm />
    </AuthLayout>
  );
}

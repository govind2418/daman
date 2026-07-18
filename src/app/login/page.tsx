import type { Metadata } from "next";
import { AuthLayout } from "@/components/shared/AuthLayout";
import { LoginForm } from "@/components/forms/LoginForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Daman Login",
  description:
    "Daman Login — sign in to your Daman Game account to compete, climb the leaderboard, and unlock rewards on damangame.co.in.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <AuthLayout
      title="Daman Login"
      description="Daman Login to pick up your rank, tournaments, and rewards right where you left off on Daman Game."
    >
      <LoginForm />
    </AuthLayout>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
  }

  return (
    <>
      <h2 className="text-center font-display text-2xl font-bold text-white lg:text-left">
        Welcome back
      </h2>
      <p className="mt-2 text-center text-sm text-muted lg:text-left">
        Log in to continue climbing the ranks.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div>
          <label htmlFor="login-email" className="text-sm font-medium text-white/85">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-orange focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="login-password" className="text-sm font-medium text-white/85">
              Password
            </label>
            <Link href="/contact" className="text-xs font-medium text-brand-gold hover:underline">
              Forgot password?
            </Link>
          </div>
          <input
            id="login-password"
            type="password"
            required
            autoComplete="current-password"
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-orange focus:outline-none"
            placeholder="••••••••"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full justify-center"
          disabled={submitting}
        >
          {submitting ? "Logging in..." : "Log In"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        New to Daman Game?{" "}
        <Link href="/register" className="font-semibold text-brand-gold hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}

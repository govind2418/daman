"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function RegisterForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
  }

  return (
    <>
      <h2 className="text-center font-display text-2xl font-bold text-white lg:text-left">
        Create your account
      </h2>
      <p className="mt-2 text-center text-sm text-muted lg:text-left">
        Join 500K+ players competing across four arenas.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div>
          <label htmlFor="register-name" className="text-sm font-medium text-white/85">
            Display name
          </label>
          <input
            id="register-name"
            type="text"
            required
            autoComplete="nickname"
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-orange focus:outline-none"
            placeholder="Your in-game name"
          />
        </div>
        <div>
          <label htmlFor="register-email" className="text-sm font-medium text-white/85">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-orange focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="register-password" className="text-sm font-medium text-white/85">
            Password
          </label>
          <input
            id="register-password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-orange focus:outline-none"
            placeholder="At least 8 characters"
          />
        </div>

        <label className="flex items-start gap-2.5 text-xs leading-relaxed text-muted">
          <input
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-brand-red"
          />
          I confirm I am 18 years or older and agree to the{" "}
          <Link href="/terms" className="text-brand-gold hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-brand-gold hover:underline">
            Privacy Policy
          </Link>
          .
        </label>

        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full justify-center"
          disabled={submitting}
        >
          {submitting ? "Creating account..." : "Create Account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Already have a Daman Game account?{" "}
        <Link href="/login" className="font-semibold text-brand-gold hover:underline">
          Daman Login
        </Link>
      </p>
    </>
  );
}

import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Daman Game.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="July 10, 2026"
      sections={[
        {
          heading: "1. Information we collect",
          body: [
            "We collect account information (email, display name), gameplay data (match history, rankings), and basic device/usage data to operate and improve the platform.",
          ],
        },
        {
          heading: "2. How we use your information",
          body: [
            "Your information is used to provide matchmaking, maintain leaderboards, deliver rewards, provide customer support, and improve platform fairness and performance.",
          ],
        },
        {
          heading: "3. Data sharing",
          body: [
            "We do not sell your personal data. We may share limited data with service providers who help us operate the platform, under strict confidentiality agreements.",
          ],
        },
        {
          heading: "4. Data security",
          body: [
            "We use industry-standard security practices to protect your data, including encryption in transit and access controls on internal systems.",
          ],
        },
        {
          heading: "5. Your rights",
          body: [
            "You can request access to, correction of, or deletion of your personal data at any time by contacting our support team.",
          ],
        },
        {
          heading: "6. Contact",
          body: [
            "For privacy-related questions, reach out via our Contact page.",
          ],
        },
      ]}
    />
  );
}

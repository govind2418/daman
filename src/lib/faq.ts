import type { AccordionItem } from "@/components/ui/Accordion";

export const faqs: AccordionItem[] = [
  { question: "What is this Daman Game website?", answer: "It is an independent information guide about the Daman Game name and the images supplied with this project. It does not operate games or provide account services.", link: { label: "Read the Daman Game overview", href: "/daman-game" } },
  { question: "Can I sign in or create an account here?", answer: "No. This website does not authenticate users, create game accounts, store credentials, or recover passwords.", link: { label: "Read account safety guidance", href: "/daman-game-login" } },
  { question: "Does this site offer a Daman Game APK?", answer: "No verified application package or app-store listing is included in this project. Do not treat screenshots or banners as app downloads.", link: { label: "Read app information", href: "/daman-game-app" } },
  { question: "Which game names appear in the supplied image?", answer: "The existing promotional artwork displays Win Go, Aviator, Slots, Casino, and Fishing. This does not verify that each title is currently available.", link: { label: "See the Daman Game overview", href: "/daman-game" } },
  { question: "Where can I find official account support?", answer: "This guide is not connected to the game operator. Use a provider contact channel you have independently verified, and never disclose a password or one-time code." },
  { question: "Can I use Daman Game wherever I live?", answer: "Eligibility and local restrictions vary. Review the current provider terms and applicable law in your location before accessing any gaming service." },
  { question: "Are game outcomes guaranteed?", answer: "No game outcome or financial result is guaranteed. Do not treat games as a source of income or risk money you cannot afford to lose." },
];

export const loginFaqs: AccordionItem[] = [
  { question: "Does this guide have a Daman Game login form?", answer: "No. This website does not accept login details or connect to game accounts." },
  { question: "How can I keep my account safe?", answer: "Verify the provider address independently, use a unique password, and never share your password or one-time code." },
  { question: "Who can help with a lost password?", answer: "Only the provider through its independently verified account-recovery and support channels can help with a game account." },
];

export const registerFaqs: AccordionItem[] = [
  { question: "Can I register through this website?", answer: "No. This information guide does not create accounts or collect personal credentials." },
  { question: "What should I check before creating an account?", answer: "Confirm the provider, read its current terms and privacy information, and check age and location eligibility under local rules." },
  { question: "Does this guide promise a bonus or reward?", answer: "No. This website does not offer or verify bonuses, invite codes, or rewards." },
];

export const downloadFaqs: AccordionItem[] = [
  { question: "Can I download the Daman Game app here?", answer: "No. This project does not include a verified app installer or official store listing." },
  { question: "Are the screenshots installable apps?", answer: "No. They are image files included as visual references and cannot be installed." },
  { question: "How do I check an app link?", answer: "Use only a source independently verified as belonging to the provider. Review the publisher, requested permissions, and local availability before installing." },
];

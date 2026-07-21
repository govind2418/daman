import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const accountScreens = [
  {
    number: 1,
    title: "Account overview",
    description:
      "This screen shows the account overview a member sees after logging in. A profile photo, display name, and current membership tier appear at the top, along with an account ID and the date of the last login. Below that, the wallet balance is shown as a summary figure. Shortcut tiles link out to game history, transaction history, deposit history, and withdrawal history. The layout groups account identity, balance, and record-keeping into a single dashboard view.",
  },
  {
    number: 2,
    title: "Wallet view",
    description:
      "This screen is the dedicated wallet view within a Daman Game account. It separates the balance into a main wallet and a secondary linked wallet, each shown with a percentage breakdown. A wallet transfer option sits between the two balances. Below that are shortcuts for deposit, withdraw, deposit history, and withdrawal history. A row of category tabs at the bottom links each balance to specific in-app sections.",
  },
  {
    number: 3,
    title: "VIP tier",
    description:
      "This screen displays the VIP tier system tied to a Daman Game account. It shows the member's current tier, accumulated experience points, and how many days remain until the next tier evaluation. A progress bar tracks activity toward maintaining the current tier level. Below that, a list explains the account-related benefits associated with that tier.",
  },
  {
    number: 6,
    title: "Gift code redemption",
    description:
      "This screen is the redemption form for entering a gift or promotional code on a Daman Game account. A single text field accepts the code before it is submitted for verification. A history section below the form keeps a record of codes that have previously been entered on the account. The layout is a simple, single-purpose utility screen separate from the main account dashboard.",
  },
];

export function AccountScreens() {
  return (
    <section id="account-screens" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Account UI"
          title="Inside the account dashboard"
          description="A closer look at four account-management screens within Daman Game."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {accountScreens.map((screen) => {
            const number = String(screen.number).padStart(2, "0");
            return (
              <div key={screen.number} className="flex flex-col">
                <div className="relative aspect-[1290/2796] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <Image
                    src={`/screenshots/daman-game-screenshot-${number}.png`}
                    alt={`Daman Game ${screen.title} screen`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white">
                  {screen.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {screen.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

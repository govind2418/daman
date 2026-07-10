import {
  Gamepad2,
  Swords,
  Flag,
  Puzzle,
  Trophy,
  BarChart3,
  Gift,
  Users,
  Home,
  User,
  Crown,
  Star,
} from "lucide-react";

const tiles = [
  { label: "Arcade", icon: Gamepad2, tone: "from-brand-red/70 to-brand-orange/50" },
  { label: "Strategy", icon: Swords, tone: "from-indigo-500/60 to-violet-500/40" },
  { label: "Racing", icon: Flag, tone: "from-brand-orange/70 to-brand-gold/50" },
  { label: "Puzzle", icon: Puzzle, tone: "from-emerald-500/60 to-teal-500/40" },
  { label: "Tournaments", icon: Trophy, tone: "from-brand-gold/70 to-brand-orange/40" },
  { label: "Leaderboard", icon: BarChart3, tone: "from-sky-500/60 to-blue-500/40" },
  { label: "Rewards", icon: Gift, tone: "from-brand-red/70 to-pink-500/40" },
  { label: "Community", icon: Users, tone: "from-fuchsia-500/60 to-brand-red/40" },
];

const tabs = [
  { label: "Home", icon: Home, active: true },
  { label: "Games", icon: Gamepad2, active: false },
  { label: "Rewards", icon: Gift, active: false, center: true },
  { label: "Ranks", icon: Crown, active: false },
  { label: "Profile", icon: User, active: false },
];

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* device frame */}
      <div className="relative rounded-[2.75rem] border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] p-2.5 shadow-[0_40px_120px_-30px_rgba(255,59,48,0.55)]">
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-surface">
          {/* screen */}
          <div className="flex items-center justify-between px-4 pb-3 pt-6">
            <span className="font-display text-sm font-extrabold text-white">
              Daman Game
            </span>
            <div className="flex gap-1.5">
              <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-semibold text-white/80">
                Log in
              </span>
              <span className="rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-2.5 py-1 text-[10px] font-semibold text-white">
                Register
              </span>
            </div>
          </div>

          <div className="px-3">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#241118] via-[#1a0f19] to-[#12141f] p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-gold">
                Weekly Championship
              </p>
              <p className="mt-1 max-w-[9rem] text-xs font-bold leading-snug text-white">
                Compete for the Season 4 title
              </p>
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[9px] font-semibold text-white">
                <Star size={10} className="text-brand-gold" aria-hidden />
                12,480 players in
              </div>
              <Trophy
                aria-hidden
                className="absolute -right-2 -top-2 h-16 w-16 text-brand-gold/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 px-3 pt-3">
            {tiles.map(({ label, icon: Icon, tone }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${tone} border border-white/10`}
                >
                  <Icon size={18} className="text-white" aria-hidden />
                </div>
                <span className="text-center text-[8px] font-medium text-white/70">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 space-y-2 px-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
              Top this week
            </p>
            {[
              { name: "Racing Rally", rtp: "Season 4" },
              { name: "Puzzle Rush", rtp: "New" },
            ].map((row) => (
              <div
                key={row.name}
                className="flex items-center justify-between rounded-xl border border-white/8 bg-white/5 px-3 py-2"
              >
                <span className="text-[10px] font-semibold text-white">
                  {row.name}
                </span>
                <span className="rounded-full bg-brand-orange/15 px-2 py-0.5 text-[9px] font-semibold text-brand-gold">
                  {row.rtp}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/8 px-3 py-3">
            {tabs.map(({ label, icon: Icon, active, center }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div
                  className={
                    center
                      ? "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-brand-red to-brand-orange text-white shadow-[0_4px_16px_rgba(255,106,0,0.5)]"
                      : "flex h-6 w-6 items-center justify-center"
                  }
                >
                  <Icon
                    size={center ? 16 : 16}
                    className={active ? "text-brand-gold" : "text-white/50"}
                    aria-hidden
                  />
                </div>
                <span
                  className={`text-[7px] font-medium ${
                    active ? "text-brand-gold" : "text-white/40"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

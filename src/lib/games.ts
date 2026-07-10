import {
  Gamepad2,
  Swords,
  Flag,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

export type GameCategory = {
  slug: "arcade" | "strategy" | "racing" | "puzzle";
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  players: string;
  titles: { name: string; mode: string; players: string }[];
};

export const gameCategories: GameCategory[] = [
  {
    slug: "arcade",
    name: "Arcade",
    icon: Gamepad2,
    tagline: "Fast reflexes, faster rounds",
    description:
      "Bite-sized, high-intensity arcade matches built for quick sessions and quick climbs up the rank ladder.",
    players: "180K+",
    titles: [
      { name: "Neon Runner", mode: "1v1 Sprint", players: "42K" },
      { name: "Blitz Blocks", mode: "Battle Royale", players: "36K" },
      { name: "Skyfall Dash", mode: "Time Attack", players: "28K" },
      { name: "Pixel Duel", mode: "1v1", players: "24K" },
    ],
  },
  {
    slug: "strategy",
    name: "Strategy",
    icon: Swords,
    tagline: "Outthink every opponent",
    description:
      "Deep, methodical strategy titles where positioning, resource management, and foresight decide the winner.",
    players: "140K+",
    titles: [
      { name: "Siege Masters", mode: "Ranked 1v1", players: "31K" },
      { name: "Kingdom Clash", mode: "4-Player FFA", players: "27K" },
      { name: "Vector Command", mode: "Team 3v3", players: "22K" },
      { name: "Grid Tactics", mode: "Ranked 1v1", players: "19K" },
    ],
  },
  {
    slug: "racing",
    name: "Racing",
    icon: Flag,
    tagline: "Precision at full speed",
    description:
      "Tight circuits and split-second overtakes — racing titles that reward precision and nerve in equal measure.",
    players: "160K+",
    titles: [
      { name: "Racing Rally", mode: "Season 4 Circuit", players: "38K" },
      { name: "Drift Kings", mode: "Time Trial", players: "30K" },
      { name: "Overpass Grand Prix", mode: "8-Player Race", players: "26K" },
      { name: "Nitro Streets", mode: "1v1 Duel", players: "21K" },
    ],
  },
  {
    slug: "puzzle",
    name: "Puzzle",
    icon: Puzzle,
    tagline: "Clarity under the clock",
    description:
      "Sharp, satisfying puzzle formats that test pattern recognition and speed against the clock and other players.",
    players: "120K+",
    titles: [
      { name: "Puzzle Rush", mode: "Speed Solve", players: "29K" },
      { name: "Chroma Match", mode: "1v1 Versus", players: "25K" },
      { name: "Logic Loop", mode: "Daily Challenge", players: "20K" },
      { name: "Cascade", mode: "Ranked Solo", players: "17K" },
    ],
  },
];

export function getGameCategory(slug: string) {
  return gameCategories.find((c) => c.slug === slug);
}

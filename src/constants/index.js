import { battle, book, terrain, boss } from "../assets/icons";

export const features = [
  {
    id: "feature-1",
    icon: battle,
    title: "Combat",
    content:
      "The game has combat sysmtem with weapon systems. All weapons has different animation combo",
  },

  {
    id: "feature-2",
    icon: book,
    title: "Quiz",
    content:
      "The game has quiz system that used c++ fundamentals as a question",
  },

  {
    id: "feature-3",
    icon: terrain,
    title: "Terrain",
    content:
      "The game has three terrain concept depends on the monster that you can encounter ",
  },

  {
    id: "feature-4",
    icon: boss,
    title: "Boss",
    content:
      "The game has 3 boss on each terrain with different skills and damage",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gameplay", label: "Gameplay" },
  { href: "#download", label: "Download" },
];

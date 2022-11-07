import create from "zustand";

interface iLibraries {
  listLibraries: iLibrarie[];
}
interface iLibrarie {
  name: string;
  javascript: string;
  typescript: string;
}

export const librariesContainer = create<iLibraries>((set) => ({
  listLibraries: [
    {
      name: "React router-dom",
      javascript: "react-router-dom@6",
      typescript: "react-router-dom@6",
    },
    {
      name: "React hook/form",
      javascript: "react-hook-form",
      typescript: "react-hook-form",
    },
    {
      name: "React hook/formYup",
      javascript: "@hookform/resolvers",
      typescript: "@hookform/resolvers",
    },
    {
      name: "Zustand",
      javascript: "zustand",
      typescript: "zustand",
    },
    {
      name: "React modal",
      javascript: "react-modal",
      typescript: "@types/react-modal",
    },
    {
      name: "React joyride",
      javascript: "react-joyride",
      typescript: "@types/react-joyride",
    },
    {
      name: "Style-components",
      javascript: "style-components",
      typescript: "@types/style-components",
    },
    {
      name: "Tailwindcss",
      javascript: "tailwindcss postcss autoprefixer",
      typescript: "tailwindcss postcss autoprefixer",
    },
  ],
}));

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
      name: "React Router Dom",
      javascript: "react-router-dom@6",
      typescript: "react-router-dom@6",
    },
    {
      name: "React Hook Form",
      javascript: "react-hook-form @hookform/resolvers",
      typescript: "react-hook-form @hookform/resolvers",
    },
    {
      name: "Yup",
      javascript: "yup",
      typescript: "yup",
    },
    {
      name: "Zustand",
      javascript: "zustand",
      typescript: "zustand",
    },
    {
      name: "React Modal",
      javascript: "react-modal",
      typescript: "@types/react-modal",
    },
    {
      name: "React Joyride",
      javascript: "react-joyride",
      typescript: "@types/react-joyride",
    },
    {
      name: "Styled Components",
      javascript: "styled-components",
      typescript: "@types/styled-components",
    },
    {
      name: "Animate On Scroll",
      javascript: "aos",
      typescript: "@types/aos",
    },
    {
      name: "Framer Motion",
      javascript: "framer-motion",
      typescript: "framer-motion",
    },
    {
      name: "React Icons",
      javascript: "react-icons",
      typescript: "react-icons",
    },
    {
      name: "React Lottie",
      javascript: "react-lottie",
      typescript: "@types/react-lottie",
    },
    {
      name: "Axios",
      javascript: "axios",
      typescript: "axios",
    },
    {
      name: "Redux",
      javascript: "react-redux",
      typescript: "react-redux",
    },
    {
      name: "Material UI",
      javascript: "@mui/material @emotion/react @emotion/styled",
      typescript: "@mui/material @emotion/react @emotion/styled",
    },
  ],
}));

import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { AnimationNotFound } from "../components/AnimationsComp/AnimationNotFound";

export const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-20 w-auto h-auto min-h-screen">
        <img src={logo} alt="Logo Shape" className="w-56 pt-2.5" />
        <AnimationNotFound />
      </div>
    </motion.div>
  );
};

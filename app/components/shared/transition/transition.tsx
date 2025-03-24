'use client'
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const variants = {
    initial: { opacity: 0, x: -50 }, // Начинаем слева
  animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.2 } }, // Уходим вправо
  };

export default function PageTransition({ children }: { children: ReactNode }) {
  const router = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
      className="flex flex-col gap-[5px] "
        key={router}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

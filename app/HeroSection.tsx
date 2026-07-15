"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 bg-linear-to-r from-brand-purple via-brand-blue to-accent opacity-20 animate-gradient-anim bg-size-[200%_200%]" />
        <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-10 mix-blend-soft-light" />
      </div>

      <motion.div
        className="container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-h1 text-white" variants={itemVariants}>
          Delivering More Than Packages.
          <br />
          <span className="bg-linear-to-r from-brand-blue to-accent bg-clip-text text-transparent">
            Delivering Confidence.
          </span>
        </motion.h1>
        <motion.p className="mt-6 max-w-3xl mx-auto text-body text-white/80" variants={itemVariants}>
          Technology-driven logistics solutions designed for individuals and businesses. Schedule pickups, track shipments in real time, and shop premium supplies—all from one platform.
        </motion.p>
        <motion.div className="mt-10 flex flex-wrap justify-center gap-4" variants={itemVariants}>
          <Button size="lg">Schedule Pickup <ArrowRight className="ml-2 h-5 w-5" /></Button>
          <Button variant="secondary" size="lg">Track Shipment</Button>
          <Button variant="ghost" size="lg" className="text-white"><PlayCircle className="mr-2 h-5 w-5" /> Watch Demo</Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
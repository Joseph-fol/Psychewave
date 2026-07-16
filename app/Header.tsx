"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Store", href: "/store" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isMenuOpen ? "bg-white backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Psychewave
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-foreground/80 font-bold hover:text-foreground transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="secondary">Track Shipment</Button>
            <Button>Schedule Pickup</Button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-foreground">
              {isMenuOpen ?  <X /> : <Menu />}
            </button>
          </div>

        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-40 bg-dark/90 backdrop-blur-lg pt-20 md:hidden"
          >
            <nav className="container mx-auto flex flex-col items-center gap-8 px-4 py-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={toggleMenu} className="text-2xl lh-sm text-white hover:text-foreground transition-colors">
                  {link.name}
                </a>
              ))}

              <div className="flex flex-col items-center gap-4 mt-8 w-full">
                <Button variant="secondary" className="w-full max-w-xs">Track Shipment</Button>
                <Button className="w-full max-w-xs">Schedule Pickup</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
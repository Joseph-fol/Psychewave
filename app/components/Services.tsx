"use client"
import * as React from "react";
import {
  Briefcase,
  Car,
  Globe,
  Home,
  LocateFixed,
  QrCode,
  Warehouse,
} from "lucide-react";

import { motion } from "framer-motion";
export default function Services() {
  const card = [
    {
      icon: <Home />,
      title: "Doorstep Delivery",
      description:
        "Book a pickup from home or the office, no drop-off point required.",
      cta: "Learn more",
    },
    {
      icon: <Globe />,
      title: "Nationwide Delivery",
      description:
        "Ship anywhere across 36 states with predictable transit windows.",
      cta: "Learn more",
    },
    {
      icon: <Briefcase />,
      title: "Doorstep Business Logistics",
      description:
        "Bulk pickups, API access, and dedicated routes for growing teams.",
      cta: "Learn more",
    },
    {
      icon: <LocateFixed />,
      title: "Real-time Tracking",
      description:
        "Follow every parcel's exact position from pickup to final mile.",
      cta: "Learn more",
    },
    {
      icon: <QrCode />,
      title: "QR Parcel Verification",
      description:
        "Every handoff is confirmed with a scan, so nothing changes hands unseen.",
      cta: "Learn more",
    },
    {
      icon: <Warehouse />,
      title: "Warehouse Solutions",
      description:
        "Short and long-term storage with inventory visibility built in.",
      cta: "Learn more",
    },
  ];
  return (
    <section className="py-24 bg-[#09081D]" id="services">
      <div className="container mx-auto px-4">
        <div className="">
          <p className="text-sm font-bold uppercase tracking-widest text-[#3BA1FE] mb-4">
            Services
          </p>
          <h2 className="text-4xl font-bold text-white text-foreground mb-6 leading-tight">
            One platform, every shipping need.
          </h2>
          <p className="text-lg text-white text-foreground/70 mb-4">
            From a single doorstep pickup to nationwide business logistics,
            Psycehwave scales with what you're moving
          </p>
          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {card.map((item, index) => (
              <motion.div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#eaf5ff] text-[#3BA1FE] rounded-full mb-6 flex items-center justify-center">
                  {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 mb-4 grow">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="font-bold text-[#3BA1FE] hover:underline mt-auto"
                >
                  {item.cta} <span aria-hidden="true">&rarr;</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

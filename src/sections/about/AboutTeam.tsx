"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerContainer,
  sectionViewport,
} from "@/lib/animations";

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    bio: "With over two decades in real estate, Arjun founded AuraSpace to redefine luxury renting in India with transparency and trust.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Priya Srinivasan",
    role: "Head of Concierge",
    bio: "Priya leads our white-glove service team, ensuring every client transition is seamless, personal, and stress-free.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Vikram Khanna",
    role: "Director of Curation",
    bio: "Vikram oversees property selection, personally vetting every listing to ensure it meets our standards of quality and design.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Ananya Reddy",
    role: "Head of Design & Interiors",
    bio: "Ananya brings a trained eye for spatial design and material quality, evaluating every home's architectural and aesthetic merit.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export function AboutTeam() {
  return (
    <motion.section
      className="py-8 md:py-12 lg:py-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <motion.div
            variants={staggerContainer}
            className="flex flex-col items-start gap-4 text-left"
          >
            <motion.span
              variants={fadeIn}
              className="font-body text-eyebrow"
            >
              Leadership
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-h1 max-w-xl"
            >
              Meet the team behind AuraSpace
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group flex flex-col bg-surface rounded-2xl border border-border overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <h3 className="text-h3 font-body">{member.name}</h3>
                  <span className="font-body text-eyebrow text-accent">
                    {member.role}
                  </span>
                  <p className="font-body text-caption text-muted-foreground mt-1">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

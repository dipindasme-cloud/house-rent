"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100svh-4rem)] flex items-center overflow-hidden px-[1.5rem] md:px-[3rem] lg:px-[6rem] pt-[6rem] pb-[3rem]"
      data-framer-name="Hero Section"
    >
      <div
        className="absolute inset-0 z-10 bg-black/40"
        data-framer-name="Overlay"
      />

      <motion.div
        className="absolute inset-0"
        data-framer-name="BG"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/images/hero/luxury-interior.jpg"
          alt="image"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div
        className="relative z-20 w-full max-w-[80rem] mx-auto"
        data-framer-name="Container"
      >
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-[3rem]"
          data-framer-name="Content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={sectionViewport}
        >
          <div
            className="flex flex-col gap-[1.5rem] max-w-[36rem]"
            data-framer-name="Title and Button"
          >
            <motion.div
              variants={fadeInUp}
              transition={defaultTransition}
              data-framer-name="A property tailored to your lifestyle"
            >
              <h1 className="text-white text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-bold leading-[1.1] tracking-[-0.02em]">
                A property tailored to your lifestyle
              </h1>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              transition={defaultTransition}
              data-framer-name="Button Primary"
            >
              <Link
                href="/listings"
                className="inline-flex items-center gap-[0.75rem] bg-white text-[rgb(19,36,40)] text-[1rem] font-semibold leading-none py-[0.875rem] px-[1.5rem] rounded-[0.625rem] transition-opacity duration-200 hover:opacity-90 no-underline w-fit"
              >
                <svg
                  className="w-[1.25rem] h-[1.25rem] shrink-0"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z" />
                </svg>
                Listed Homes
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="bg-white rounded-[0.625rem] overflow-hidden shadow-[0_0.5rem_2rem_rgba(0,0,0,0.12)] max-w-[20rem] w-full"
            data-framer-name="Hero Card"
            variants={fadeInRight}
            transition={{ ...defaultTransition, delay: 0.3 }}
          >
            <div className="relative aspect-[16/10]" data-framer-name="Video">
              <video
                src="/video/card1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div
              className="flex flex-col gap-[0.25rem] p-[1rem]"
              data-framer-name="Text Wrapper"
            >
              <motion.div
                variants={fadeIn}
                transition={{ ...defaultTransition, delay: 0.6 }}
                data-framer-name="$50K"
              >
                <span className="text-[1.25rem] text-[rgb(19,36,40)] font-bold leading-none">
                  &#8377;50K
                </span>
              </motion.div>
              <motion.div
                variants={fadeIn}
                transition={{ ...defaultTransition, delay: 0.7 }}
                data-framer-name="Helping clients secure higher returns on every property"
              >
                <span className="text-[0.8125rem] text-[rgb(99,111,114)] leading-snug">
                  Helping clients secure higher returns on every property
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

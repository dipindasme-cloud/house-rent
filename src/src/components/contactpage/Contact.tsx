"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Container from "@/components/ui/Container";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Submitting form data:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section className="relative w-full bg-background pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <Container className=" flex flex-col items-center gap-12 md:gap-16">

      {/* 1. Header & Quick Mail Block */}
      <div className="text-center flex flex-col items-center max-w-[36rem]">
        <TextReveal
          words="CONTACT"
          as="h2"
          className="t-display text-foreground mb-4"
        />
        <p className="t-body text-muted-400 mb-2">
          Interested in working together? Send me an email to
        </p>
        <a
          href="mailto:dipinmkmr1234@gmail.com"
          className="t-body-lg text-foreground font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          dipinmkmr1234@gmail.com
        </a>
      </div>

      {/* 2. Minimalist Form Block */}
      <div className="w-full max-w-[32rem]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="t-label text-muted">
              Name*
            </label>
            <input
              type="text"
              required
              placeholder="Jane Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-4 rounded-md bg-foreground/[0.02] border border-border text-foreground text-base outline-none transition-colors focus:border-border/80 focus:bg-foreground/[0.04]"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="t-label text-muted">
              Email*
            </label>
            <input
              type="email"
              required
              placeholder="jane@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 rounded-md bg-foreground/[0.02] border border-border text-foreground text-base outline-none transition-colors focus:border-border/80 focus:bg-foreground/[0.04]"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label className="t-label text-muted">
              Message*
            </label>
            <textarea
              required
              rows={5}
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-4 rounded-md bg-foreground/[0.02] border border-border text-foreground text-base outline-none transition-colors focus:border-border/80 focus:bg-foreground/[0.04] resize-none"
            />
          </div>

          {/* Submit Action */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-4 rounded-full bg-foreground text-background text-sm font-semibold border-none cursor-pointer mt-2 transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </motion.button>
        </form>
      </div>

      </Container>
    </section>
  );
}
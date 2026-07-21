"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    preferredDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-[1.5rem] py-[4rem] text-center"
      >
        <div className="w-[4rem] h-[4rem] rounded-full bg-brand-600 flex items-center justify-center">
          <svg
            className="w-[2rem] h-[2rem] text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-[1.5rem] text-text-primary font-bold">
          Tour request submitted!
        </h3>
        <p className="text-[0.9375rem] text-text-secondary max-w-[24rem]">
          We&apos;ll contact you within 24 hours to confirm your visit. Thank
          you for choosing AuraSpace.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[1.5rem]"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
        <motion.div variants={fadeInLeft} transition={defaultTransition}>
          <label className="block text-[0.8125rem] text-text-secondary font-medium mb-[0.5rem]">
            Full Name
          </label>
          <Input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div variants={fadeInRight} transition={defaultTransition}>
          <label className="block text-[0.8125rem] text-text-secondary font-medium mb-[0.5rem]">
            Email Address
          </label>
          <Input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
        <motion.div variants={fadeInLeft} transition={defaultTransition}>
          <label className="block text-[0.8125rem] text-text-secondary font-medium mb-[0.5rem]">
            Phone Number
          </label>
          <Input
            type="tel"
            name="phone"
            placeholder="+91 99999 99999"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div variants={fadeInRight} transition={defaultTransition}>
          <label className="block text-[0.8125rem] text-text-secondary font-medium mb-[0.5rem]">
            Property Type
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
            className="w-full bg-surface text-text-primary placeholder:text-text-muted border border-border outline-none transition-colors duration-200 focus:border-brand-400 focus:ring-[0.125rem] focus:ring-brand-400/20 py-[0.6875rem] px-[1rem] text-[0.9375rem] rounded-[0.75rem] leading-none cursor-pointer"
          >
            <option value="">Select type</option>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Any">Any</option>
          </select>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp} transition={defaultTransition}>
        <label className="block text-[0.8125rem] text-text-secondary font-medium mb-[0.5rem]">
          Preferred Date
        </label>
        <Input
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          required
        />
      </motion.div>

      <motion.div variants={fadeInUp} transition={defaultTransition}>
        <label className="block text-[0.8125rem] text-text-secondary font-medium mb-[0.5rem]">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell us what you're looking for..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-surface text-text-primary placeholder:text-text-muted border border-border outline-none transition-colors duration-200 focus:border-brand-400 focus:ring-[0.125rem] focus:ring-brand-400/20 py-[0.6875rem] px-[1rem] text-[0.9375rem] rounded-[0.75rem] leading-relaxed resize-none"
        />
      </motion.div>

      <motion.div variants={fadeInUp} transition={defaultTransition}>
        <Button type="submit" size="lg" className="w-full">
          <svg
            className="w-[1.125rem] h-[1.125rem] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Request Tour
        </Button>
      </motion.div>
    </motion.form>
  );
}

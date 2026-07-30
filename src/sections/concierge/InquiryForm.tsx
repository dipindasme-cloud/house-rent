"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  sectionViewport,
} from "@/lib/animations";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredTime: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const SERVICES = [
  "Private Transport",
  "Yacht Charters",
  "Fine Dining",
  "Estate Care",
  "General Inquiry",
];

export function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredTime: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 py-8 md:py-12 lg:py-14 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
          <svg
            className="w-8 h-8 text-accent-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="font-display text-h2 text-foreground">Inquiry submitted!</h2>
        <p className="font-body text-body max-w-sm text-muted-foreground">
          Thank you for your inquiry. Our concierge team will reach out within
          24 hours to assist you.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={staggerContainer}
      noValidate
    >
      <motion.div variants={fadeInUp} transition={defaultTransition}>
        <label htmlFor="concierge-name" className="block font-body text-caption mb-2">
          Full Name
        </label>
        <Input
          id="concierge-name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="font-body text-caption text-danger mt-1">
            {errors.name}
          </p>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div variants={fadeInUp} transition={defaultTransition}>
          <label htmlFor="concierge-email" className="block font-body text-caption mb-2">
            Email Address
          </label>
          <Input
            id="concierge-email"
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="font-body text-caption text-danger mt-1">
              {errors.email}
            </p>
          )}
        </motion.div>

        <motion.div variants={fadeInUp} transition={defaultTransition}>
          <label htmlFor="concierge-phone" className="block font-body text-caption mb-2">
            Phone Number
          </label>
          <Input
            id="concierge-phone"
            type="tel"
            name="phone"
            placeholder="+91 99999 99999"
            value={formData.phone}
            onChange={handleChange}
          />
        </motion.div>
      </div>

      <motion.div variants={fadeInUp} transition={defaultTransition}>
        <label htmlFor="concierge-service" className="block font-body text-caption mb-2">
          Service Interest
        </label>
        <select
          id="concierge-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-surface text-foreground placeholder:text-muted-foreground border border-border outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 py-[0.6875rem] px-4 text-body rounded-xl leading-none cursor-pointer"
        >
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div variants={fadeInUp} transition={defaultTransition}>
          <label htmlFor="concierge-time" className="block font-body text-caption mb-2">
            Preferred Contact Time
          </label>
          <select
            id="concierge-time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full bg-surface text-foreground border border-border outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 py-[0.6875rem] px-4 text-body rounded-xl leading-none cursor-pointer"
          >
            <option value="">Select time</option>
            <option value="Morning">Morning (9 AM - 12 PM)</option>
            <option value="Afternoon">Afternoon (12 PM - 5 PM)</option>
            <option value="Evening">Evening (5 PM - 8 PM)</option>
          </select>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp} transition={defaultTransition}>
        <label htmlFor="concierge-message" className="block font-body text-caption mb-2">
          Message
        </label>
        <Textarea
          id="concierge-message"
          name="message"
          placeholder="Tell us what you're looking for..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="font-body text-caption text-danger mt-1">
            {errors.message}
          </p>
        )}
      </motion.div>

      {serverError && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-body text-caption text-danger"
        >
          {serverError}
        </motion.p>
      )}

      <motion.div variants={fadeInUp} transition={defaultTransition}>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent text-accent-foreground hover:opacity-90"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </span>
          ) : (
            "Send Inquiry"
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
}

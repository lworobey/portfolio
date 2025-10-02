"use client";

import React, { useState, useRef, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const isValid = true; 

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid) return;

    setStatus("sending");
    setError(null);

    // Execute reCAPTCHA v3
    const token = await recaptchaRef.current?.executeAsync();
    if (!token) {
      setError("reCAPTCHA verification failed");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, recaptchaToken: token }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error ?? "Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full border p-2"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full border p-2"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 h-32 w-full resize-y border p-2"
          placeholder="message"
        />
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        size="invisible"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-green-600 px-4 py-2 text-white disabled:opacity-50 hover:cursor-pointer"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      <p aria-live="polite" className="text-sm">
        {status === "success" && "Thanks—your message was sent."}
        {status === "error" && (
          <span className="text-red-600">
            {error ?? "There was an error. Please try again."}
          </span>
        )}
      </p>
    </form>
  );
}

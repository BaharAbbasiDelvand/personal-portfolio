import React, { useState, useEffect } from "react";
import type { IconType } from "react-icons";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Mail, Copy, Check, Send, ExternalLink } from "lucide-react";
import emailjs from "@emailjs/browser";
import { AppFrame } from "../app-frames/App-frames";
import "./contact-me.css";

const validator = require("validator");

const EMAIL = "baharabbasidelvand@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/baharabbasidelvand/";
const GITHUB = "https://github.com/BaharAbbasiDelvand";

type ContactMeProps = {
    isOpen: boolean;
    onClose: () => void;
    focusToken?: number;
};

type FormState = { name: string; email: string; message: string };

type SendStatus = "idle" | "sending" | "sent" | "error";

type LinkCard = {
    id: string;
    label: string;
    handle: string;
    href: string;
    icon: IconType;
    color: string;
};

const initialForm: FormState = { name: "", email: "", message: "" };

const linkCards: LinkCard[] = [
    {
        id: "linkedin",
        label: "LinkedIn",
        handle: "in/baharabbasidelvand",
        href: LINKEDIN,
        icon: SiLinkedin,
        color: "#0A66C2",
    },
    {
        id: "github",
        label: "GitHub",
        handle: "BaharAbbasiDelvand",
        href: GITHUB,
        icon: SiGithub,
        color: "#181717",
    },
];

export const ContactMe: React.FC<ContactMeProps> = ({
    isOpen,
    onClose,
    focusToken,
}) => {
    const [form, setForm] = useState<FormState>(initialForm);
    const [status, setStatus] = useState<SendStatus>("idle");
    const [copied, setCopied] = useState(false);

    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;

    const emailValid = validator.isEmail(form.email);
    const isValid =
        emailValid &&
        form.name.trim().length > 0 &&
        form.message.trim().length > 0;

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setForm((previous) => ({ ...previous, [name]: value }));
        if (status === "sent" || status === "error") {
            setStatus("idle");
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
        } catch (error) {
            setCopied(false);
        }
    };

    useEffect(() => {
        if (!copied) return;
        const timeout = setTimeout(() => setCopied(false), 1500);
        return () => clearTimeout(timeout);
    }, [copied]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!isValid || status === "sending") return;
        setStatus("sending");
        emailjs
            .send(
                SERVICE_ID ?? "",
                TEMPLATE_ID ?? "",
                {
                    from_name: form.name,
                    from_email: form.email,
                    to_name: "Bahar",
                    message: form.message,
                    website: "",
                },
                PUBLIC_KEY ?? ""
            )
            .then(
                () => {
                    setStatus("sent");
                    setForm(initialForm);
                },
                () => {
                    setStatus("error");
                }
            );
    };

    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            focusToken={focusToken}
            title="Contact Me"
            overlay
            windowClassName="contact-me-window"
            contentClassName="contact-me-body"
        >
            <div className="contact-layout">
                <aside className="contact-links">
                    <h1 className="contact-title">Let&apos;s connect</h1>
                    <p className="contact-sub">
                        Reach out through any of these, or send me a message
                        right here.
                    </p>

                    <div className="contact-card-list">
                        {linkCards.map((card) => {
                            const CardIcon = card.icon;
                            return (
                                <div key={card.id} className="contact-card">
                                    <a
                                        className="contact-card-main"
                                        href={card.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span
                                            className="contact-card-icon"
                                            style={{ color: card.color }}
                                        >
                                            <CardIcon />
                                        </span>
                                        <span className="contact-card-text">
                                            <span className="contact-card-label">
                                                {card.label}
                                            </span>
                                            <span className="contact-card-handle">
                                                {card.handle}
                                            </span>
                                        </span>
                                    </a>
                                    <div className="contact-card-actions">
                                        <a
                                            className="contact-card-ext"
                                            href={card.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Open ${card.label}`}
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="contact-card">
                            <a
                                className="contact-card-main"
                                href={`mailto:${EMAIL}`}
                            >
                                <span
                                    className="contact-card-icon"
                                    style={{ color: "#4F46E5" }}
                                >
                                    <Mail size={24} />
                                </span>
                                <span className="contact-card-text">
                                    <span className="contact-card-label">
                                        Email
                                    </span>
                                    <span className="contact-card-handle contact-email">
                                        <span className="contact-email-user">
                                            {EMAIL.split("@")[0]}
                                        </span>
                                        <span className="contact-email-domain">
                                            @{EMAIL.split("@")[1]}
                                        </span>
                                    </span>
                                </span>
                            </a>
                            <div className="contact-card-actions">
                                <button
                                    type="button"
                                    className="contact-copy"
                                    onClick={handleCopy}
                                    aria-label="Copy email address"
                                >
                                    {copied ? (
                                        <Check size={16} />
                                    ) : (
                                        <Copy size={16} />
                                    )}
                                </button>
                                <a
                                    className="contact-card-ext"
                                    href={`mailto:${EMAIL}`}
                                    aria-label="Open email app"
                                >
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>

                <section className="contact-form-panel">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label className="contact-field">
                            <span className="contact-field-label">Name</span>
                            <input
                                className="contact-input"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                autoComplete="name"
                            />
                        </label>

                        <label className="contact-field">
                            <span className="contact-field-label">Email</span>
                            <input
                                className="contact-input"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                autoComplete="email"
                            />
                        </label>

                        <label className="contact-field">
                            <span className="contact-field-label">Message</span>
                            <textarea
                                className="contact-input contact-textarea"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What would you like to say?"
                                rows={5}
                            />
                        </label>

                        <div className="contact-actions">
                            <button
                                type="submit"
                                className="contact-send"
                                disabled={!isValid || status === "sending"}
                            >
                                {status === "sending" ? (
                                    "Sending…"
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Send message
                                    </>
                                )}
                            </button>

                            {status === "sent" && (
                                <span className="contact-status is-ok">
                                    Thanks! Your message is on its way.
                                </span>
                            )}
                            {status === "error" && (
                                <span className="contact-status is-err">
                                    Something went wrong — email me directly.
                                </span>
                            )}
                        </div>
                    </form>
                </section>
            </div>
        </AppFrame>
    );
};

export default ContactMe;

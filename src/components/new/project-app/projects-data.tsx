import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiVite,
    SiPython,
    SiElm,
} from "react-icons/si";
import {
    Trophy,
    Shuffle,
    ListOrdered,
    Share2,
    BookOpen,
    Star,
    LayoutGrid,
    Database,
    Ruler,
    GraduationCap,
    Sparkles,
    Gamepad2,
    Grid3x3,
    Crosshair,
    Crown,
} from "lucide-react";
import type { ProjectContent } from "./ProjectApp";

export const projectApps: ProjectContent[] = [
    {
        id: "bracket",
        title: "Bracket Maker",
        tagline:
            "A tournament bracket builder for generating, seeding, and running knockout competitions — currently in active development.",
        badge: "Work in progress",
        wip: true,
        accent: "#6366f1",
        accentInk: "#4338ca",
        gradientFrom: "#6366f1",
        gradientTo: "#4338ca",
        description:
            "Bracket Maker is a project I'm actively building to make running tournaments effortless — from a weekend game night to a full playoff. You add participants, pick a format, and the app generates a clean, interactive bracket that you advance round by round as matches are decided. Right now I'm focused on getting the seeding logic and bracket rendering right before polishing it for a public release.",
        highlights: [
            {
                icon: Trophy,
                title: "Single & double elimination",
                text: "Generate balanced knockout brackets for any number of entrants, with automatic byes.",
            },
            {
                icon: Shuffle,
                title: "Smart seeding",
                text: "Seed participants by hand or randomize the draw, then reshuffle on the fly.",
            },
            {
                icon: ListOrdered,
                title: "Advance round by round",
                text: "Push winners forward and watch the bracket fill in all the way to the final.",
            },
            {
                icon: Share2,
                title: "Made to share",
                text: "Built so a finished bracket can be shared and followed by everyone in the pool.",
            },
        ],
        tech: [
            { name: "React", icon: SiReact, color: "#149ECA" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        ],
        placeholder: {
            title: "Demo coming soon",
            text: "Bracket Maker is still in development — a live demo and walkthrough will land here once it's ready.",
        },
        links: [{ label: "Live demo — coming soon", variant: "soon" }],
    },
    {
        id: "book-tracker",
        title: "Book Tracker",
        tagline:
            "A full-stack MERN library where you track, review, and rate everything you read.",
        badge: "Full-stack · MERN",
        accent: "#10b981",
        accentInk: "#0f766e",
        gradientFrom: "#34d399",
        gradientTo: "#0d9488",
        description:
            "A MERN (MongoDB, Express, React, Node) application for managing a personal reading list. It supports complete CRUD operations so you can add, edit, and remove books, and leave reviews and ratings for each one. I built the API with Express and Node on top of a MongoDB database, scaffolded the front end with Vite for fast builds, and designed a responsive interface with Tailwind CSS.",
        highlights: [
            {
                icon: BookOpen,
                title: "Full CRUD library",
                text: "Create, read, update, and delete books with title, author, publish year, and rating.",
            },
            {
                icon: Star,
                title: "Reviews & ratings",
                text: "Leave personal reviews and ratings to build a record of everything you've read.",
            },
            {
                icon: LayoutGrid,
                title: "Table & card views",
                text: "Switch between a dense table and a visual card layout on any screen size.",
            },
            {
                icon: Database,
                title: "MongoDB-backed",
                text: "A secure MongoDB database stores every book and review behind a clean Express API.",
            },
        ],
        tech: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Express", icon: SiExpress, color: "#111111" },
            { name: "React", icon: SiReact, color: "#149ECA" },
            { name: "Node.js", icon: SiNodedotjs, color: "#539E43" },
            { name: "Vite", icon: SiVite, color: "#646CFF" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        ],
        screenshot: "/BookMERN.png",
        screenshotAlt: "Book Tracker books list",
        links: [
            {
                label: "View on GitHub",
                href: "https://github.com/BaharAbbasiDelvand/MERN-Book-Keeper",
                variant: "ghost",
            },
        ],
    },
    {
        id: "angle",
        title: "Angle Management",
        tagline:
            "A protractor-tutorial game that teaches 7th graders how to measure angles.",
        badge: "Educational game · Elm",
        accent: "#f59e0b",
        accentInk: "#c2410c",
        gradientFrom: "#fbbf24",
        gradientTo: "#f97316",
        description:
            "Angle Management is an educational game written in Elm, built to help 7th-grade CBSE students learn to use a protractor. Through a series of tutorials and levels, players practice measuring and constructing angles in a guided, low-pressure way. I approached it as a design problem as much as an engineering one — applying Norman's design principles and a Double Diamond process to shape an intuitive experience and a structured learning path.",
        highlights: [
            {
                icon: Ruler,
                title: "Learn by doing",
                text: "Interactive levels walk students through reading and using a protractor.",
            },
            {
                icon: GraduationCap,
                title: "Built for CBSE Grade 7",
                text: "Designed around a real curriculum, with tutorials that build up in difficulty.",
            },
            {
                icon: Sparkles,
                title: "Design-led",
                text: "Grounded in Norman's principles and a Double Diamond process for an intuitive flow.",
            },
            {
                icon: Gamepad2,
                title: "Game feel",
                text: "Playful levels and topic reviews keep practice engaging instead of rote.",
            },
        ],
        tech: [{ name: "Elm", icon: SiElm, color: "#1293D8" }],
        screenshot: "/Angle.png",
        screenshotAlt: "Angle Management title screen",
        links: [
            {
                label: "View on GitHub",
                href: "https://github.com/BaharAbbasiDelvand/AngleManagement",
                variant: "ghost",
            },
        ],
    },
    {
        id: "checkers",
        title: "Checkers",
        tagline:
            "A classic checkers game with full rules — moves, captures, promotion, and win detection.",
        badge: "Game · Logic",
        accent: "#ef4444",
        accentInk: "#b91c1c",
        gradientFrom: "#f87171",
        gradientTo: "#b91c1c",
        description:
            "A faithful implementation of checkers that follows the standard rules of play. The game models an 8×8 board and handles piece movement, jumps and captures, promotion, and victory conditions. I built it as an exercise in game logic and problem-solving — keeping the design simple and the rules correct, with a clear board readout on every turn.",
        highlights: [
            {
                icon: Grid3x3,
                title: "8×8 board engine",
                text: "A complete board model that tracks every piece and legal position.",
            },
            {
                icon: Crosshair,
                title: "Moves & captures",
                text: "Standard movement, jumps, and multi-captures are fully implemented.",
            },
            {
                icon: Crown,
                title: "King me",
                text: "Pieces that reach the back row are promoted and gain new movement.",
            },
            {
                icon: Trophy,
                title: "Win conditions",
                text: "Detects when a player runs out of pieces or legal moves and ends the game.",
            },
        ],
        tech: [{ name: "Python", icon: SiPython, color: "#3776AB" }],
        screenshot: "/Checkers.png",
        screenshotAlt: "Checkers board readout",
        links: [
            {
                label: "View on GitHub",
                href: "https://github.com/BaharAbbasiDelvand/Checkers",
                variant: "ghost",
            },
        ],
    },
];

export const projectAppIds = projectApps.map((project) => project.id);

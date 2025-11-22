"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "EventSphere",
        description: "A real-time location-based event discovery platform with Redis Geo and live maps. Reduced API response time from 800ms to <50ms and scaled to 500+ concurrent users.",
        tech: ["ExpressJS", "ReactJS", "NodeJS", "TypeScript", "PostgreSQL", "Redis", "Socket.io", "Leaflet.js"],
        demo: "https://eventsphere4u.vercel.app/",
        github: null, // Not provided in prompt, assuming private or same as demo for now
    },
    {
        title: "AI PDF Note-Taking App",
        description: "An AI tool where users upload PDFs and ask questions; answers generated directly from document content using AI.",
        tech: ["Next.js", "Convex DB", "Google Gemini", "Vercel"],
        demo: "https://ai-pdf-note-taker-zeta.vercel.app/",
        github: null,
    },
    {
        title: "Dream Nest",
        description: "A real-time real-estate platform for property listings and inquiries, improving DB query performance by 40%.",
        tech: ["MongoDB", "Node.js", "Express.js", "React"],
        demo: "https://github.com/parvatirana01/Integrated-Project", // This is a github link
        github: "https://github.com/parvatirana01/Integrated-Project",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Featured <span className="text-primary">Projects</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all group flex flex-col"
                            >
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                            <Folder className="w-6 h-6" />
                                        </div>
                                        <div className="flex gap-3">
                                            {project.github && (
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    className="text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </Link>
                                            )}
                                            <Link
                                                href={project.demo}
                                                target="_blank"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

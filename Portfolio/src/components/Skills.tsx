"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React", "Next.js", "Node.js", "Express.js", "TailwindCSS", "Bootstrap", "Leaflet.js"],
    },
    {
        title: "Databases & ORM",
        skills: ["PostgreSQL (Prisma)", "MongoDB (Mongoose)"],
    },
    {
        title: "Caching & Real-Time",
        skills: ["Redis", "Socket.io", "WebSockets"],
    },
    {
        title: "Other Tools",
        skills: ["Git", "Docker", "Postman", "VS Code", "MongoDB Compass", "Nodemailer"],
    },
    {
        title: "Current Specialization",
        skills: ["PHP", "WordPress"],
        highlight: true,
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Technical <span className="text-primary">Skills</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className={`p-6 rounded-2xl border transition-all ${category.highlight
                                        ? "bg-primary/10 border-primary/50"
                                        : "bg-black/40 border-white/10 hover:border-primary/30"
                                    }`}
                            >
                                <h3 className={`text-xl font-bold mb-4 ${category.highlight ? "text-primary" : "text-white"}`}>
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${category.highlight
                                                    ? "bg-primary/20 text-primary border border-primary/20"
                                                    : "bg-white/5 text-gray-300 border border-white/5"
                                                }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

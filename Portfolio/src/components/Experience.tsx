"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "SDE Intern",
        company: "WizCommerce",
        location: "Gurugram, Haryana",
        period: "July 2025 – Present",
        description: "B2B SaaS Company",
        achievements: [
            "Worked on a major migration project converting React apps to WordPress & PHP.",
            "Optimized modules, widgets, and scripts, improving page load speed by 20%.",
            "Hands-on experience in front-end development + CMS integration + cross-platform migration.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        My <span className="text-primary">Experience</span>
                    </h2>

                    <div className="max-w-3xl mx-auto relative border-l border-white/20 ml-4 md:ml-auto pl-8 md:pl-12 space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 bg-primary rounded-full border-4 border-black" />

                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                            <p className="text-primary font-medium">{exp.company}</p>
                                        </div>
                                        <div className="text-right md:text-right">
                                            <p className="text-sm text-gray-400">{exp.period}</p>
                                            <p className="text-xs text-gray-500">{exp.location}</p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-400 mb-4 italic">{exp.description}</p>

                                    <ul className="space-y-2">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

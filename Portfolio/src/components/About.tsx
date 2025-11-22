"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed">
                                I am a B.Tech CSE student (2022–Present) from Chitkara University, Himachal Pradesh, with a strong foundation in problem-solving, Data Structures & Algorithms, and full-stack development.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                My passion lies in building scalable and high-performance applications. I have gained hands-on development experience through various projects, internships, and hackathons.
                            </p>
                            <div className="flex items-center gap-4 text-gray-300">
                                <Code className="w-6 h-6 text-primary" />
                                <span>Passionate about Clean Code & Architecture</span>
                            </div>
                        </div>

                        <div className="bg-black/40 p-8 rounded-2xl border border-white/10">
                            <div className="flex items-start gap-4 mb-6">
                                <GraduationCap className="w-8 h-8 text-secondary mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white">B.Tech in Computer Science</h3>
                                    <p className="text-gray-400">Chitkara University, HP</p>
                                    <p className="text-sm text-gray-500">2022 – Present</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-white font-medium mb-2">Key Coursework:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Data Structures", "Algorithms", "DBMS", "OS", "CN", "OOPs"].map((course) => (
                                        <span key={course} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

export default function Achievements() {
    return (
        <section id="achievements" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Key <span className="text-primary">Achievements</span>
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                            {/* Decorative background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

                            <div className="bg-black/50 p-4 rounded-full border border-primary/50">
                                <Trophy className="w-12 h-12 text-yellow-400" />
                            </div>

                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-2">3rd Runner-Up — HackExpo Cybersecurity Competition</h3>
                                <p className="text-primary font-medium mb-4">Dec 2024</p>
                                <p className="text-gray-300 mb-4">
                                    Outperformed 50 teams and secured a score of 890 points, winning a ₹10,000 cash prize.
                                </p>
                                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400">
                                    <Award className="w-4 h-4 text-secondary" />
                                    <span>Cybersecurity Challenge</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

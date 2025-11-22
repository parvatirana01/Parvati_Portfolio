"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-medium text-lg mb-4 tracking-wide">
                        HELLO, I&apos;M
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Parvati Rana
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Software Engineer & Full-Stack Developer
                    </p>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                        I build scalable, high-performance applications with a focus on problem-solving and modern web technologies.
                        Passionate about creating seamless user experiences.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
                        >
                            View Projects <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="/Parvati_WIZ_resume.pdf" // Placeholder for resume
                            download
                            className="px-8 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
                        >
                            Download Resume <Download className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
